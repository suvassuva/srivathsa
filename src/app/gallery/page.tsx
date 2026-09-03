import React from "react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SignageSlider } from "@/components/SignageSlider";
import { CTASection } from "@/components/CTASection";
import { GALLERY_DATA } from "@/data/gallery";

export const metadata = {
  title: "Photo Gallery | Srivathsa Enterprises Bangalore",
  description:
    "Explore the visual gallery of 3D stainless steel signage, acrylic letters, office interior fit-outs, and property executions by Srivathsa Enterprises.",
};

export default function GalleryPage() {
  const featuredSlides = GALLERY_DATA.slice(0, 30);

  return (
    <div className="space-y-0 bg-slate-50">
      {/* Hero */}
      <Hero
        title="Visual Showcase Gallery"
        subtitle="Explore high-resolution photography of custom signage manufacturing, interior craftsmanship, material finishes, and on-site installations across Bangalore."
        tag="Gallery & Media"
        size="medium"
        bgImage="/corporate-architectural-photography.jpeg"
      />

      {/* Featured Auto-Playing Reel */}
      <section className="py-16 bg-slate-100/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SignageSlider
            items={featuredSlides}
            autoPlayInterval={3800}
            title="Featured Works Reel"
            subtitle="Auto-running slideshow of client signage fabrications, PDF presentation slides, and interior execution highlights."
            tag="Auto Slideshow"
          />
        </div>
      </section>

      {/* Main Filterable Gallery Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            tag="Interactive Lightbox Gallery"
            title="Explore Workmanship Across Verticals"
            subtitle="Click any thumbnail to open the interactive fullscreen viewer with keyboard navigation."
            centered={true}
          />

          <GalleryGrid />
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}

