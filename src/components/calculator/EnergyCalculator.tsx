'use client';

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calculator, Info, Wind, Car, Zap, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EnergyCalculator() {
    // Inputs
    const [highwayLength, setHighwayLength] = useState(10); // km
    const [trafficVolume, setTrafficVolume] = useState(5000); // vehicles/day
    const [windSpeed, setWindSpeed] = useState(6.0); // m/s
    const [energyCost, setEnergyCost] = useState(7); // INR/kWh (approx)

    // Sensitivity Toggles
    const [operatingHours, setOperatingHours] = useState(24);
    const [maintenance, setMaintenance] = useState(5); // % downtime
    const [weatherSeason, setWeatherSeason] = useState<'avg' | 'low' | 'high'>('avg');

    // Outputs
    const [dailyEnergy, setDailyEnergy] = useState(0);
    const [yearlyCo2, setYearlyCo2] = useState(0);
    const [roiMonths, setRoiMonths] = useState(0);
    const [chartData, setChartData] = useState<any[]>([]);

    // Constants
    const STATION_SPACING = 1.0; // km per station
    const COST_PER_UNIT = 94000; // INR
    const STATIONS_PER_KM = 2; // Dual divider (maybe? assuming 1 per km per median side, let's say 1 per km total for conservative)
    // Re-read: "Deploy 5 units on NH-48" implies widely spaced.
    // Let's assume 1 station every 500m => 2 per km.

    useEffect(() => {
        calculateMetrics();
    }, [highwayLength, trafficVolume, windSpeed, operatingHours, maintenance, weatherSeason, energyCost]);

    const calculateMetrics = () => {
        const numStations = highwayLength * 2; // 1 every 500m
        const totalCost = numStations * COST_PER_UNIT;

        // Physics Calc
        const rho = 1.225;
        const A = 1.2;
        const Cp = 0.35;

        // Wind Generation
        let adjustedWind = windSpeed;
        if (weatherSeason === 'low') adjustedWind *= 0.8;
        if (weatherSeason === 'high') adjustedWind *= 1.2;

        const windPowerWatts = 0.5 * rho * A * Math.pow(adjustedWind, 3) * Cp;

        // Traffic Induced Wind (Bonus)
        // Assumption: Traffic adds ~1-2 m/s equivalent effective draft if close
        const trafficFactor = Math.min(trafficVolume / 10000, 1.0); // Boost factor

        // Solar (Avg 5 effective hours)
        const solarDailyWh = 160 * 5;

        const turbineDailyWh = windPowerWatts * operatingHours;

        // Total Generation per station
        let singleStationDailyWh = turbineDailyWh + solarDailyWh;

        // Maintenance Loss
        singleStationDailyWh *= (1 - maintenance / 100);

        const totalDailyKWh = (singleStationDailyWh * numStations) / 1000;

        // Financials
        const dailyRevenue = totalDailyKWh * energyCost;
        const monthlyRevenue = dailyRevenue * 30;

        // ROI
        const monthsToBreakEven = monthlyRevenue > 0 ? totalCost / monthlyRevenue : 0;

        // CO2 (0.82 kg/kWh avg for coal India)
        const annualCo2Tonnes = (totalDailyKWh * 365 * 0.82) / 1000;

        setDailyEnergy(Math.round(totalDailyKWh));
        setYearlyCo2(parseFloat(annualCo2Tonnes.toFixed(1)));
        setRoiMonths(Math.round(monthsToBreakEven));

        // Generate Chart Data (Cost vs Revenue over time)
        const data = [];
        let currentRevenue = 0;
        for (let m = 0; m <= 36; m++) { // 3 years
            currentRevenue += monthlyRevenue;
            data.push({
                month: m,
                cost: totalCost,
                revenue: currentRevenue,
                profit: currentRevenue - totalCost
            });
        }
        setChartData(data);
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-4 bg-slate-50 dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg text-white">
                    <Calculator size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold dark:text-white">ROI & Impact Calculator</h2>
                    <p className="text-slate-500 dark:text-slate-400">Estimate returns for your highway corridor</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Controls */}
                <div className="space-y-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm h-fit">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 dark:text-white">
                        <Zap className="text-yellow-500" size={20} /> Parameters
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Highway Length (km)</label>
                            <input
                                type="range" min="1" max="100" step="1"
                                value={highwayLength} onChange={(e) => setHighwayLength(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>1 km</span>
                                <span className="font-bold text-blue-600">{highwayLength} km</span>
                                <span>100 km</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Traffic Volume (Daily)</label>
                            <div className="flex items-center gap-3">
                                <Car size={18} className="text-slate-400" />
                                <input
                                    type="number"
                                    value={trafficVolume} onChange={(e) => setTrafficVolume(Number(e.target.value))}
                                    className="w-full p-2 border rounded-md dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Avg Wind Speed (m/s)</label>
                            <div className="flex items-center gap-3">
                                <Wind size={18} className="text-slate-400" />
                                <input
                                    type="range" min="2" max="15" step="0.5"
                                    value={windSpeed} onChange={(e) => setWindSpeed(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <span className="font-mono text-sm w-12">{windSpeed}</span>
                            </div>
                        </div>

                        <div className="pt-4 border-t dark:border-slate-700">
                            <h4 className="text-xs font-semibold uppercase text-slate-400 mb-3">Sensitivity Analysis</h4>

                            <div className="grid grid-cols-2 gap-3">
                                <select
                                    value={weatherSeason} onChange={(e) => setWeatherSeason(e.target.value as any)}
                                    className="p-2 text-sm border rounded bg-slate-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                >
                                    <option value="avg">Avg Season</option>
                                    <option value="low">Low Wind (-20%)</option>
                                    <option value="high">High Wind (+20%)</option>
                                </select>

                                <select
                                    value={operatingHours} onChange={(e) => setOperatingHours(Number(e.target.value))}
                                    className="p-2 text-sm border rounded bg-slate-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                >
                                    <option value="24">24 Hours</option>
                                    <option value="16">16 Hours</option>
                                    <option value="12">12 Hours</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <ResultCard
                            label="Daily Energy"
                            value={`${dailyEnergy} kWh`}
                            sub="Combined Wind+Solar"
                            color="bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
                        />
                        <ResultCard
                            label="Carbon Offset"
                            value={`${yearlyCo2} Tonnes`}
                            sub="Per Year"
                            color="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                        />
                        <ResultCard
                            label="ROI Period"
                            value={`${(roiMonths / 12).toFixed(1)} Years`}
                            sub={`${roiMonths} Months`}
                            color="bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400"
                        />
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold mb-6 flex items-center justify-between dark:text-white">
                            <span>Financial Projection</span>
                            <span className="text-sm font-normal text-slate-500">Cumulative Cash Flow (3 Years)</span>
                        </h3>

                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                                    <XAxis dataKey="month" label={{ value: 'Months', position: 'insideBottom', offset: -5 }} style={{ fontSize: '12px' }} />
                                    <YAxis tickFormatter={(val) => `₹${val / 100000}L`} style={{ fontSize: '12px' }} />
                                    <Tooltip
                                        formatter={(val: number) => `₹${val.toLocaleString()}`}
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    />
                                    <Line type="monotone" dataKey="cost" stroke="#ef4444" strokeWidth={2} dot={false} name="Total Cost" />
                                    <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={2} dot={false} name="Revenue" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="mt-4 flex gap-6 justify-center text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <span className="text-slate-600 dark:text-slate-400">Initial Investment</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-slate-600 dark:text-slate-400">Cumulative Revenue</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ResultCard({ label, value, sub, color }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl border border-transparent ${color}`}
        >
            <div className="text-sm font-medium opacity-80 mb-1">{label}</div>
            <div className="text-2xl font-bold mb-1">{value}</div>
            <div className="text-xs opacity-70">{sub}</div>
        </motion.div>
    );
}
