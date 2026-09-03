import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { MaterialCard } from "@/components/MaterialCard";
import { CTASection } from "@/components/CTASection";
import { SignageSlider } from "@/components/SignageSlider";
import { SIGNAGE_MATERIALS } from "@/data/materials";
import { GALLERY_DATA } from "@/data/gallery";

export const metadata = {
  title: "Signage Manufacturing & Printing Bangalore | Srivathsa Group",
  description:
    "Top 3D stainless steel LED letters, acrylic signage board, brass, vinyl wall graphics, and photoluminescent night glow safety signages manufactured in Bangalore.",
};

export default function SignagePage() {
  const metalMaterials = SIGNAGE_MATERIALS.filter((m) => m.category === "metal" || m.category === "polymer");
  const printSafetyMaterials = SIGNAGE_MATERIALS.filter((m) => m.category === "print" || m.category === "safety");

  // Filter gallery items for signage and installation categories
  const signagePortfolioItems = GALLERY_DATA.filter(
    (item) => item.category === "signage" || item.category === "installation" || item.category === "materials"
  );

  return (
    <div className="space-y-0 bg-slate-50">
      {/* Hero */}
      <Hero
        title="Custom Signage Manufacturing"
        subtitle="3D Stainless Steel, LED Backlit Acrylic, Brushed Brass, Wall Graphics, Safety & Photoluminescent Night Glow Signage Solutions in Bangalore."
        tag="Signage Division"
        size="medium"
        bgImage="/signage-real-05.jpeg"
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

      {/* Auto-Playing Real Signage Portfolio Reel */}
      <section className="py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SignageSlider
            items={signagePortfolioItems}
            autoPlayInterval={3500}
            title="Real Client Signage Executions"
            subtitle="Auto-playing showcase of 3D SS channel letters, outdoor pylons, acrylic LED light boxes & photoluminescent safety boards."
            tag="Live Signage Showcase"
          />
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

      {/* Featured Corporate Client Signage Portfolio Grid */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            tag="Corporate Portfolio"
            title="Featured Tech Park & Commercial Signage Installations"
            subtitle="Explore our executed directory boards, outdoor pylons, and architectural reception logos for premier corporate clients."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Outdoor Pylons Signage - Day & Night Illumination View",
                subtitle: "YOUPLUS Monument Pylon",
                image: "/pdf-signage-24.jpeg",
                tag: "Pylon Signage",
                desc: "High-visibility double-sided outdoor pylon with day & night LED illumination.",
              },
              {
                title: "Commercial Building Directional Totem Pylon Installation",
                subtitle: "Commercial Property Wayfinding",
                image: "/pdf-signage-25.jpeg",
                tag: "Totem Pylon",
                desc: "Structural GI framework totem pylon for commercial complex driveways.",
              },
              {
                title: "IT Park Modular Directory Signboards",
                subtitle: "The Fairway Tech Park (ServiceNow, CommScope, Lam Research)",
                image: "/pdf-signage-26.jpeg",
                tag: "Directory Signage",
                desc: "Aluminium modular directory listing board installed for multi-tenant IT parks.",
              },
              {
                title: "Industrial & Commercial Facility Directory Boards",
                subtitle: "#267 Grey Stone Commercial Hub",
                image: "/pdf-signage-27.jpeg",
                tag: "Directory Signage",
                desc: "Outdoor black acrylic & metal tenant directory pillar signages.",
              },
              {
                title: "Brushed Metal & Polished Solid Brass Executive Badges",
                subtitle: "Studio Pepperfry & Unacademy Reception Signages",
                image: "/pdf-signage-28.jpeg",
                tag: "Reception Signage",
                desc: "3D acrylic & brass executive reception wall branding logos.",
              },
              {
                title: "Custom Retail Storefront Illuminated Lettering",
                subtitle: "Commercial Retail Storefronts",
                image: "/pdf-signage-23.jpeg",
                tag: "Retail Signage",
                desc: "Frontlit & halo-lit LED channel lettering for retail shopping centers.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-brand-red overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-xl"
              >
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-950">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-brand-red text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                      {card.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 space-y-0.5 text-white">
                    <h4 className="text-sm font-extrabold group-hover:text-red-400 transition-colors line-clamp-1">
                      {card.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 line-clamp-1">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      href={`/get-a-quote?service=Signage&details=${encodeURIComponent(
                        `Enquiry regarding ${card.title}`
                      )}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:text-brand-dark-red uppercase tracking-wider"
                    >
                      <span>Request Similar Signage</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
