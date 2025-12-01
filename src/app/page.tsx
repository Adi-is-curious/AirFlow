import { Hero } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeatureGrid />

      {/* Problem/Solution Section */}
      <section className="py-24 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
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
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/assets/cross-section-vault.jpg"
                alt="AirFlow Station Cross Section"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
