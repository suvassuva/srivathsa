"use client";

import React, { useState } from "react";
import { X, MapPin, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { PROJECTS_DATA, ProjectItem } from "@/data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: "all", label: "All Portfolio" },
    { id: "signage", label: "Signage Manufacturing" },
    { id: "interior", label: "Interior Works" },
    { id: "real-estate", label: "Real Estate" },
  ];

  const filteredProjects =
    filter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <div className="space-y-0 bg-slate-50">
      {/* Hero */}
      <Hero
        title="Project Portfolio"
        subtitle="Explore sample project executions spanning corporate signage manufacturing, interior project works, and real estate advisory across Bangalore."
        tag="Case Studies & Executions"
        size="medium"
        bgImage="https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Filterable Portfolio Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header & Filter buttons */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              tag="Portfolio Showcase"
              title="Recent Executions & Sourced Assets"
              subtitle="Filter projects by business vertical."
            />

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {filterTabs.map((tab) => {
                const isActive = filter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setFilter(tab.id)}
                    className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                      isActive
                        ? "bg-brand-red text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-md p-4 sm:p-6">
          <div className="relative max-w-3xl w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
                className="absolute top-4 right-4 p-2.5 rounded-lg bg-white/90 text-slate-800 hover:bg-brand-red hover:text-white transition-colors border border-slate-200 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 space-y-1 text-white">
                <span className="px-2.5 py-1 rounded bg-brand-red text-white text-[10px] font-black uppercase tracking-wider inline-block">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-black">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-200 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>{selectedProject.location}</span>
                </div>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase tracking-widest text-brand-red">
                  Project Description & Execution Summary
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  {selectedProject.fullDesc}
                </p>
              </div>

              {/* Specs */}
              {selectedProject.specs && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    Execution Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {Object.entries(selectedProject.specs).map(([key, val]) => (
                      <div key={key} className="space-y-0.5">
                        <span className="text-slate-500 font-bold block">{key}</span>
                        <span className="text-slate-900 font-extrabold">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 block">Tags</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA link inside modal */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={`/get-a-quote?service=${encodeURIComponent(
                    selectedProject.categoryLabel
                  )}&details=${encodeURIComponent(
                    `Requirement similar to ${selectedProject.title}`
                  )}`}
                  className="w-full sm:flex-1 py-3 px-6 rounded-lg bg-brand-red hover:bg-brand-dark-red text-white text-xs font-extrabold text-center uppercase tracking-wider shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <span>Enquire Similar Execution</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto py-3 px-6 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <CTASection />
    </div>
  );
}
