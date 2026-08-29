"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  variant?: "primary" | "outline" | "floating";
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  text = "WhatsApp Us",
  className = "",
  variant = "primary",
}) => {
  if (variant === "floating") {
    return (
      <a
        href={COMPANY_INFO.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Srivathsa Enterprises"
        className="fixed bottom-20 right-4 z-40 md:bottom-6 md:right-6 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 group font-medium"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-semibold">WhatsApp Us</span>
      </a>
    );
  }

  if (variant === "outline") {
    return (
      <a
        href={COMPANY_INFO.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-medium transition-all duration-300 text-sm sm:text-base ${className}`}
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>{text}</span>
      </a>
    );
  }

  return (
    <a
      href={COMPANY_INFO.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base ${className}`}
    >
      <MessageSquare className="w-4 h-4 fill-current" />
      <span>{text}</span>
    </a>
  );
};
