"use client";

import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails?: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenDetails,
}) => {
  return (
    <div className="group rounded-xl bg-white border border-slate-200 hover:border-slate-300 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-md shadow-2xs">
      {/* Image */}
      <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-slate-100">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

        {/* Category tag */}
        <div className="absolute top-2.5 left-2.5">
          <span className="px-2 py-0.5 rounded bg-brand-red text-white text-[9px] font-extrabold uppercase tracking-widest shadow-2xs">
            {project.categoryLabel}
          </span>
        </div>

        {/* Location badge */}
        <div className="absolute bottom-2 left-2.5 flex items-center gap-1 text-[10.5px] text-white bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-xs">
          <MapPin className="w-3 h-3 text-red-400" />
          <span className="font-semibold">{project.location}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4 space-y-2.5 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-brand-red transition-colors line-clamp-2 leading-snug">
            {project.title}
          </h3>
          <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 font-normal">
            {project.shortDesc}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
          {onOpenDetails ? (
            <button
              onClick={() => onOpenDetails(project)}
              className="text-xs font-extrabold uppercase tracking-wider text-slate-900 hover:text-brand-red transition-colors flex items-center gap-1.5"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
            </button>
          ) : (
            <Link
              href="/get-a-quote"
              className="text-xs font-extrabold uppercase tracking-wider text-slate-900 hover:text-brand-red transition-colors flex items-center gap-1.5"
            >
              <span>Enquire Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
