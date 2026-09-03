"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle, Shield } from "lucide-react";
import { MaterialItem } from "@/data/materials";

interface MaterialCardProps {
  material: MaterialItem;
}

export const MaterialCard: React.FC<MaterialCardProps> = ({ material }) => {
  return (
    <div className="rounded-xl bg-white border border-slate-200 hover:border-brand-red/50 overflow-hidden transition-all duration-300 flex flex-col justify-between group hover:shadow-md shadow-2xs">
      {/* Image header */}
      <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-900">
        <img
          src={material.image}
          alt={material.name}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            material.imagePosition === "top"
              ? "object-top"
              : material.imagePosition === "bottom"
              ? "object-bottom"
              : "object-center"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        <div className="absolute bottom-2 left-2.5 flex items-center gap-1 bg-white/95 px-2 py-0.5 rounded text-[10px] sm:text-[11px] text-slate-800 backdrop-blur-xs border border-slate-200 shadow-2xs font-bold z-10">
          <Shield className="w-3 h-3 text-brand-red" />
          <span>Durability: {material.durability}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4 space-y-2.5 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-brand-red transition-colors leading-snug">
            {material.name}
          </h3>
          <p className="text-[10.5px] sm:text-[11px] font-bold text-slate-600">
            {material.tagline}
          </p>
          <p className="text-slate-600 text-[10.5px] sm:text-[11px] leading-relaxed font-normal pt-0.5 line-clamp-3">
            {material.description}
          </p>
        </div>

        {/* Best For list */}
        <div className="space-y-1 pt-2 border-t border-slate-100">
          <span className="text-[9px] uppercase font-black tracking-widest text-brand-red block">
            Best Applications
          </span>
          <div className="space-y-0.5">
            {material.bestFor.map((app) => (
              <div key={app} className="flex items-center gap-1.5 text-[10.5px] text-slate-700 font-medium">
                <CheckCircle className="w-3 h-3 text-brand-red shrink-0" />
                <span>{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action link */}
        <div className="pt-2.5">
          <Link
            href={`/get-a-quote?service=Signage&details=${encodeURIComponent(
              `Enquiry regarding ${material.name}`
            )}`}
            className="w-full py-1.5 px-3 rounded-md bg-slate-100 hover:bg-brand-red text-slate-900 hover:text-white text-[10.5px] sm:text-xs font-bold text-center transition-colors block border border-slate-200 hover:border-brand-red"
          >
            Enquire {material.name} Signage
          </Link>
        </div>
      </div>
    </div>
  );
};
