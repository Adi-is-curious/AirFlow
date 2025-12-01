"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wind, Zap, ShieldCheck, Cpu, Activity, Layers } from "lucide-react";

export default function TechnologyPage() {
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
                        Core <span className="text-primary">Innovation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        A synergy of aerodynamics, renewable energy, and advanced filtration.
                    </motion.p>
                </div>
            </section>

            {/* Venturi Stator */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Wind className="h-8 w-8 text-primary" />
                                </div>
                                <h2 className="text-3xl font-bold">Venturi-Stator Aerodynamics</h2>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                                    <Activity className="h-5 w-5 mr-2 text-primary" />
                                    Technical Brief
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    The outer shell is shaped like two facing &quot;C&quot;s (⊃ ⊂). This patented geometry acts as a nozzle,
                                    squeezing the incoming traffic wind to accelerate airflow before it hits the rotor.
                                </p>
                            </div>

                            <div className="bg-accent/5 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                                    <Cpu className="h-5 w-5 mr-2 text-primary" />
                                    Engineering Detail
                                </h3>
                                <ul className="space-y-4 text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-primary">•</span>
                                        <span><strong>Bernoulli&apos;s Principle:</strong> By reducing the cross-sectional area, we drop pressure and increase velocity from 4 m/s (breeze) to 6 m/s (power wind).</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-primary">•</span>
                                        <span><strong>Omnidirectional Capture:</strong> The symmetric design captures turbulent wake from vehicles passing on <em>both</em> sides of the highway divider.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-primary">•</span>
                                        <span><strong>Power Gain:</strong> Since power is proportional to the cube of velocity (V³), a 50% speed boost results in <strong>3.4x more energy</strong> than open rotors.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <Image
                                src="/assets/detailed-diagram.jpg"
                                alt="Venturi Stator Diagram"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Helix Rotor */}
            <section className="py-24 bg-accent/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:order-2"
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="p-3 bg-secondary/10 rounded-lg">
                                    <Zap className="h-8 w-8 text-secondary" />
                                </div>
                                <h2 className="text-3xl font-bold">Fibonacci-Helix Rotor</h2>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                                    <Activity className="h-5 w-5 mr-2 text-secondary" />
                                    Technical Brief
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Inside is a twisted, spiral blade inspired by DNA strands and the Golden Ratio.
                                    This design ensures smooth spinning without &quot;dead spots&quot; and significantly reduces drag.
                                </p>
                            </div>

                            <div className="bg-accent/5 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                                    <Cpu className="h-5 w-5 mr-2 text-secondary" />
                                    Engineering Detail
                                </h3>
                                <ul className="space-y-4 text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-secondary">•</span>
                                        <span><strong>Material Science:</strong> Constructed from XLPE (Cross-linked Polyethylene) - the same durable plastic used in water tanks. It is UV-stabilized and won&apos;t crack even in 45°C highway heat.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-secondary">•</span>
                                        <span><strong>Aerodynamics:</strong> The helical twist allows the blade to &quot;slice&quot; through air rather than slapping it, reducing noise and vibration.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-secondary">•</span>
                                        <span><strong>Efficiency:</strong> Achieves a 15-20% reduction in drag coefficient (Cd) compared to standard Savonius blades.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl lg:order-1"
                        >
                            <Image
                                src="/assets/cross-section-airflow.jpg"
                                alt="Helix Rotor"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Filtration System */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">3-Stage Filtration</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Designed specifically for the sticky, oily, and heavy dust found on Indian highways.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "1. Mesh Pre-Filter",
                                brief: "The First Line of Defense",
                                detail: "A coarse, washable stainless steel mesh that physically blocks large debris like dry leaves, plastic wrappers, and large fly ash particles. It also traps sticky diesel soot.",
                                icon: Layers,
                                color: "text-blue-400"
                            },
                            {
                                title: "2. Cyclone Trap",
                                brief: "Inertial Separation",
                                detail: "Uses centrifugal force to spin the air. Heavier particles like silica sand and tire rubber dust are flung outward and fall into a collection hopper, preventing them from clogging the fine filter.",
                                icon: Wind,
                                color: "text-purple-400"
                            },
                            {
                                title: "3. HEPA Core",
                                brief: "Microscopic Purification",
                                detail: "A medical-grade H13 HEPA filter that captures 99.97% of PM2.5 particles (down to 0.3 microns). Features an auto-vibration mechanism to shake off dust and extend filter life.",
                                icon: ShieldCheck,
                                color: "text-green-400"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-2xl bg-accent/5 border border-white/10 hover:border-primary/30 transition-all flex flex-col"
                            >
                                <item.icon className={`h-12 w-12 ${item.color} mb-6`} />
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-primary font-medium mb-4">{item.brief}</p>
                                <p className="text-muted-foreground leading-relaxed text-sm">{item.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
