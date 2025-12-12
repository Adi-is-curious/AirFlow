'use client';

import React from 'react';
import { useSimulationStore } from '@/lib/store';
import { Heart, Activity, BatteryCharging, CloudRain, Fan } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StatusPanels() {
    const { operatingMode, batterySoc, livesProtected, windSpeed, pmLevel } = useSimulationStore();

    // Derived state for Operating Mode details
    const modeConfig = {
        HARVEST: { color: 'text-blue-500', bg: 'bg-blue-500/10', label: 'Harvesting Energy' },
        PURIFY: { color: 'text-emerald-500', bg: 'bg-emerald-500/10', label: 'Active Purification' },
        SLEEP: { color: 'text-slate-500', bg: 'bg-slate-500/10', label: 'Low Power / Sleep' },
        STORM: { color: 'text-red-500', bg: 'bg-red-500/10', label: 'Storm Safety Lock' },
    };

    const currentConfig = modeConfig[operatingMode];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

            {/* 1. Impact Counter (The "Secret Weapon") */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Heart size={64} />
                </div>
                <h3 className="text-indigo-100 text-sm font-medium mb-1">Lives Protected Today</h3>
                <div className="text-3xl font-bold flex items-baseline gap-1">
                    {livesProtected.toLocaleString()}
                    <span className="text-xs font-normal opacity-70">people</span>
                </div>
                <div className="mt-2 text-xs bg-white/20 w-fit px-2 py-0.5 rounded-full">
                    +12 in last hour
                </div>
            </div>

            {/* 2. Operating Mode */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <h3 className="text-slate-500 text-sm font-medium">System Mode</h3>
                    <Activity size={18} className={currentConfig.color} />
                </div>
                <div>
                    <div className={`text-lg font-bold ${currentConfig.color}`}>
                        {operatingMode}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{currentConfig.label}</div>
                </div>
            </div>

            {/* 3. Battery Health */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <h3 className="text-slate-500 text-sm font-medium">Battery Storage</h3>
                    <BatteryCharging size={18} className={batterySoc > 20 ? 'text-green-500' : 'text-orange-500'} />
                </div>
                <div>
                    <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold dark:text-white">{batterySoc.toFixed(1)}%</span>
                        <span className="text-xs text-slate-400 mb-1">SoC</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-2">
                        <div
                            className={`h-full rounded-full transition-all duration-500 ${batterySoc > 20 ? 'bg-green-500' : 'bg-orange-500'}`}
                            style={{ width: `${batterySoc}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* 4. Filter Status (Simulated) */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <h3 className="text-slate-500 text-sm font-medium">Filter Health</h3>
                    <Fan size={18} className="text-blue-500" />
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Pressure Drop</span>
                        <span className="font-mono dark:text-slate-300">145 Pa</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span className="text-sm font-medium dark:text-white">Optimal</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
