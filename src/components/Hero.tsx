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
  bgImage = "/commercial-building-illuminated.jpeg",
  size = "large",
}) => {
  const pyPadding =
    size === "large"
      ? "pt-20 pb-10 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32"
      : size === "medium"
      ? "pt-16 pb-8 sm:pt-28 sm:pb-16"
      : "pt-14 pb-6 sm:pt-24 sm:pb-12";

  return (
    <section className={`relative bg-slate-100 overflow-hidden border-b border-slate-200 ${pyPadding}`}>
      {/* High Visibility Architectural Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      {/* Light Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-slate-50/40 sm:to-slate-50/20" />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

      {/* Subtle Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3.5 sm:space-y-6">
          {/* Tag */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-slate-300 shadow-2xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800">
              {tag}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-xl sm:text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] uppercase drop-shadow-2xs">
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
          <p className="text-slate-800 text-xs sm:text-base lg:text-lg font-medium leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          {/* CTAs */}
          {showButtons && (
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
              <Link
                href="/get-a-quote"
                className="px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-black text-xs sm:text-base uppercase tracking-wider shadow-md shadow-red-600/20 hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-lg bg-white/95 hover:bg-white text-slate-900 font-extrabold text-xs sm:text-base uppercase tracking-wider border border-slate-300 hover:border-slate-400 transition-all flex items-center justify-center gap-2 shadow-2xs backdrop-blur-md"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          )}

          {/* Highlights pills */}
          <div className="pt-4 sm:pt-6 border-t border-slate-300/80 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-sm text-slate-800 font-bold">
            <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs backdrop-blur-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
              <span>Bangalore Execution</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs backdrop-blur-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
              <span>Signage & Turnkey Interiors</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs backdrop-blur-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-red shrink-0" />
              <span>Verified CEO: {COMPANY_INFO.ceo.name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
