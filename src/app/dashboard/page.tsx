'use client';

import React, { useEffect, useRef } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import LiveCharts from '@/components/dashboard/LiveCharts';
import StatusPanels from '@/components/dashboard/StatusPanels';
import { useSimulationStore } from '@/lib/store';
import { AirFlowSimulator } from '@/lib/simulation';
import { ModeLogic } from '@/lib/modes';
import { generateAIInsight } from '@/lib/gemini';
import { Sparkles } from 'lucide-react';

export default function DashboardPage() {
    const { updateMetrics, operatingMode, windSpeed, pmLevel, batterySoc } = useSimulationStore();
    const [aiInsight, setAiInsight] = React.useState("Initializing AI connection...");
    const [isGenerating, setIsGenerating] = React.useState(false);

    // Use ref to ensure unique simulator instance per client session
    const simulator = useRef(new AirFlowSimulator());

    // Simulation Loop
    useEffect(() => {
        const timer = setInterval(() => {
            const sim = simulator.current;

            // 1. Tick Time
            sim.tick();

            // 2. Generate Real-time Data
            const wind = sim.generateWindSpeed();
            const solar = sim.generateSolarIrradiance();
            const isPurifying = operatingMode === 'PURIFY';
            const pm = sim.generatePMLevel(isPurifying);

            const power = sim.calculatePowerOutput(wind, solar);

            // 3. Control Logic via Modes.ts
            const nextMode = ModeLogic.determineMode({
                batterySoc: useSimulationStore.getState().batterySoc,
                windSpeed: wind,
                pmLevel: pm
            });

            // Battery Logic based on Mode
            let batteryDelta = 0;
            if (nextMode === 'HARVEST') batteryDelta = (power / 5000) * 0.5;
            if (nextMode === 'PURIFY') batteryDelta = -0.15; // Higher drain
            if (nextMode === 'SLEEP') batteryDelta = -0.01;

            // Update Store
            updateMetrics({
                windSpeed: parseFloat(wind.toFixed(1)),
                solarIrradiance: Math.floor(solar),
                pmLevel: parseFloat(pm.toFixed(1)),
                powerOutput: power,
                batterySoc: Math.min(100, Math.max(0, useSimulationStore.getState().batterySoc + batteryDelta)),
                operatingMode: nextMode
            });

        }, 1000);

        return () => clearInterval(timer);
    }, [operatingMode, updateMetrics]);

    // AI Insight Generator
    const handleGenerateInsight = async () => {
        setIsGenerating(true);
        const insight = await generateAIInsight({
            windSpeed,
            pmLevel,
            batterySoc,
            operatingMode
        });
        setAiInsight(insight);
        setIsGenerating(false);
    };

    // Initial Insight
    useEffect(() => {
        handleGenerateInsight();
        const aiTimer = setInterval(handleGenerateInsight, 30000); // New insight every 30s
        return () => clearInterval(aiTimer);
    }, []);

    return (
        <DashboardLayout>
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold dark:text-white">Network Command Center</h1>
                    <p className="text-slate-500">Live telemetry from NH-48 Corridor (5 Stations)</p>
                </div>

                <div className="hidden md:flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                    <Sparkles size={16} />
                    <span>AI Optimization Active</span>
                </div>
            </div>

            <StatusPanels />

            <LiveCharts />

            {/* AI Insights & Log */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h3 className="font-bold mb-4 dark:text-white">System Logs</h3>
                    <div className="space-y-3 font-mono text-xs text-slate-500">
                        <div className="flex justify-between border-l-2 border-green-500 pl-3">
                            <span>[SYSTEM] Mode transition: {operatingMode} engaged.</span>
                            <span>12:42:05</span>
                        </div>
                        <div className="flex justify-between border-l-2 border-blue-500 pl-3">
                            <span>[NET] Uploaded 5-min telemetry bundle to Cloud</span>
                            <span>12:40:00</span>
                        </div>
                        <div className="flex justify-between border-l-2 border-slate-300 pl-3 opacity-60">
                            <span>[SENSOR] Calibrating PM2.5 optical counter...</span>
                            <span>12:38:15</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-6 shadow-md flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold mb-2 flex items-center gap-2">
                            <Sparkles size={16} className="text-purple-400" /> Gemini Insight
                        </h3>
                        <p className="text-sm text-slate-300 italic mb-4 min-h-[60px]">
                            "{aiInsight}"
                        </p>
                    </div>
                    <button
                        onClick={handleGenerateInsight}
                        disabled={isGenerating}
                        className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold transition-colors flex justify-center items-center"
                    >
                        {isGenerating ? 'Analyzing...' : 'Generate New Analysis'}
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
}
