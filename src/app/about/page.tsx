import React from "react";
import Link from "next/link";
import { UserCheck, Layers, Compass, Building } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CTASection } from "@/components/CTASection";
import { COMPANY_INFO } from "@/data/company";

export const metadata = {
  title: "About Us | Srivathsa Enterprises Bangalore",
  description:
    "Learn about Srivathsa Enterprises led by Founder & CEO Venkatesh Babu Gadaputi. Premium signage manufacturing, turnkey interior works, and real estate in Bangalore.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0 bg-slate-50">
      {/* Hero */}
      <Hero
        title="About Srivathsa Enterprises"
        subtitle="Bangalore's trusted corporate partner for premium signage manufacturing, turnkey interior works, and real estate advisory."
        tag="Company Profile"
        size="medium"
        bgImage="/corporate-building-exterior.jpeg"
      />

      {/* Company Introduction */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeading
                tag="Corporate Overview"
                title="Professional Excellence & Multi-Disciplinary Delivery"
                subtitle="Driven by craftsmanship, material integrity, and structured execution in Bangalore."
              />

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Srivathsa Enterprises is a Bangalore-based corporate entity operating across three specialized divisions: <strong className="text-slate-900 font-bold">Signage Manufacturing</strong>, <strong className="text-slate-900 font-bold">Interior Project Works</strong>, and <strong className="text-slate-900 font-bold">Real Estate Advisory</strong>.
                </p>
                <p>
                  Under the leadership of Founder & CEO <strong className="text-slate-900 font-bold">{COMPANY_INFO.ceo.name}</strong>, we aim to provide commercial clients, retail chains, and property buyers with a seamless single-window execution experience.
                </p>
                <p>
                  Whether fabricating 3D stainless steel halo-lit channel letters for high-rise building facades, managing turnkey commercial office interior fit-outs, or guiding clients through clear-title property acquisitions, our focus remains on precision, quality materials, and transparent communication.
                </p>
              </div>

              {/* Leadership badge */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-sm">
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-widest block">
                    Leadership
                  </span>
                  <h4 className="text-lg font-extrabold text-slate-900">
                    {COMPANY_INFO.ceo.name}
                  </h4>
                  <span className="text-xs text-brand-red font-bold">
                    Founder & CEO
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-xs font-bold text-slate-700 border border-slate-200 shadow-sm">
                  <UserCheck className="w-4 h-4 text-brand-red" />
                  <span>Bangalore HQ</span>
                </div>
              </div>
            </div>

            {/* Visual cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm overflow-hidden">
                <div className="p-2.5 sm:p-3 rounded-xl bg-red-50 text-brand-red w-fit border border-red-100">
                  <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">Signage Manufacturing</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium break-words">
                  Precision CNC & laser cutting for SS 304, acrylic, brass, wall graphics, and photoluminescent night-glow safety signs.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm overflow-hidden">
                <div className="p-2.5 sm:p-3 rounded-xl bg-red-50 text-brand-red w-fit border border-red-100">
                  <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">Turnkey Interiors</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium break-words">
                  Complete commercial office space planning, acoustic ceilings, glass walls, electrical wiring, and custom woodwork.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 sm:col-span-2 shadow-sm overflow-hidden">
                <div className="p-2.5 sm:p-3 rounded-xl bg-red-50 text-brand-red w-fit border border-red-100">
                  <Building className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">Real Estate Advisory</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium break-words">
                  Strategic property consulting covering commercial office leases, converted land parcels, residential plots, bungalows, and retreat farm lands across Bangalore expansion corridors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            tag="Core Philosophy"
            title="Our Approach to Quality & Execution"
            subtitle="How Srivathsa Enterprises ensures client satisfaction and project durability."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Material Integrity",
                desc: "We exclusively source certified SS 304/316 grade stainless steel, optical cast acrylic, high-density PVC, and architectural grade paints to ensure lasting durability against weather and wear.",
              },
              {
                title: "Single-Window Execution",
                desc: "Clients benefit from a single point of accountability for design interpretation, site measurement, off-site manufacturing, structural mounting, and final quality sign-off.",
              },
              {
                title: "Client-Centric Transparency",
                desc: "Detailed commercial estimates, clear execution timelines, and straightforward property documentation assistance with zero hidden claims.",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 space-y-4 hover:border-brand-red transition-all shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red font-black text-lg flex items-center justify-center border border-red-100">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">{pillar.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            tag="Execution Workflow"
            title="How We Execute Your Project"
            subtitle="Our structured 6-step project delivery roadmap."
            centered={true}
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
