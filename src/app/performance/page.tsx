"use client";

import { motion } from "framer-motion";

export default function PerformancePage() {
    return (
        <div className="min-h-screen bg-background pb-24">
            {/* Header */}
            <section className="py-20 bg-accent/20 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Unmatched <span className="text-secondary">Performance</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        Data-driven efficiency. 10x cheaper than competitors. 100% off-grid.
                    </motion.p>
                </div>
            </section>

            {/* Cost Comparison */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-12 text-center">Cost Analysis</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-muted-foreground">
                                    <th className="py-4 px-6">Metric</th>
                                    <th className="py-4 px-6 text-primary font-bold text-lg">AirFlow Station</th>
                                    <th className="py-4 px-6">PAMARES (Jaipur)</th>
                                    <th className="py-4 px-6">Smog Tower</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr>
                                    <td className="py-4 px-6 font-medium">CAPEX (Unit Cost)</td>
                                    <td className="py-4 px-6 text-green-400 font-bold">₹94,000</td>
                                    <td className="py-4 px-6">₹12 Lakhs</td>
                                    <td className="py-4 px-6">₹40 Lakhs+</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-medium">Annual OPEX</td>
                                    <td className="py-4 px-6 text-green-400 font-bold">₹7,700</td>
                                    <td className="py-4 px-6">₹6 Lakhs</td>
                                    <td className="py-4 px-6">₹8 Lakhs+</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-medium">Grid Dependency</td>
                                    <td className="py-4 px-6 text-green-400 font-bold">0% (Off-Grid)</td>
                                    <td className="py-4 px-6 text-red-400">100%</td>
                                    <td className="py-4 px-6 text-red-400">100%</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-medium">Payback Period</td>
                                    <td className="py-4 px-6 text-green-400 font-bold">8-10 Years</td>
                                    <td className="py-4 px-6">25+ Years</td>
                                    <td className="py-4 px-6">Not Viable</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Energy Budget */}
            <section className="py-24 bg-accent/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-12 text-center">Daily Energy Budget</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-green-400">Generation</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between">
                                    <span>Venturi-Helix VAWT</span>
                                    <span className="font-bold">250 Wh</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Bifacial Solar Panel</span>
                                    <span className="font-bold">700 Wh</span>
                                </li>
                                <li className="border-t border-white/10 pt-4 flex justify-between text-lg">
                                    <span>Total Generation</span>
                                    <span className="font-bold text-green-400">950 Wh</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-red-500/10 border border-red-500/20"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-red-400">Consumption</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between">
                                    <span>EC Blower (16h)</span>
                                    <span className="font-bold">640 Wh</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sensors & IoT</span>
                                    <span className="font-bold">120 Wh</span>
                                </li>
                                <li className="border-t border-white/10 pt-4 flex justify-between text-lg">
                                    <span>Total Consumption</span>
                                    <span className="font-bold text-red-400">760 Wh</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-2xl font-bold text-primary">
                            Net Surplus: +190 Wh / Day
                        </p>
                        <p className="text-muted-foreground mt-2">
                            Stored in 1.5 kWh LiFePO4 Battery (2 Days Autonomy)
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
