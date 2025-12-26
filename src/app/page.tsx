"use client";

import { Hero } from "@/components/hero";
import { V1V2Comparison } from "@/components/v1-v2-comparison";
import { ProblemSolutionFeatures } from "@/components/problem-solution-features";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Link from "next/link";
import { Activity, LayoutDashboard } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* NEW: Live Demo CTAs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5 shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="text-left">
                <h3 className="text-lg font-bold text-heading mb-1 flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Live Simulation Active
                </h3>
                <p className="text-sm text-foreground/80">
                  Calculated ROI: <span className="text-green-600 font-bold">18 Mo</span> •
                  Lives Protected: <span className="text-primary font-bold">2,400+</span>
                </p>
              </div>
              <div className="flex gap-3">
                <Link href="/calculator" className="px-5 py-2.5 bg-white border border-border rounded-lg text-sm font-semibold hover:border-primary transition-colors flex items-center gap-2 text-foreground">
                  <Activity size={16} className="text-primary" /> ROI Calculator
                </Link>
                <Link href="/dashboard" className="px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow flex items-center gap-2">
                  <LayoutDashboard size={16} /> Live Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <V1V2Comparison />

      <ProblemSolutionFeatures />

      {/* Vision Section - Simplified and Updated Style */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          {/* Optional subtle pattern or gradient instead of dark image */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users className="h-16 w-16 text-primary mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-heading">
              Our Vision
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
              To transform 10,000 km of Indian highways into <span className="text-primary font-semibold">Green Energy Corridors</span> by 2030.
              We envision a future where infrastructure doesn&apos;t just serve traffic, but actively heals the environment.
            </p>
            <button className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-bold text-lg hover:bg-secondary/90 transition-all shadow-lg">
              Join the Revolution
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
