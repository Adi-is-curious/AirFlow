'use client';

import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useSimulationStore } from '@/lib/store';
import { motion } from 'framer-motion';

export default function LiveCharts() {
    const { windSpeed, powerOutput, pmLevel, batterySoc } = useSimulationStore();
    const [data, setData] = useState<any[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Update chart data history
    useEffect(() => {
        const now = new Date();
        const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

        setData(prev => {
            const newLine = {
                time: timeStr,
                wind: windSpeed,
                power: powerOutput,
                pm: pmLevel,
                battery: batterySoc
            };
            const newData = [...prev, newLine];
            // Keep last 20 points
            if (newData.length > 20) return newData.slice(newData.length - 20);
            return newData;
        });
    }, [windSpeed, powerOutput, pmLevel, batterySoc]);

    if (!mounted) return <div className="h-[200px] bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse"></div>;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

            {/* Power Generation (Wind vs Output) */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Real-time Generation</h3>
                    <div className="text-xs font-mono text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded">
                        {powerOutput} W
                    </div>
                </div>
                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorPower" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                            <XAxis dataKey="time" hide />
                            <YAxis yAxisId="left" hide domain={[0, 'auto']} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                                itemStyle={{ color: '#fff' }}
                                labelStyle={{ display: 'none' }}
                            />
                            <Area yAxisId="left" type="monotone" dataKey="power" stroke="#10b981" fillOpacity={1} fill="url(#colorPower)" strokeWidth={2} isAnimationActive={false} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Air Quality (PM2.5) */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">Air Quality (PM 2.5)</h3>
                    <div className={`text-xs font-mono px-2 py-1 rounded ${pmLevel > 60 ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                        {pmLevel.toFixed(1)} μg/m³
                    </div>
                </div>
                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorPm" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                            <XAxis dataKey="time" hide />
                            <YAxis hide domain={[0, 200]} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                                itemStyle={{ color: '#fff' }}
                                labelStyle={{ display: 'none' }}
                            />
                            <Area type="monotone" dataKey="pm" stroke="#ef4444" fillOpacity={1} fill="url(#colorPm)" strokeWidth={2} isAnimationActive={false} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
}
