"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, Compass, Building2 } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  image: string;
  iconName: "signage" | "interior" | "real-estate";
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  description,
  href,
  image,
  iconName,
}) => {
  const getIcon = () => {
    switch (iconName) {
      case "signage":
        return <Layers className="w-4 h-4 sm:w-6 sm:h-6 text-brand-red" />;
      case "interior":
        return <Compass className="w-4 h-4 sm:w-6 sm:h-6 text-brand-red" />;
      case "real-estate":
      default:
        return <Building2 className="w-4 h-4 sm:w-6 sm:h-6 text-brand-red" />;
    }
  };

  return (
    <div className="group relative rounded-xl sm:rounded-2xl bg-white border border-slate-200 hover:border-brand-red/60 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xs hover:shadow-xl">
      {/* Top Image Container */}
      <div className="relative h-40 sm:h-56 w-full overflow-hidden bg-slate-100">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        {/* Icon badge */}
        <div className="absolute top-3 left-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-2xs">
          {getIcon()}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5 sm:space-y-2">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-brand-red block">
            {subtitle}
          </span>
          <h3 className="text-base sm:text-xl font-black text-slate-900 group-hover:text-brand-red transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-normal sm:leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* CTA */}
        <div className="pt-3 sm:pt-4 border-t border-slate-100">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-900 group-hover:text-brand-red transition-colors"
          >
            <span>Learn More & Enquire</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-red group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
