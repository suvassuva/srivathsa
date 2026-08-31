"use client";

import React from "react";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  centered = false,
  className = "",
}) => {
  return (
    <div
      className={`space-y-1.5 sm:space-y-2.5 ${
        centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"
      } ${className}`}
    >
      {tag && (
        <div className={`flex items-center gap-1.5 ${centered ? "justify-center" : ""}`}>
          <div className="w-4 h-0.5 bg-brand-red"></div>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-red">
            {tag}
          </span>
        </div>
      )}
      <h2 className="text-lg sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-snug sm:leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
