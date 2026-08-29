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
    <div className="rounded-2xl bg-white border border-slate-200 hover:border-brand-red/50 overflow-hidden transition-all duration-300 flex flex-col justify-between group hover:shadow-lg shadow-sm">
      {/* Image header */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${material.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 bg-white/95 px-2.5 py-1 rounded-md text-xs text-slate-800 backdrop-blur-sm border border-slate-200 shadow-sm font-semibold">
          <Shield className="w-3.5 h-3.5 text-brand-red" />
          <span>Durability: {material.durability}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-black text-slate-900 group-hover:text-brand-red transition-colors">
            {material.name}
          </h3>
          <p className="text-xs font-bold text-slate-600">
            {material.tagline}
          </p>
          <p className="text-slate-600 text-xs leading-relaxed pt-1">
            {material.description}
          </p>
        </div>

        {/* Best For list */}
        <div className="space-y-2 pt-3 border-t border-slate-100">
          <span className="text-[10px] uppercase font-black tracking-widest text-brand-red block">
            Best Applications
          </span>
          <div className="space-y-1">
            {material.bestFor.map((app) => (
              <div key={app} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-brand-red shrink-0" />
                <span>{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action link */}
        <div className="pt-4">
          <Link
            href={`/get-a-quote?service=Signage&details=${encodeURIComponent(
              `Enquiry regarding ${material.name}`
            )}`}
            className="w-full py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-brand-red text-slate-900 hover:text-white text-xs font-bold text-center transition-colors block border border-slate-200 hover:border-brand-red"
          >
            Enquire {material.name} Signage
          </Link>
        </div>
      </div>
    </div>
  );
};
