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
        return <Layers className="w-6 h-6 text-brand-red" />;
      case "interior":
        return <Compass className="w-6 h-6 text-brand-red" />;
      case "real-estate":
      default:
        return <Building2 className="w-6 h-6 text-brand-red" />;
    }
  };

  return (
    <div className="group relative rounded-2xl bg-white border border-slate-200 hover:border-brand-red/60 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-xl">
      {/* Top Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        {/* Icon badge */}
        <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-sm">
          {getIcon()}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-brand-red">
            {subtitle}
          </span>
          <h3 className="text-xl font-black text-slate-900 group-hover:text-brand-red transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-slate-100">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-900 group-hover:text-brand-red transition-colors"
          >
            <span>Learn More & Enquire</span>
            <ArrowRight className="w-4 h-4 text-brand-red group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
