"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Image from "next/image";

export function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/render-on-road.jpg"
                    alt="AirFlow Station on Highway"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        <span className="block text-foreground">Breathing Life into</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Indian Highways
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
                >
                    The world&apos;s first self-powered, bi-directional traffic wake harvester
                    that turns pollution into clean energy and fresh air.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/technology"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                    >
                        Explore Technology
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link
                        href="/performance"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-foreground font-semibold text-lg hover:bg-white/20 transition-all"
                    >
                        View Performance
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
