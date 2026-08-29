import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, Building2, Layers, MapPin } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { MaterialCard } from "@/components/MaterialCard";
import { COMPANY_INFO } from "@/data/company";
import { SIGNAGE_MATERIALS } from "@/data/materials";
import { PROJECTS_DATA } from "@/data/projects";

export default function HomePage() {
  const showcaseMaterials = SIGNAGE_MATERIALS.slice(0, 6);
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

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
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeading
            tag="Core Divisions"
            title="Three Strategic Business Verticals"
            subtitle="Srivathsa Enterprises operates as a single-window partner for high-grade commercial signage, turnkey interior execution, and Bangalore property advisory."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              id="signage"
              title="Signage Solutions"
              subtitle="Manufacturing & Printing"
              description="Custom signage manufactured using premium materials including stainless steel, aluminium, acrylic, PVC and brass."
              href="/signage"
              image="https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1000&q=80"
              iconName="signage"
            />

            <ServiceCard
              id="interior"
              title="Interior Works"
              subtitle="Turnkey Execution"
              description="Turnkey interior project execution with supply, installation and complete project coordination."
              href="/interior-works"
              image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
              iconName="interior"
            />

            <ServiceCard
              id="real-estate"
              title="Real Estate"
              subtitle="Property Advisory"
              description="Property solutions covering commercial properties, residential plots, converted land, bungalows and farm lands."
              href="/real-estate"
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
              iconName="real-estate"
            />
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
                  src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
                  alt="Srivathsa Enterprises Signage and Interior Execution"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-red flex items-center justify-center text-white font-black text-lg shadow-sm">
                      SE
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm">
                        Venkatesh Bablu Gadaputi
                      </h4>
                      <p className="text-xs text-slate-600 font-medium">Founder & CEO • Srivathsa Enterprises</p>
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

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Headquartered in Bangalore (560075), Srivathsa Enterprises delivers precision-crafted architectural signages, seamlessly managed corporate interior spaces, and strategic property solutions.
                </p>
                <p>
                  Under the leadership of Founder & CEO <strong className="text-slate-900">{COMPANY_INFO.ceo.name}</strong>, our team focuses on quality craftsmanship, structural durability, transparent planning, and rigorous on-site project coordination.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
                  <span className="text-xs text-brand-red font-black uppercase tracking-wider block">
                    Signage & Printing
                  </span>
                  <p className="text-xs text-slate-600 font-medium">
                    SS 304, Acrylic, LED Halo, Safety & Photoluminescent Glow
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
                  <span className="text-xs text-brand-red font-black uppercase tracking-wider block">
                    Turnkey Interiors
                  </span>
                  <p className="text-xs text-slate-600 font-medium">
                    Office Fit-outs, Retail Showrooms & Execution
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-md group"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseMaterials.map((mat) => (
              <MaterialCard key={mat.id} material={mat} />
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-brand-red">
              Full Range of Signage Products Manufactured:
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
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
                  className="px-3 py-1.5 rounded-lg bg-white text-slate-700 border border-slate-200 font-semibold shadow-sm"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Commercial & Office Interiors",
                desc: "Tech parks, IT workspace layouts, executive conference suites, acoustic walls, and ergonomic workstation setups.",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Retail & Showroom Fit-Outs",
                desc: "Custom merchandise display racks, boutique store counters, linear LED feature lighting, and glass showcases.",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Turnkey Installation & Coordination",
                desc: "End-to-end site supervisor oversight, material delivery, carpentry craftsmanship, and clean project handover.",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-brand-red overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-brand-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href="/interior-works"
                      className="text-xs font-bold uppercase tracking-wider text-brand-red hover:text-brand-dark-red transition-colors flex items-center gap-1.5"
                    >
                      <span>Explore Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/interior-works"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-extrabold text-sm uppercase tracking-wider shadow-md transition-all"
            >
              <span>Explore Interior Works</span>
              <ArrowRight className="w-4 h-4" />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                  className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-3 hover:border-brand-red transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-white text-brand-red w-fit border border-slate-200 shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                      {cat.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-normal">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200">
                    <Link
                      href="/real-estate"
                      className="text-[11px] font-bold uppercase tracking-wider text-brand-red flex items-center gap-1"
                    >
                      <span>Enquire Property</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.whyChooseUs.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 hover:border-brand-red transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <span className="text-3xl font-black text-brand-red font-mono block">
                  {item.number}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-brand-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
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
