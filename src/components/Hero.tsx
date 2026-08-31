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
      ? "pt-16 pb-8 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20"
      : size === "medium"
      ? "pt-14 pb-6 sm:pt-20 sm:pb-12"
      : "pt-12 pb-5 sm:pt-16 sm:pb-10";

  return (
    <section className={`relative bg-slate-950 overflow-hidden border-b border-slate-800 ${pyPadding}`}>
      {/* High Visibility Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      {/* High Contrast Gradient Overlay - Ensures full background photo clarity while guaranteeing text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

      {/* Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3.5 sm:space-y-4.5">
          {/* Tag */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-900/80 border border-slate-700/80 shadow-sm backdrop-blur-md max-w-full">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-200 whitespace-nowrap overflow-hidden text-ellipsis">
              {tag}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.15] uppercase drop-shadow-md">
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
          <p className="text-slate-200 text-xs sm:text-sm lg:text-base font-normal leading-relaxed max-w-xl drop-shadow-xs">
            {subtitle}
          </p>

          {/* CTAs */}
          {showButtons && (
            <div className="pt-1.5 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
              <Link
                href="/get-a-quote"
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center justify-center gap-1.5 group transform hover:-translate-y-0.5"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider border border-white/30 hover:border-white/50 transition-all flex items-center justify-center gap-1.5 shadow-md backdrop-blur-md transform hover:-translate-y-0.5"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          )}

          {/* Highlights pills */}
          <div className="pt-3 sm:pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2 sm:gap-2.5 text-[10px] sm:text-[11px] text-slate-200 font-medium">
            <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700/70 shadow-2xs backdrop-blur-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
              <span>Bangalore Execution</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700/70 shadow-2xs backdrop-blur-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
              <span>Signage & Turnkey Interiors</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700/70 shadow-2xs backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-red shrink-0" />
              <span>Verified CEO: {COMPANY_INFO.ceo.name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
