"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface HeroProps {
  title?: string;
  subtitle?: string;
  tag?: string;
  showButtons?: boolean;
  bgImage?: string;
  size?: "large" | "medium" | "compact";
}

export const Hero: React.FC<HeroProps> = ({
  title = "Signage. Interiors. Real Estate.",
  subtitle = "Complete business solutions for signage manufacturing, interior project execution and real-estate requirements in Bangalore.",
  tag = "Srivathsa Enterprises • Bangalore",
  showButtons = true,
  bgImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
  size = "large",
}) => {
  const pyPadding =
    size === "large"
      ? "pt-32 pb-20 md:pt-44 md:pb-28 lg:pt-48 lg:pb-32"
      : size === "medium"
      ? "pt-28 pb-16 md:pt-36 md:pb-20"
      : "pt-24 pb-12 md:pt-28 md:pb-14";

  return (
    <section className={`relative bg-slate-100 overflow-hidden border-b border-slate-200 ${pyPadding}`}>
      {/* High Visibility Architectural Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      {/* Light Overlay Gradient - Left-focused for crisp text contrast while exposing the image on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-slate-50/40 sm:to-slate-50/20" />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

      {/* Subtle Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-300 shadow-sm backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-800">
              {tag}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] uppercase drop-shadow-sm">
            {title.includes("Signage. Interiors.") ? (
              <>
                Signage. <span className="text-brand-red">Interiors.</span>{" "}
                <br className="hidden sm:inline" />
                Real Estate.
              </>
            ) : (
              title
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-800 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          {/* CTAs */}
          {showButtons && (
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/get-a-quote"
                className="px-7 py-4 rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-red-600/30 hover:shadow-red-600/40 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="px-7 py-4 rounded-lg bg-white/95 hover:bg-white text-slate-900 font-extrabold text-sm sm:text-base uppercase tracking-wider border border-slate-300 hover:border-slate-400 transition-all flex items-center justify-center gap-2 shadow-sm backdrop-blur-md"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          )}

          {/* Highlights pills */}
          <div className="pt-6 border-t border-slate-300/80 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-800 font-bold">
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs backdrop-blur-xs">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
              <span>Bangalore Execution</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs backdrop-blur-xs">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
              <span>Signage & Turnkey Interiors</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-brand-red shrink-0" />
              <span>Verified CEO: {COMPANY_INFO.ceo.name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
