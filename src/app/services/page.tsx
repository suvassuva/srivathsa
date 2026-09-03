import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Compass, Building2 } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "Our Services | Srivathsa Enterprises Bangalore",
  description:
    "Explore signage manufacturing, interior project execution, and real estate services provided by Srivathsa Enterprises in Bangalore.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-0 bg-slate-50">
      {/* Hero */}
      <Hero
        title="Comprehensive Corporate Services"
        subtitle="Signage Manufacturing, Turnkey Interior Project Works, and Commercial & Residential Real Estate Advisory in Bangalore."
        tag="Services Portfolio"
        size="medium"
        bgImage="/commercial-complex-entrance.jpeg"
      />

      {/* Intro section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-brand-red">
            Single-Window Expertise
          </span>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
            Integrated Business Solutions
          </h2>
          <p className="text-slate-600 text-base leading-relaxed font-normal">
            Srivathsa Enterprises combines architectural signage fabrication, workspace interior construction, and strategic property sourcing into one unified service capability across Bangalore.
          </p>
        </div>
      </section>

      {/* Block 1: Signage Solutions */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white h-[400px] shadow-lg">
              <img
                src="/signage-real-05.jpeg"
                alt="Signage Manufacturing Solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md text-brand-red shadow-sm">
                <Layers className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-6">
              <SectionHeading
                tag="Division 01"
                title="Signage Solutions & Manufacturing"
                subtitle="Custom architectural, corporate, and safety signage engineered using premium metals, acrylics, and photoluminescent materials."
              />

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                We manufacture high-impact indoor and outdoor signages tailored to elevate brand visibility. From 3D halo-lit stainless steel building logos to photoluminescent safety markers for basement parking, our products meet high architectural standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "3D Stainless Steel (SS 304/316)",
                  "Aluminium Composite Panels (ACP)",
                  "Cast Acrylic & LED Illuminated",
                  "PVC & Forex Foam Board Signs",
                  "Brushed & Polished Brass Logos",
                  "Wall Graphics & Architectural Murals",
                  "Flex & Canvas Large Format Printing",
                  "Safety, Traffic & Night Glow Signs",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/signage"
                  className="px-6 py-3.5 rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <span>Explore Signage Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/get-a-quote?service=Signage"
                  className="px-6 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-all shadow-sm"
                >
                  Request Signage Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Interior Works */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="space-y-6 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white h-[400px] shadow-lg">
                <img
                  src="/corporate-office-interior-design.jpeg"
                  alt="Turnkey Interior Works"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md text-brand-red shadow-sm">
                  <Compass className="w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:order-1">
              <SectionHeading
                tag="Division 02"
                title="Interior Project Works & Execution"
                subtitle="Complete commercial office fit-outs, retail showroom interiors, acoustic ceilings, glass partitions, and turnkey site installation."
              />

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Srivathsa Enterprises executes end-to-end commercial interior projects. We handle space planning, drywall partitions, acoustic false ceilings, electrical wiring, custom modular furniture, and final site cleaning before client handover.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Commercial Office Fit-Outs",
                  "Tech Park Space Planning",
                  "Retail & Showroom Displays",
                  "Glass & Acoustic Partitions",
                  "False Ceiling & Modular Grid",
                  "Electrical Wiring & Lighting",
                  "Custom Carpentry & Workstations",
                  "Turnkey Installation Coordination",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/interior-works"
                  className="px-6 py-3.5 rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <span>Explore Interior Works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/get-a-quote?service=Interior%20Works"
                  className="px-6 py-3.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-all shadow-sm"
                >
                  Request Interior Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Real Estate */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white h-[400px] shadow-lg">
              <img
                src="/commercial-building-exterior.jpeg"
                alt="Real Estate Solutions Bangalore"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md text-brand-red shadow-sm">
                <Building2 className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-6">
              <SectionHeading
                tag="Division 03"
                title="Real Estate Advisory & Property Services"
                subtitle="Strategic commercial property buying/selling, clear-title converted land parcels, residential plots, bungalows, and retreat farm lands."
              />

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                We assist corporate organizations, business owners, and private investors in identifying and acquiring prime real estate assets across Bangalore expansion corridors with thorough legal due diligence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Commercial Offices & High-Street Retail",
                  "Industrial Warehouses & Logistics Hubs",
                  "Residential Plots & Gated Layouts",
                  "Clear Title Converted Land Parcels",
                  "Luxury Independent Bungalows & Villas",
                  "Managed Agricultural & Farm Lands",
                  "Title Verification & Legal Due Diligence",
                  "Site Inspection & Feasibility Advisory",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/real-estate"
                  className="px-6 py-3.5 rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <span>Explore Real Estate Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/get-a-quote?service=Real%20Estate"
                  className="px-6 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-all shadow-sm"
                >
                  Property Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
