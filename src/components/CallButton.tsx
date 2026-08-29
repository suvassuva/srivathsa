"use client";

import React from "react";
import { Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface CallButtonProps {
  text?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export const CallButton: React.FC<CallButtonProps> = ({
  text = "Call Now",
  className = "",
  variant = "secondary",
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-brand-red hover:bg-brand-dark-red text-white shadow-lg";
      case "outline":
        return "border border-white/30 hover:border-brand-red text-white hover:text-brand-red bg-transparent";
      case "secondary":
      default:
        return "bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700";
    }
  };

  return (
    <a
      href={`tel:${COMPANY_INFO.contact.phoneClean}`}
      aria-label={`Call Srivathsa Enterprises at ${COMPANY_INFO.contact.phone}`}
      className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${getVariantStyles()} ${className}`}
    >
      <Phone className="w-4 h-4 text-brand-red" />
      <span>{text}</span>
    </a>
  );
};
