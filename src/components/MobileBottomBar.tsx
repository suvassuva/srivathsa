"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, FileText } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 py-1.5 px-2 shadow-lg pb-[calc(0.375rem+env(safe-area-inset-bottom,0px))]">
      <div className="grid grid-cols-3 gap-1.5 max-w-sm mx-auto">
        {/* Call button */}
        <a
          href={`tel:${COMPANY_INFO.contact.phoneClean}`}
          className="flex flex-row items-center justify-center gap-1 py-1.5 px-1.5 rounded-lg bg-slate-100 active:bg-slate-200 text-slate-800 border border-slate-200 transition-colors h-9"
        >
          <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-tight whitespace-nowrap">Call Now</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={COMPANY_INFO.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center justify-center gap-1 py-1.5 px-1.5 rounded-lg bg-emerald-50 active:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors h-9"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current text-[#25D366] shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-tight whitespace-nowrap">WhatsApp</span>
        </a>

        {/* Quote button */}
        <Link
          href="/get-a-quote"
          className="flex flex-row items-center justify-center gap-1 py-1.5 px-1.5 rounded-lg bg-brand-red active:bg-brand-dark-red text-white transition-colors h-9 shadow-xs"
        >
          <FileText className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-tight whitespace-nowrap">Get Quote</span>
        </Link>
      </div>
    </div>
  );
};
