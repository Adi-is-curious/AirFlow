"use client";

import { Hero } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";
import Image from "next/image";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Globe, Lightbulb, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Problem/Solution Section */}
      <section className="py-24 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Problem: <span className="text-red-500">Choked Highways</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Indian highways are pollution hotspots (PM2.5 &gt; 150 µg/m³).
                Existing smog towers are too expensive (₹20L+), grid-dependent,
                and impractical for median installation.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Solution: <span className="text-green-500">AirFlow Station</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A compact, ₹94k unit that fits on the divider. It uses the &quot;Wind Squeezer&quot;
                tech to harvest traffic wake, powering a HEPA filtration system that
                cleans the air you breathe while you drive.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <Image
                src="/assets/cross-section-vault.jpg"
                alt="AirFlow Station Cross Section"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <FeatureGrid />

      {/* Why Now Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Now?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The urgency for sustainable infrastructure has never been greater.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Health Crisis",
                desc: "Air pollution cuts life expectancy by 5-10 years in major Indian cities.",
                color: "text-red-500"
              },
              {
                icon: TrendingUp,
                title: "Traffic Growth",
                desc: "Highway traffic is growing at 10% annually, increasing emission density.",
                color: "text-yellow-500"
              },
              {
                icon: Globe,
                title: "Net Zero Goals",
                desc: "India targets Net Zero by 2070. Infrastructure must become self-sufficient.",
                color: "text-blue-500"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-accent/5 border border-white/10 text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-white/5 mb-6">
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patentable Concept Spotlight */}
      <section className="py-24 bg-accent/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-primary/20"
            >
              <Image
                src="/assets/detailed-diagram.jpg"
                alt="Patentable Concept Blueprint"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Lightbulb className="h-6 w-6 text-yellow-400" />
                    <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm">Patent Pending</span>
                  </div>
                  <h3 className="text-2xl font-bold">Self-Sufficient Energy Loop</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                The <span className="text-primary">Self-Sufficient</span> Concept
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Unlike traditional smog towers that drain the grid, AirFlow Station is an energy-positive device.
                Our patent-pending design combines:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Traffic Wake Harvesting</h4>
                    <p className="text-muted-foreground">Captures the unused wind energy from passing trucks and cars.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Bifacial Solar Integration</h4>
                    <p className="text-muted-foreground">Harvests sunlight from both direct and reflected road surface light.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Zero External Power</h4>
                    <p className="text-muted-foreground">Runs 24/7 completely off-grid with integrated battery storage.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why AirFlow Station?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We outperform the competition on every critical metric.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Cost", value: "10x Lower", sub: "Than Smog Towers" },
              { label: "Energy", value: "100%", sub: "Self-Generated" },
              { label: "Space", value: "Zero", sub: "Land Acquisition" },
              { label: "Maintenance", value: "Smart", sub: "IoT Enabled" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/cross-section-airflow.jpg"
            alt="Vision Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users className="h-16 w-16 text-primary mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Our Vision
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
              To transform 10,000 km of Indian highways into <span className="text-primary">Green Energy Corridors</span> by 2030.
              We envision a future where infrastructure doesn&apos;t just serve traffic, but actively heals the environment.
            </p>
            <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
              Join the Revolution
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
