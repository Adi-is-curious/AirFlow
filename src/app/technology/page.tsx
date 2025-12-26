"use client";


import { motion } from "framer-motion";
import { Wind, AlertTriangle, Sun, XCircle, CheckCircle } from "lucide-react";

export default function TechnologyPage() {
    return (
        <div className="min-h-screen bg-background pb-24">
            {/* Header */}
            <section className="py-20 bg-muted/20 border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-heading"
                    >
                        V2.0 <span className="text-primary">Core Technology</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        Grounded in Physics. Validated by Thermodynamics. Built for Reality.
                    </motion.p>
                </div>
            </section>

            {/* Why V1.0 Failed - The Physics */}
            <section className="py-24 bg-red-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-10">
                        <AlertTriangle className="h-10 w-10 text-red-600" />
                        <h2 className="text-3xl font-bold text-red-900">Why V1.0 Failed - The Physics</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-red-800">Fundamental Constraint</h3>
                            <div className="bg-white p-6 rounded-xl border border-red-200 shadow-sm">
                                <code className="block text-lg font-mono mb-4 text-red-900">Power = (Flow × Pressure Drop) ÷ Efficiency</code>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-red-500 pl-4 py-1">
                                        <h4 className="font-bold text-red-900">V1.0 Attempted (Impossible)</h4>
                                        <ul className="text-sm space-y-1 text-red-800/80 mt-2">
                                            <li>• Flow: 1,500 m³/h (0.42 m³/s)</li>
                                            <li>• HEPA Pressure Drop: 300 Pa</li>
                                            <li>• Required Power: <strong className="text-red-600">229W</strong> (minimum)</li>
                                            <li>• Available Power: 40W</li>
                                            <li className="font-bold pt-1">Shortfall: 5.7x ✗ THERMODYNAMICALLY IMPOSSIBLE</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-red-800 mb-6">Why Vibration Cleaning Failed</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                                    <p className="text-red-900/80"><strong>Compaction:</strong> Low-frequency vibration (10-50 Hz) actually packs soot deeper into HEPA fibers rather than shaking it off.</p>
                                </li>
                                <li className="flex gap-4">
                                    <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                                    <p className="text-red-900/80"><strong>Sticky Soot:</strong> Diesel soot has an oily, hydrophobic coating. Simple vibration or water rinsing cannot dissolve it.</p>
                                </li>
                                <li className="flex gap-4">
                                    <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                                    <p className="text-red-900/80"><strong>Consumable Cost:</strong> HEPA filters would become consumable waste every 6-12 months, costing ₹5,000-8,000 per replacement.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* V2.0 Solution - ESP */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-heading">The V2.0 Solution: <span className="text-primary">Electrostatic Precipitation</span></h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            By switching to Low-Pressure ESP, we reduce energy demand by 6-10x while maintaining high efficiency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">40 Pa</div>
                            <div className="text-sm font-medium text-muted-foreground">Pressure Drop</div>
                            <div className="text-xs text-muted-foreground mt-1">(vs HEPA 300 Pa)</div>
                        </div>
                        <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">110 W</div>
                            <div className="text-sm font-medium text-muted-foreground">My Peak Power</div>
                            <div className="text-xs text-muted-foreground mt-1">(vs V1.0 229W req)</div>
                        </div>
                        <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">Zero</div>
                            <div className="text-sm font-medium text-muted-foreground">Filter Waste</div>
                            <div className="text-xs text-muted-foreground mt-1">(Washable Plates)</div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-8 text-center text-heading">5-Stage Clean Air Path</h3>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        {[
                            {
                                step: "1", title: "Intake Mesh (100 µm)",
                                desc: "Stainless steel, reusable. Blocks leaves, plastic, and large debris. Simple water rinse cleaning.",
                                drop: "20 Pa"
                            },
                            {
                                step: "2", title: "Mini-Cyclone Separator",
                                desc: "Reverse-flow cyclone (10-90 µm cut). Pre-separation of heavy dust extends ESP maintenance by 35%.",
                                drop: "65 Pa"
                            },
                            {
                                step: "3", title: "Dual-Stage ESP Cassette",
                                desc: "Plates charged to 5-8 kV. Captures 85-95% PM2.5 and 50-80% Ultrafine particles. Modular swap-and-go design.",
                                drop: "40 Pa"
                            },
                            {
                                step: "4", title: "MnO Catalyst + Carbon",
                                desc: "Destroys ozone byproduct (20 ppm -> 2-5 ppb) and adsorbs VOCs/Diesel odors.",
                                drop: "15 Pa"
                            },
                            {
                                step: "5", title: "EC Centrifugal Fan",
                                desc: "Brushless DC motor with PWM control. 55-60% efficiency. Soft-start, low noise, high reliability.",
                                drop: "System Total: 185 Pa"
                            }
                        ].map((stage, i) => (
                            <div key={i} className="flex items-start gap-6 p-6 rounded-xl border border-border bg-background shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                                    {stage.step}
                                </div>
                                <div className="flex-grow">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                        <h4 className="text-xl font-bold text-heading">{stage.title}</h4>
                                        <span className="text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground mt-1 sm:mt-0">Drop: {stage.drop}</span>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">{stage.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Realistic Energy Budget */}
            <section className="py-24 bg-muted/30 border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-heading">Energy Neutrality: <span className="text-primary">Solar Baseload</span> + <span className="text-secondary">Wind Turbo Boost</span></h2>
                        <p className="text-lg text-muted-foreground">
                            Moving away from lab-idealized claims to conservative, field-derated energy modeling.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Solar */}
                        <div className="bg-background p-8 rounded-2xl border border-border shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-yellow-100 rounded-lg text-yellow-600"><Sun size={32} /></div>
                                <h3 className="text-2xl font-bold text-heading">Solar Generation</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-border/50 pb-2">
                                    <span className="text-muted-foreground">Panel Rating (Bifacial)</span>
                                    <span className="font-bold">160 W</span>
                                </div>
                                <div className="flex justify-between border-b border-border/50 pb-2">
                                    <span className="text-muted-foreground">Peak Sun Hours (Jaipur Avg)</span>
                                    <span className="font-bold">4.5 hrs</span>
                                </div>
                                <div className="flex justify-between border-b border-border/50 pb-2">
                                    <span className="text-muted-foreground">System Derating (Heat/Losses)</span>
                                    <span className="font-bold text-red-500">-10%</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="font-bold text-lg text-heading">Daily Yield</span>
                                    <span className="text-2xl font-bold text-secondary">~665 Wh/day</span>
                                </div>
                                <p className="text-xs text-muted-foreground mt-4 italic">
                                    *Guaranteed baseload even on moderately cloudy days via MPPT optimization.
                                </p>
                            </div>
                        </div>

                        {/* Wind */}
                        <div className="bg-background p-8 rounded-2xl border border-border shadow-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-100 rounded-lg text-blue-600"><Wind size={32} /></div>
                                <h3 className="text-2xl font-bold text-heading">Wind Boost (Traffic Wake)</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-border/50 pb-2">
                                    <span className="text-muted-foreground">Rotor</span>
                                    <span className="font-bold">Traffic-Wake XLPE (0.4m²)</span>
                                </div>
                                <div className="flex justify-between border-b border-border/50 pb-2">
                                    <span className="text-muted-foreground">Avg Wind (with 1.3x Venturi)</span>
                                    <span className="font-bold">2.8 m/s</span>
                                </div>
                                <div className="flex justify-between border-b border-border/50 pb-2">
                                    <span className="text-muted-foreground">Power Coeff (Cp)</span>
                                    <span className="font-bold">0.30 (Realistic)</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="font-bold text-lg text-heading">Daily Yield</span>
                                    <span className="text-2xl font-bold text-primary">100-300 Wh/day</span>
                                </div>
                                <p className="text-xs text-muted-foreground mt-4 italic">
                                    *Variable output dependent on traffic density. Acts as a turbo-boost to the battery.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-8 bg-green-50 rounded-2xl border border-green-200 text-center">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
                            <div>
                                <div className="text-sm text-green-800 font-bold uppercase tracking-wider mb-1">Total Generation</div>
                                <div className="text-4xl font-bold text-green-700">900-1,300 Wh</div>
                            </div>
                            <div className="hidden md:block h-12 w-px bg-green-300"></div>
                            <div>
                                <div className="text-sm text-green-800 font-bold uppercase tracking-wider mb-1">Daily Consumption</div>
                                <div className="text-4xl font-bold text-green-700">~1,000 Wh</div>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center justify-center gap-2 text-green-800 font-medium">
                            <CheckCircle size={20} />
                            <span>System is Energy Neutral (Balanced)</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
