"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { WhatsAppButton } from "./WhatsAppButton";
import { CallButton } from "./CallButton";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Have a Project in Mind?",
  subtitle = "Talk to Srivathsa Enterprises about your signage, interior or property requirements in Bangalore.",
}) => {
  return (
    <section className="relative py-8 sm:py-12 lg:py-14 bg-slate-50 overflow-hidden border-b border-slate-200">
      {/* Red ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-white border border-slate-200 p-5 sm:p-8 lg:p-10 text-center space-y-4 sm:space-y-6 relative overflow-hidden shadow-sm">
          {/* Top accent bar */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-1 bg-brand-red rounded-b" />

          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-[9.5px] sm:text-xs font-black uppercase tracking-widest text-brand-red">
              Bangalore Corporate Services
            </span>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight uppercase leading-snug">
              {title}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 pt-1">
            <Link
              href="/get-a-quote"
              className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xs transition-all flex items-center justify-center gap-1.5 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <WhatsAppButton text="WhatsApp Us" className="w-full sm:w-auto text-xs sm:text-sm py-2.5 px-5 rounded-lg" />

            <CallButton text="Call Now" variant="outline" className="w-full sm:w-auto text-xs sm:text-sm py-2.5 px-5 rounded-lg !text-slate-800 !border-slate-300 hover:!border-brand-red" />
          </div>

          {/* Contact summary */}
          <div className="pt-3 sm:pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-2 sm:gap-5 text-[10.5px] sm:text-xs text-slate-500 font-semibold">
            <span>Direct Line: <strong className="text-slate-900">{COMPANY_INFO.contact.phone}</strong></span>
            <span className="hidden sm:inline">•</span>
            <span>Email: <strong className="text-slate-900">{COMPANY_INFO.contact.email}</strong></span>
            <span className="hidden sm:inline">•</span>
            <span>Location: <strong className="text-slate-900">{COMPANY_INFO.contact.location}</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
