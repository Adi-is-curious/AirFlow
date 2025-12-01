"use client";

import { motion } from "framer-motion";
import { Wind, Zap, ShieldCheck, Leaf } from "lucide-react";

const features = [
    {
        icon: Wind,
        title: "Venturi-Helix Rotor",
        description: "Accelerates traffic wake by 50% using a patented ⊃⊂ stator design, capturing energy from both lanes.",
    },
    {
        icon: Zap,
        title: "Self-Powered",
        description: "100% off-grid operation using hybrid wind and bifacial solar energy, with battery backup.",
    },
    {
        icon: ShieldCheck,
        title: "Advanced Filtration",
        description: "3-stage purification (Mesh, Cyclone, HEPA) with auto-cleaning tech removes 99.9% of PM2.5.",
    },
    {
        icon: Leaf,
        title: "Eco-Resilient",
        description: "Built for India: Heat-proof XLPE rotor, flood-proof snorkel, and underground battery vault.",
    },
];

export function FeatureGrid() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Engineering the <span className="text-primary">Impossible</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We didn&apos;t just build an air purifier. We reimagined highway infrastructure
                        to turn the problem (traffic) into the solution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
                        >
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
