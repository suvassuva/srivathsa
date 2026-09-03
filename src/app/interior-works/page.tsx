import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CTASection } from "@/components/CTASection";
import { VIDEO_SHOWCASE_DATA } from "@/data/videos";
import { InlineVideoCard } from "@/components/InlineVideoCard";

export const metadata = {
  title: "Turnkey Commercial Interior Works Bangalore | Srivathsa Group",
  description:
    "Commercial office interiors, retail store fit-outs, acoustic ceilings, glass partitions, custom woodwork, and turnkey project execution in Bangalore.",
};

export default function InteriorWorksPage() {
  const interiorVideo = VIDEO_SHOWCASE_DATA.find((v) => v.id === "corporate-logo-slate-wall") || VIDEO_SHOWCASE_DATA[2];

  const interiorServicesList = [
    {
      title: "Commercial & Office Interiors",
      desc: "Complete layout execution for tech parks, corporate offices, executive boardrooms, and open workstation areas.",
      image: "/corporate-office-interior-design.jpeg",
      items: ["Space Planning & Layout", "Drywall Partitions", "Executive Cabins", "Acoustic Wall Panels"],
    },
    {
      title: "Retail & Showroom Fit-Outs",
      desc: "Bespoke store fixtures, display wall bays, product counters, linear LED feature lighting, and durable flooring.",
      image: "/pvc-signage-installation-retail.jpeg",
      items: ["Custom Display Shelving", "Product Showcases", "Accent Illumination", "High-Traffic Flooring"],
    },
    {
      title: "Turnkey Installation & Coordination",
      desc: "Single-point site supervision covering electrical wiring, false ceilings, carpeting, painting, and cleaning.",
      image: "/fabricators-working-signage-2.jpeg",
      items: ["False Ceilings & Lighting", "Electrical Wiring", "Carpentry & Joinery", "On-Time Handover"],
    },
  ];

  return (
    <div className="space-y-0 bg-slate-50">
      {/* Hero */}
      <Hero
        title="Interior Project Works"
        subtitle="Turnkey interior project execution with supply, installation and complete project coordination for commercial, office and retail spaces in Bangalore."
        tag="Interior Division"
        size="medium"
        bgImage="/corporate-office-interior-design.jpeg"
      />

      {/* Intro */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeading
                tag="Turnkey Execution"
                title="Commercial Interiors Engineered From Concept to Handover"
                subtitle="Eliminate vendor friction with Srivathsa Enterprises single-point interior project delivery."
              />

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                We manage the complete interior execution lifecycle. From initial site measurement and layout planning to dry-wall creation, false ceiling grid installation, electrical cable routing, custom woodwork fabrication, and final site cleanup.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Drywall & Glass Partitions",
                  "Acoustic Ceiling Panels",
                  "Modular Office Furniture",
                  "Electrical & Network Cabling",
                  "Showroom Display Racks",
                  "Turnkey On-Site Supervision",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <InlineVideoCard video={interiorVideo} aspect="video" />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Interior Services Grid */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            tag="Specialized Capabilities"
            title="Interior Services & Scope of Execution"
            subtitle="Tailored execution modules for corporate workspaces and high-end retail venues."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interiorServicesList.map((service, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 hover:border-brand-red overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-brand-red transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-normal">
                      {service.desc}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {service.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/get-a-quote?service=Interior%20Works&details=${encodeURIComponent(
                        `Enquiry for ${service.title}`
                      )}`}
                      className="w-full py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-brand-red text-slate-900 hover:text-white text-xs font-bold text-center transition-colors block border border-slate-200 hover:border-brand-red"
                    >
                      Enquire {service.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Process Timeline */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            tag="Execution Roadmap"
            title="Interior Execution Workflow"
            subtitle="Consultation → Planning → Execution → Installation → Handover."
            centered={true}
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Planning a Commercial Interior Fit-Out?"
        subtitle="Schedule an on-site consultation with Srivathsa Enterprises for space measurement and cost planning."
      />
    </div>
  );
}
