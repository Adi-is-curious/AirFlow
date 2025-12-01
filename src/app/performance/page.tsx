"use client";

import { motion } from "framer-motion";
import { TrendingUp, Battery, Leaf, DollarSign, Wind } from "lucide-react";

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
                    <div className="overflow-x-auto mb-12">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 rounded-xl bg-accent/5 border border-white/10">
                            <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                                <DollarSign className="h-5 w-5 mr-2 text-green-400" />
                                Financial Breakdown
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                <strong>Low CAPEX:</strong> By using locally sourced materials like XLPE and standard steel fabrication, we keep manufacturing costs under ₹1 Lakh.
                            </p>
                            <p className="text-muted-foreground">
                                <strong>Zero Energy Bill:</strong> Unlike smog towers that consume massive amounts of grid electricity, AirFlow Station generates its own power, eliminating the biggest recurring cost.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-accent/5 border border-white/10">
                            <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                                <TrendingUp className="h-5 w-5 mr-2 text-blue-400" />
                                Scalability
                            </h3>
                            <p className="text-muted-foreground mb-4">
                                <strong>Modular Design:</strong> Units can be installed every 500 meters. Installing 10 units costs less than a single traditional smog tower.
                            </p>
                            <p className="text-muted-foreground">
                                <strong>No Land Cost:</strong> Designed to fit on existing highway dividers (median strips), requiring zero additional land acquisition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Energy Budget */}
            <section className="py-24 bg-accent/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-12 text-center">Daily Energy Budget</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
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

                    <div className="bg-background p-8 rounded-2xl border border-white/10">
                        <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                            <Battery className="h-6 w-6 mr-2 text-yellow-400" />
                            Power Management System
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">+190 Wh</div>
                                <div className="text-sm text-muted-foreground">Daily Surplus</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">1.5 kWh</div>
                                <div className="text-sm text-muted-foreground">LiFePO4 Battery Capacity</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">2 Days</div>
                                <div className="text-sm text-muted-foreground">Autonomy (No Wind/Sun)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Environmental Impact */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-12 text-center">Environmental Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                label: "Air Cleaned",
                                value: "15,000 m³",
                                sub: "Per Day Per Unit",
                                icon: Wind,
                                color: "text-blue-400"
                            },
                            {
                                label: "Carbon Offset",
                                value: "350 kg",
                                sub: "CO2 Saved Annually",
                                icon: Leaf,
                                color: "text-green-400"
                            },
                            {
                                label: "Equivalent To",
                                value: "15 Trees",
                                sub: "Planted Per Unit",
                                icon: TreeIcon, // Custom icon below
                                color: "text-emerald-400"
                            }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-2xl bg-accent/5 border border-white/10 text-center"
                            >
                                <stat.icon className={`h-10 w-10 mx-auto mb-4 ${stat.color}`} />
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-lg font-semibold text-muted-foreground mb-1">{stat.label}</div>
                                <div className="text-sm text-muted-foreground/60">{stat.sub}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

function TreeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 19v-9" />
            <path d="M7 14c-2.5 0-4.5-2-4.5-4.5S4.5 5 7 5c.5 0 1 .1 1.4.3A5.5 5.5 0 0 1 17 5c2.5 0 4.5 2 4.5 4.5S19.5 14 17 14" />
        </svg>
    )
}
