"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Wind, Zap, ShieldCheck, Truck, Settings } from "lucide-react";
import { useState } from "react";

export function ProblemSolutionFeatures() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            title: "Zero Wires. Zero Fuel.",
            desc: "Fully off-grid using bifacial solar (665 Wh/day) + traffic-wake wind (100-300 Wh/day). 1.5 kWh LiFePO battery with geothermal cooling.",
            icon: Zap
        },
        {
            title: "Built for Brutal Traffic Air",
            desc: "5-stage purification path: Mesh → Cyclone → Dual-Stage ESP → MnO Catalyst → EC Fan. Removes dust, soot, VOCs, and ozone.",
            icon: ShieldCheck
        },
        {
            title: "Thinks Before It Spins",
            desc: "AQI-responsive smart control activates only when needed. Battery SOC management ensures multi-day autonomy.",
            icon: Settings
        },
        {
            title: "Designed for Indian Roads",
            desc: "Heat-resilient XLPE rotor (45°C+), theft-resistant fasteners, and flood-tested construction.",
            icon: Truck
        },
        {
            title: "5-Minute Service",
            desc: "Modular ESP cassettes swap in <5 minutes. No complex on-site cleaning—dirty cassettes go to depot for regen.",
            icon: Settings
        }
    ];

    return (
        <section className="py-24 space-y-24">
            {/* Problem Card */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl bg-red-50 border border-red-100 p-8 md:p-12 shadow-sm"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="bg-red-100 p-4 rounded-full shrink-0">
                            <AlertTriangle className="h-10 w-10 text-red-500" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-red-900 mb-4">The Problem: Dangerously High PM₂.₅ on Indian Highways</h2>
                            <p className="text-xl text-red-800/80 mb-6 leading-relaxed">
                                Indian highways expose millions to dangerously high roadside PM₂.₅, yet there is no on-site system that both monitors and actively cleans the air without needing grid power.
                            </p>
                            <ul className="space-y-2 text-red-900/70 font-medium">
                                <li className="flex items-center gap-2">• PM₂.₅ peaks: 150-250 µg/m³ during winter months</li>
                                <li className="flex items-center gap-2">• Highway traffic contributes 40-60% of urban PM</li>
                                <li className="flex items-center gap-2">• Current solutions (Green belts) only offer 5-10% reduction</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Solution Card */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8 md:p-12 shadow-lg relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Wind className="h-64 w-64" />
                    </div>

                    <h2 className="text-3xl font-bold text-heading mb-2">AirFlow Station V2.0 - A Lamppost That Eats Pollution</h2>
                    <p className="text-xl text-primary font-medium mb-6">Turn every highway median into a self-powered lung</p>

                    <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                        A compact roadside tower that captures wind from passing vehicles and sunlight from above, then uses this energy to monitor and scrub the air in real-time.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { label: "Distributed", sub: "Modular deployment" },
                            { label: "Renewable", sub: "Wind + Solar powered" },
                            { label: "Highway-Ready", sub: "Rugged & Theft-proof" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50">
                                <div className="font-bold text-heading text-lg">{item.label}</div>
                                <div className="text-sm text-muted-foreground">{item.sub}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Features Accordion/Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Key Engineering Features</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveFeature(idx)}
                                className={`p-6 rounded-xl border cursor-pointer transition-all ${activeFeature === idx
                                    ? "bg-white border-primary shadow-md scale-[1.02]"
                                    : "bg-muted/30 border-transparent hover:bg-muted/50"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-lg ${activeFeature === idx ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                                        <feature.icon size={24} />
                                    </div>
                                    <h3 className={`font-bold text-lg ${activeFeature === idx ? 'text-primary' : 'text-foreground'}`}>
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-muted/30 rounded-2xl border border-border p-8 flex items-center justify-center min-h-[400px]">
                        <div className="text-center max-w-md">
                            <div className="bg-white p-4 rounded-full inline-flex mb-6 shadow-sm">
                                {(() => {
                                    const Icon = features[activeFeature].icon;
                                    return <Icon size={48} className="text-primary" />;
                                })()}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {features[activeFeature].desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
