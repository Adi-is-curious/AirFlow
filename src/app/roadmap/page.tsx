"use client";

import { motion } from "framer-motion";

const phases = [
    {
        phase: "Phase 1: Prototype & Pilot",
        time: "Months 0-6",
        items: [
            "Finalize CAD & Patent Filing",
            "Build & Deploy 5-10 Pilot Units",
            "Validate 10-15% PM2.5 Reduction",
            "Secure Government Partnerships"
        ]
    },
    {
        phase: "Phase 2: Scaled Deployment",
        time: "Months 7-18",
        items: [
            "Optimize Design for Mass Mfg",
            "Deploy 20-30 Units on Major Corridors",
            "Establish O&M Network",
            "Integrate Smart City Dashboard"
        ]
    },
    {
        phase: "Phase 3: Network Expansion",
        time: "Months 19-36",
        items: [
            "Scale to 100+ Units",
            "Carbon Credit Monetization",
            "Data Licensing Model",
            "Pan-India Highway Coverage"
        ]
    }
];

export default function RoadmapPage() {
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
                        Future <span className="text-primary">Vision</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        From prototype to a nationwide green corridor network.
                    </motion.p>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                        {phases.map((phase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <span className="text-primary font-bold">{index + 1}</span>
                                </div>

                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-accent/5 border border-white/10 hover:border-primary/30 transition-all">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-bold text-xl">{phase.phase}</h3>
                                        <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded">
                                            {phase.time}
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {phase.items.map((item, i) => (
                                            <li key={i} className="flex items-start text-muted-foreground">
                                                <span className="mr-2 text-primary">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
