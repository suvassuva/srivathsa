import React from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { VIDEO_SHOWCASE_DATA } from "@/data/videos";
import { InlineVideoCard } from "@/components/InlineVideoCard";

export const metadata = {
  title: "Real Estate & Commercial Land Advisory Bangalore | Srivathsa Group",
  description:
    "Commercial properties, office fit-out spaces, residential plots, converted land parcels, luxury bungalows, and retreat farm land advisory in Bangalore.",
};

export default function RealEstatePage() {
  const realEstateVideo = VIDEO_SHOWCASE_DATA.find((v) => v.id === "drone-ascending-glass-skyscraper") || VIDEO_SHOWCASE_DATA[3];

  const propertyCategories = [
    {
      title: "Commercial Properties",
      subtitle: "Office Buildings & Retail High-Street",
      desc: "Advisory and sourcing for corporate office spaces, retail store locations, tech park floors, and commercial buildings in prime Bangalore hubs.",
      image: "/commercial-building-exterior.jpeg",
      features: ["Office Space Buying & Leasing", "High-Street Retail Stores", "Industrial Logistics & Warehouses", "Asset Location Feasibility"],
    },
    {
      title: "Residential Plots",
      subtitle: "Gated Layouts & Strategic Plots",
      desc: "Verified residential layout plots situated in high-growth Bangalore expansion corridors with clear title records.",
      image: "/land-parcel-bangalore.jpeg",
      features: ["BDA / BMRDA Approved Layouts", "Clear Title Documentation", "Strategic Corridors", "Homebuilding Plots"],
    },
    {
      title: "Converted Land",
      subtitle: "Yellow Zone & Development Land",
      desc: "Clear-title DC converted land parcels suitable for residential villa layouts, commercial projects, and long-term land holdings.",
      image: "/aerial-view-land-parcel.jpeg",
      features: ["DC Converted Land Parcels", "Legal Title Verification", "Development Feasibility", "Boundary Verification"],
    },
    {
      title: "Bungalows & Villas",
      subtitle: "Independent Architectural Homes",
      desc: "Sourcing luxury independent villas, modern bungalows, and residential estates with quiet surroundings and clear ownership titles.",
      image: "/modern-residential-property-exterior.jpeg",
      features: ["Independent Custom Bungalows", "Gated Villa Communities", "Private Viewing Tours", "Transparent Legal Verification"],
    },
    {
      title: "Farm Lands & Retreat Plots",
      subtitle: "Agricultural & Managed Farmlands",
      desc: "Guidance on acquiring countryside farm land plots, quiet weekend retreat holdings, and agricultural lands off main Bangalore bypass corridors.",
      image: "/aerial-view-land-parcel.jpeg",
      features: ["Managed Farmland Holdings", "Water Availability Analysis", "Countryside Retreat Plots", "Clear Agricultural Titles"],
    },
  ];

  return (
    <div className="space-y-0 bg-slate-50">
      {/* Hero */}
      <Hero
        title="Real Estate Solutions"
        subtitle="Strategic advisory and property solutions covering commercial properties, residential plots, converted land, bungalows, and farm lands in Bangalore."
        tag="Real Estate Division"
        size="medium"
        bgImage="/commercial-building-illuminated.jpeg"
      />

      {/* Intro */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeading
                tag="Trusted Property Sourcing"
                title="Strategic Real Estate Guidance in Bangalore"
                subtitle="Helping businesses, homebuyers, and land investors navigate Bangalore's property market with title verification and transparent consultation."
              />

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Srivathsa Enterprises offers corporate and individual clients expert real estate advisory. We assist in identifying commercial office spaces, clear-title converted land parcels, residential plots, independent bungalows, and retreat farm land holdings.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-brand-red font-extrabold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Strict Professional Practice Notice</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  We maintain complete transparency. Property requirements are discussed directly with clients following verified legal title background checks.
                </p>
              </div>
            </div>

            <div>
              <InlineVideoCard video={realEstateVideo} aspect="video" />
            </div>
          </div>
        </div>
      </section>

      {/* Property Categories Showcase */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            tag="Property Categories"
            title="Real Estate Sourcing Categories"
            subtitle="Explore our key property verticals across Bangalore and surrounding expansion belts."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertyCategories.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 hover:border-brand-red overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-black tracking-widest text-brand-red block">
                      {cat.subtitle}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-brand-red transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-normal">
                      {cat.desc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {cat.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/get-a-quote?service=Real%20Estate&details=${encodeURIComponent(
                        `Property enquiry regarding ${cat.title}`
                      )}`}
                      className="w-full py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-brand-red text-slate-900 hover:text-white text-xs font-bold text-center transition-colors block border border-slate-200 hover:border-brand-red"
                    >
                      Enquire {cat.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Enquiry Form Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <SectionHeading
                tag="Property Consultation"
                title="Submit Your Property Requirement"
                subtitle="Specify your property criteria, budget preference, and preferred location in Bangalore."
              />

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-normal">
                <p>
                  Whether you are seeking a commercial office floor on Outer Ring Road, a converted land parcel for layout development, or a quiet retreat farmland on Kanakapura Road, submit your criteria below.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-brand-red">
                  Our Real Estate Process:
                </h4>
                <div className="space-y-3 text-xs text-slate-700 font-semibold">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded bg-brand-red/10 text-brand-red flex items-center justify-center font-bold shrink-0">1</div>
                    <span>Requirement analysis and budget alignment discussion.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded bg-brand-red/10 text-brand-red flex items-center justify-center font-bold shrink-0">2</div>
                    <span>Shortlisting verified property options matching client specifications.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded bg-brand-red/10 text-brand-red flex items-center justify-center font-bold shrink-0">3</div>
                    <span>Arranging private site visit tours and legal documentation check.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm defaultService="Real Estate" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
