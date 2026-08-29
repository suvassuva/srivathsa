"use client";

import React from "react";
import { COMPANY_INFO } from "@/data/company";

export const ProcessTimeline: React.FC = () => {
  return (
    <div className="relative py-6">
      {/* Connector line for desktop */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-12 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
        {COMPANY_INFO.processSteps.map((item, idx) => (
          <div
            key={item.step}
            className="group rounded-2xl bg-white border border-slate-200 p-6 space-y-4 hover:border-brand-red transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-md"
          >
            <div className="space-y-3">
              {/* Step number badge */}
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-brand-red font-black text-xl flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm">
                  {item.step}
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                  Phase 0{idx + 1}
                </span>
              </div>

              {/* Step title */}
              <h3 className="text-base font-black text-slate-900 group-hover:text-brand-red transition-colors leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                {item.description}
              </p>
            </div>

            <div className="w-full h-1 rounded-full bg-slate-200 group-hover:bg-brand-red transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};
