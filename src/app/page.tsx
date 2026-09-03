import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, Building2, MapPin } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { MaterialCard } from "@/components/MaterialCard";
import { SignageSlider } from "@/components/SignageSlider";
import { COMPANY_INFO } from "@/data/company";
import { SIGNAGE_MATERIALS } from "@/data/materials";
import { PROJECTS_DATA } from "@/data/projects";
import { GALLERY_DATA } from "@/data/gallery";

import { AutoSlider } from "@/components/AutoSlider";

export default function HomePage() {
  const showcaseMaterials = SIGNAGE_MATERIALS.slice(0, 6);
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const homepageSignageReel = GALLERY_DATA.filter(
    (i) => i.category === "signage" || i.category === "installation"
  ).slice(0, 24);

  return (
    <div className="space-y-0 bg-slate-50">
      {/* 1. Hero Section */}
      <Hero
        title="Signage. Interiors. Real Estate."
        subtitle="Complete business solutions for signage manufacturing, interior project execution and real-estate requirements in Bangalore."
        showButtons={true}
        size="large"
      />

      {/* 2. Business Categories Section */}
      <section className="py-12 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
          <SectionHeading
            tag="Core Divisions"
            title="Three Strategic Business Verticals"
            subtitle="Srivathsa Enterprises operates as a single-window partner for high-grade commercial signage, turnkey interior execution, and Bangalore property advisory."
            centered={true}
          />

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            <ServiceCard
              id="signage"
              title="Signage Solutions"
              subtitle="Manufacturing & Printing"
              description="Custom signage manufactured using premium materials including stainless steel, aluminium, acrylic, PVC and brass."
              href="/signage"
              image="/stainless-steel-letters-on-wall.jpeg"
              iconName="signage"
            />

            <ServiceCard
              id="interior"
              title="Interior Works"
              subtitle="Turnkey Execution"
              description="Turnkey interior project execution with supply, installation and complete project coordination."
              href="/interior-works"
              image="/corporate-office-interior-design.jpeg"
              iconName="interior"
            />

            <ServiceCard
              id="real-estate"
              title="Real Estate"
              subtitle="Property Advisory"
              description="Property solutions covering commercial properties, residential plots, converted land, bungalows and farm lands."
              href="/real-estate"
              image="/commercial-building-exterior.jpeg"
              iconName="real-estate"
            />
          </div>

          {/* Mobile Auto-running Slider */}
          <div className="block md:hidden max-w-sm mx-auto">
            <AutoSlider autoPlayInterval={3500}>
              <ServiceCard
                id="signage"
                title="Signage Solutions"
                subtitle="Manufacturing & Printing"
                description="Custom signage manufactured using premium materials including stainless steel, aluminium, acrylic, PVC and brass."
                href="/signage"
                image="/signage-real-05.jpeg"
                iconName="signage"
              />

              <ServiceCard
                id="interior"
                title="Interior Works"
                subtitle="Turnkey Execution"
                description="Turnkey interior project execution with supply, installation and complete project coordination."
                href="/interior-works"
                image="/corporate-office-interior-design.jpeg"
                iconName="interior"
              />

              <ServiceCard
                id="real-estate"
                title="Real Estate"
                subtitle="Property Advisory"
                description="Property solutions covering commercial properties, residential plots, converted land, bungalows and farm lands."
                href="/real-estate"
                image="/commercial-building-exterior.jpeg"
                iconName="real-estate"
              />
            </AutoSlider>
          </div>
        </div>
      </section>

      {/* 3. About Preview Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual block */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-lg">
              <div className="relative h-[420px] rounded-xl overflow-hidden">
                <img
                  src="/corporate-building-exterior.jpeg"
                  alt="Srivathsa Enterprises Signage and Interior Execution"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 p-2 sm:p-2.5 rounded-lg bg-white/95 border border-slate-200 backdrop-blur-md shadow-md max-w-[calc(100%-1.5rem)]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-brand-red flex items-center justify-center text-white font-black text-xs shrink-0 shadow-sm">
                      SE
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-xs leading-tight truncate">
                        {COMPANY_INFO.ceo.name}
                      </h4>
                      <p className="text-[10px] text-slate-600 font-medium leading-tight truncate">
                        {COMPANY_INFO.ceo.title} • {COMPANY_INFO.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text block */}
            <div className="space-y-6">
              <SectionHeading
                tag="Company Overview"
                title="Built Around Quality. Executed With Precision."
                subtitle="Srivathsa Enterprises provides high-end signage manufacturing, turnkey interior project execution, and real estate services in Bangalore."
              />

              <div className="space-y-2.5 sm:space-y-4 text-slate-600 text-xs sm:text-base leading-relaxed">
                <p>
                  Headquartered in Bangalore (560075), Srivathsa Enterprises delivers precision-crafted architectural signages, seamlessly managed corporate interior spaces, and strategic property solutions.
                </p>
                <p>
                  Under the leadership of Founder & CEO <strong className="text-slate-900">{COMPANY_INFO.ceo.name}</strong>, our team focuses on quality craftsmanship, structural durability, transparent planning, and rigorous on-site project coordination.
                </p>
              </div>

              {/* Desktop Grid */}
              <div className="hidden sm:grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm overflow-hidden">
                  <span className="text-xs text-brand-red font-black uppercase tracking-wider block">
                    Signage & Printing
                  </span>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed break-words">
                    SS 304, Acrylic, LED Halo, Safety & Photoluminescent Glow
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm overflow-hidden">
                  <span className="text-xs text-brand-red font-black uppercase tracking-wider block">
                    Turnkey Interiors
                  </span>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed break-words">
                    Office Fit-outs, Retail Showrooms & Execution
                  </p>
                </div>
              </div>

              {/* Mobile AutoSlider */}
              <div className="block sm:hidden pt-2 max-w-xs mx-auto">
                <AutoSlider autoPlayInterval={3500}>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1 shadow-2xs overflow-hidden">
                    <span className="text-[11px] text-brand-red font-black uppercase tracking-wider block">
                      Signage & Printing
                    </span>
                    <p className="text-[11px] text-slate-600 font-medium leading-relaxed break-words">
                      SS 304, Acrylic, LED Halo, Safety & Photoluminescent Glow
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1 shadow-2xs overflow-hidden">
                    <span className="text-[11px] text-brand-red font-black uppercase tracking-wider block">
                      Turnkey Interiors
                    </span>
                    <p className="text-[11px] text-slate-600 font-medium leading-relaxed break-words">
                      Office Fit-outs, Retail Showrooms & Execution
                    </p>
                  </div>
                </AutoSlider>
              </div>

              <div className="pt-3 sm:pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-6 sm:py-3 rounded-md sm:rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider transition-all shadow-xs group whitespace-nowrap"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Signage Showcase Grid Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              tag="Signage Solutions"
              title="Signage That Makes Your Business Stand Out"
              subtitle="Precision engineered 3D metal letters, illuminated acrylics, photoluminescent safety boards, and architectural graphic wraps."
            />
            <Link
              href="/signage"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-red hover:text-brand-dark-red transition-colors shrink-0"
            >
              <span>View All Signage Materials</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseMaterials.map((mat) => (
              <MaterialCard key={mat.id} material={mat} />
            ))}
          </div>

          {/* Mobile AutoSlider */}
          <div className="block md:hidden max-w-sm mx-auto">
            <AutoSlider autoPlayInterval={3800}>
              {showcaseMaterials.map((mat) => (
                <MaterialCard key={mat.id} material={mat} />
              ))}
            </AutoSlider>
          </div>

          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 sm:space-y-4">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider text-brand-red">
              Full Range of Signage Products Manufactured:
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs">
              {[
                "Stainless Steel 3D",
                "Aluminium ACP",
                "Acrylic LED",
                "PVC Forex",
                "Brushed Brass",
                "Wall Graphics",
                "Flex Banners",
                "Canvas Prints",
                "Safety Signage",
                "Mandatory Signs",
                "Traffic Reflective",
                "Night Glow Photoluminescent",
              ].map((item) => (
                <span
                  key={item}
                  className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg bg-white text-slate-700 border border-slate-200 font-semibold shadow-2xs text-[10px] sm:text-xs inline-flex items-center gap-1"
                >
                  <span className="text-brand-red font-bold">✓</span> {item}
                </span>
              ))}
            </div>
          </div>

          {/* Auto-Playing Signage Projects Reel */}
          <div className="pt-6 border-t border-slate-100">
            <SignageSlider
              items={homepageSignageReel}
              autoPlayInterval={3600}
              title="Recent Signage Fabrications & Installation Reel"
              subtitle="Watch an auto-playing showcase of real client 3D channel letters, LED pylons & architectural signages."
              tag="Featured Signage Slideshow"
            />
          </div>
        </div>
      </section>

      {/* 5. Interior Showcase Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            tag="Turnkey Execution"
            title="Complete Interior Projects From Concept to Completion"
            subtitle="Full-service space planning, drywall partitions, acoustic false ceilings, custom carpentry, and electrical lighting installation."
            centered={true}
          />

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Commercial & Office Interiors",
                desc: "Tech parks, IT workspace layouts, executive conference suites, acoustic walls, and ergonomic workstation setups.",
                image: "/corporate-office-interior-design.jpeg",
              },
              {
                title: "Retail & Showroom Fit-Outs",
                desc: "Custom merchandise display racks, boutique store counters, linear LED feature lighting, and glass showcases.",
                image: "/pvc-signage-installation-retail.jpeg",
              },
              {
                title: "Turnkey Installation & Coordination",
                desc: "End-to-end site supervisor oversight, material delivery, carpentry craftsmanship, and clean project handover.",
                image: "/fabricators-working-signage-2.jpeg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group rounded-xl sm:rounded-2xl bg-white border border-slate-200 hover:border-brand-red overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-lg"
              >
                <div className="relative h-36 sm:h-52 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                <div className="p-4 sm:p-6 space-y-2.5 sm:space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-brand-red transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-[11px] sm:text-xs leading-normal sm:leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-2.5 sm:pt-3 border-t border-slate-100">
                    <Link
                      href="/interior-works"
                      className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-red hover:text-brand-dark-red transition-colors flex items-center gap-1.5"
                    >
                      <span>Explore Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile AutoSlider */}
          <div className="block md:hidden max-w-sm mx-auto">
            <AutoSlider autoPlayInterval={3600}>
              {[
                {
                  title: "Commercial & Office Interiors",
                  desc: "Tech parks, IT workspace layouts, executive conference suites, acoustic walls, and ergonomic workstation setups.",
                  image: "/corporate-office-interior-design.jpeg",
                },
                {
                  title: "Retail & Showroom Fit-Outs",
                  desc: "Custom merchandise display racks, boutique store counters, linear LED feature lighting, and glass showcases.",
                  image: "/pvc-signage-installation-retail.jpeg",
                },
                {
                  title: "Turnkey Installation & Coordination",
                  desc: "End-to-end site supervisor oversight, material delivery, carpentry craftsmanship, and clean project handover.",
                  image: "/fabricators-working-signage-2.jpeg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl bg-white border border-slate-200 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-2xs"
                >
                  <div className="relative h-36 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  </div>
                  <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <h3 className="text-base font-black text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-[11px] leading-normal">
                        {item.desc}
                      </p>
                    </div>
                    <div className="pt-2.5 border-t border-slate-100">
                      <Link
                        href="/interior-works"
                        className="text-[11px] font-bold uppercase tracking-wider text-brand-red flex items-center gap-1.5"
                      >
                        <span>Explore Services</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </AutoSlider>
          </div>

          <div className="text-center pt-3 sm:pt-4">
            <Link
              href="/interior-works"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-6 sm:py-3 rounded-md sm:rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider shadow-xs transition-all whitespace-nowrap"
            >
              <span>Explore Interior Works</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Real Estate Preview Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              tag="Property Advisory"
              title="Property Opportunities Across Bangalore"
              subtitle="Verified commercial real estate listings, converted residential land plots, custom bungalows, and countryside farm lands."
            />
            <Link
              href="/real-estate"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-red hover:text-brand-dark-red transition-colors shrink-0"
            >
              <span>View Real Estate Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-4">
            {[
              {
                title: "Commercial Properties",
                tag: "Office & Retail",
                desc: "Tech park offices, retail store locations, and commercial buildings.",
                icon: Building2,
              },
              {
                title: "Residential Plots",
                tag: "Gated Layouts",
                desc: "BDA / BMRDA / Local authority approved residential plots.",
                icon: MapPin,
              },
              {
                title: "Converted Land",
                tag: "Development Land",
                desc: "Clear title converted land parcels in growth corridors.",
                icon: Compass,
              },
              {
                title: "Bungalows & Villas",
                tag: "Luxury Living",
                desc: "Independent villas and custom architectural bungalows.",
                icon: ShieldCheck,
              },
              {
                title: "Farm Lands",
                tag: "Retreat Plots",
                desc: "Agricultural plots and quiet farmhouse retreat holdings.",
                icon: CheckCircle2,
              },
            ].map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 p-3.5 sm:p-5 space-y-2.5 sm:space-y-3 hover:border-brand-red transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-2xs"
                >
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white text-brand-red w-fit border border-slate-200 shadow-2xs">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                      {cat.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-red transition-colors leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-slate-600 text-[11px] sm:text-xs leading-normal sm:leading-relaxed font-normal">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="pt-2.5 sm:pt-3 border-t border-slate-200">
                    <Link
                      href="/real-estate"
                      className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-red flex items-center gap-1"
                    >
                      <span>Enquire Property</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile AutoSlider */}
          <div className="block lg:hidden max-w-xs mx-auto">
            <AutoSlider autoPlayInterval={5000}>
              {[
                {
                  title: "Commercial Properties",
                  tag: "Office & Retail",
                  desc: "Tech park offices, retail store locations, and commercial buildings.",
                  icon: Building2,
                },
                {
                  title: "Residential Plots",
                  tag: "Gated Layouts",
                  desc: "BDA / BMRDA / Local authority approved residential plots.",
                  icon: MapPin,
                },
                {
                  title: "Converted Land",
                  tag: "Development Land",
                  desc: "Clear title converted land parcels in growth corridors.",
                  icon: Compass,
                },
                {
                  title: "Bungalows & Villas",
                  tag: "Luxury Living",
                  desc: "Independent villas and custom architectural bungalows.",
                  icon: ShieldCheck,
                },
                {
                  title: "Farm Lands",
                  tag: "Retreat Plots",
                  desc: "Agricultural plots and quiet farmhouse retreat holdings.",
                  icon: CheckCircle2,
                },
              ].map((cat, idx) => {
                const IconComp = cat.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-slate-50 border border-slate-200 p-3.5 space-y-2.5 flex flex-col justify-between shadow-2xs"
                  >
                    <div className="space-y-1.5">
                      <div className="p-2 rounded-lg bg-white text-brand-red w-fit border border-slate-200 shadow-2xs">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider block">
                        {cat.tag}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">
                        {cat.title}
                      </h3>
                      <p className="text-slate-600 text-[11px] leading-normal font-normal">
                        {cat.desc}
                      </p>
                    </div>
                    <div className="pt-2.5 border-t border-slate-200">
                      <Link
                        href="/real-estate"
                        className="text-[10px] font-bold uppercase tracking-wider text-brand-red flex items-center gap-1"
                      >
                        <span>Enquire Property</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </AutoSlider>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            tag="Why Work With Us"
            title="Professional Excellence & Reliable Partnering"
            subtitle="Four core pillars that make Srivathsa Enterprises the trusted choice for corporate clients in Bangalore."
            centered={true}
          />

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.whyChooseUs.map((item) => (
              <div
                key={item.number}
                className="rounded-xl sm:rounded-2xl bg-white border border-slate-200 p-4 sm:p-6 space-y-2.5 sm:space-y-4 hover:border-brand-red transition-all duration-300 group hover:-translate-y-1 shadow-2xs hover:shadow-md"
              >
                <span className="text-2xl sm:text-3xl font-black text-brand-red font-mono block">
                  {item.number}
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-brand-red transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-[11px] sm:text-xs leading-normal sm:leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile AutoSlider */}
          <div className="block md:hidden max-w-xs mx-auto">
            <AutoSlider autoPlayInterval={5000}>
              {COMPANY_INFO.whyChooseUs.map((item) => (
                <div
                  key={item.number}
                  className="rounded-xl bg-white border border-slate-200 p-4 space-y-2 shadow-2xs"
                >
                  <span className="text-2xl font-black text-brand-red font-mono block">
                    {item.number}
                  </span>
                  <h3 className="text-base font-black text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[11px] leading-normal font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </AutoSlider>
          </div>
        </div>
      </section>

      {/* 8. Six-Step Process Timeline Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            tag="Execution Methodology"
            title="Six-Step Project Delivery Process"
            subtitle="From initial site requirement capture to final quality inspection and handover."
            centered={true}
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* 9. Projects Preview Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              tag="Portfolio Preview"
              title="Recent Client Executions"
              subtitle="A selection of corporate signage, interior fit-out, and real estate advisory projects executed across Bangalore."
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-red hover:text-brand-dark-red transition-colors shrink-0"
            >
              <span>Explore Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Mobile AutoSlider */}
          <div className="block md:hidden max-w-sm mx-auto">
            <AutoSlider autoPlayInterval={4000}>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AutoSlider>
          </div>
        </div>
      </section>

      {/* 10. CTA Section */}
      <CTASection
        title="Have a Project in Mind?"
        subtitle="Talk to Srivathsa Enterprises about your signage manufacturing, interior workspace, or real estate requirements in Bangalore."
      />
    </div>
  );
}
