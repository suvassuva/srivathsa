import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { MaterialCard } from "@/components/MaterialCard";
import { CTASection } from "@/components/CTASection";
import { SIGNAGE_MATERIALS } from "@/data/materials";

export const metadata = {
  title: "Signage Manufacturing & Printing | Srivathsa Enterprises Bangalore",
  description:
    "Custom 3D stainless steel, acrylic, brass, wall graphics, safety, and photoluminescent night glow signage manufacturing in Bangalore.",
};

export default function SignagePage() {
  const metalMaterials = SIGNAGE_MATERIALS.filter((m) => m.category === "metal" || m.category === "polymer");
  const printSafetyMaterials = SIGNAGE_MATERIALS.filter((m) => m.category === "print" || m.category === "safety");

  return (
    <div className="space-y-0 bg-slate-50">
      {/* Hero */}
      <Hero
        title="Custom Signage Manufacturing"
        subtitle="3D Stainless Steel, LED Backlit Acrylic, Brushed Brass, Wall Graphics, Safety & Photoluminescent Night Glow Signage Solutions in Bangalore."
        tag="Signage Division"
        size="medium"
        bgImage="/stainless-steel-letters-on-wall.jpeg"
      />

      {/* Intro */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeading
                tag="Architectural Precision"
                title="Signage Built For Visibility & Durability"
                subtitle="Engineered with CNC routers and laser cutting tools for corporate offices, commercial buildings, and industrial complexes."
              />

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Srivathsa Enterprises manufactures a complete spectrum of commercial signages. Whether installing 3D stainless steel channel letters on high-rise facades or outfitting multi-level basements with photoluminescent night-glow emergency markers, we deliver high architectural standards.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  "3D SS 304/316",
                  "Acrylic LED",
                  "Aluminium ACP",
                  "Brushed Brass",
                  "Wall Graphics",
                  "Night Glow Exit",
                ].map((item) => (
                  <div key={item} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-lg">
              <div className="relative h-[380px] rounded-xl overflow-hidden">
                <img
                  src="/fabricators-working-signage-1.jpeg"
                  alt="Stainless Steel Signage Manufacturing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-sm">
                  <span className="text-xs font-black uppercase tracking-widest text-brand-red block">
                    Manufacturing Feature
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    Fiber Laser Cutting & CNC 3D Channel Letter Fabrication
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Showcase: Architectural Metals & Polymers */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            tag="Material Engineering"
            title="3D Metal & Illuminated Polymer Signages"
            subtitle="Explore our core structural substrates including Stainless Steel, Aluminium, Acrylic, PVC, and Brass."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metalMaterials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        </div>
      </section>

      {/* Material Showcase: Printing, Wall Graphics & Safety Signs */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            tag="Specialized Applications"
            title="Printing, Graphics & Safety Night Glow Signs"
            subtitle="Large-format printing, custom vinyl wall graphics, ISO compliant traffic markers, and self-illuminating exit signs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {printSafetyMaterials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        </div>
      </section>

      {/* Safety Signage Spotlight Box */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center shadow-lg">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200 text-brand-red text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Photoluminescent Glow Technology</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                Night Glow Safety & Emergency Signage
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Our photoluminescent safety boards absorb light from regular indoor illumination and emit a bright yellow-green glow during power failures. Ideal for emergency exit routes, fire hydrants, and basement stairwells.
              </p>
            </div>

            <div className="text-left lg:text-right">
              <Link
                href="/get-a-quote?service=Signage&details=Photoluminescent%20Night%20Glow%20Signage%20Enquiry"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-extrabold text-sm uppercase tracking-wider shadow-md transition-all"
              >
                <span>Order Safety Signs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Custom Signage Manufacturing?"
        subtitle="Get in touch with Srivathsa Enterprises for site measurement, material samples, and an official commercial estimate."
      />
    </div>
  );
}
