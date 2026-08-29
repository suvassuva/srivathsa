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
    <section className="relative py-20 bg-slate-50 overflow-hidden border-b border-slate-200">
      {/* Red ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 lg:p-16 text-center space-y-8 relative overflow-hidden shadow-lg">
          {/* Top accent bar */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-brand-red rounded-b" />

          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-red">
              Bangalore Corporate Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase">
              {title}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/get-a-quote"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <WhatsAppButton text="WhatsApp Us" className="w-full sm:w-auto" />

            <CallButton text="Call Now" variant="outline" className="w-full sm:w-auto !text-slate-800 !border-slate-300 hover:!border-brand-red" />
          </div>

          {/* Contact summary */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-semibold">
            <span>Direct Line: <strong className="text-slate-900">{COMPANY_INFO.contact.phone}</strong></span>
            <span>•</span>
            <span>Email: <strong className="text-slate-900">{COMPANY_INFO.contact.email}</strong></span>
            <span>•</span>
            <span>Location: <strong className="text-slate-900">{COMPANY_INFO.contact.location}</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
