"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, FileText } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 block lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 py-2 px-3 shadow-xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href={`tel:${COMPANY_INFO.contact.phoneClean}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-slate-100 active:bg-slate-200 text-slate-800 border border-slate-200 transition-colors min-h-[48px]"
        >
          <Phone className="w-4 h-4 text-brand-red mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Call Now</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={COMPANY_INFO.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-50 active:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors min-h-[48px]"
        >
          <MessageSquare className="w-4 h-4 fill-current text-[#25D366] mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Quote button */}
        <Link
          href="/get-a-quote"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-brand-red active:bg-brand-dark-red text-white transition-colors min-h-[48px] shadow-sm"
        >
          <FileText className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Get Quote</span>
        </Link>
      </div>
    </div>
  );
};
