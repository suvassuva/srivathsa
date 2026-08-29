"use client";

import React, { useState } from "react";
import { Maximize2 } from "lucide-react";
import { GALLERY_DATA } from "@/data/gallery";
import { GalleryLightbox } from "./GalleryLightbox";

export const GalleryGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const categories = [
    { id: "all", label: "All Works" },
    { id: "signage", label: "Signage" },
    { id: "interiors", label: "Interiors" },
    { id: "materials", label: "Materials" },
    { id: "installation", label: "Installation" },
    { id: "projects", label: "Projects" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Category filter tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                isActive
                  ? "bg-brand-red text-white shadow-md"
                  : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(idx)}
            className="group relative rounded-2xl bg-white border border-slate-200 hover:border-brand-red overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top badge */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded bg-brand-red text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Hover icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                <div className="p-3 rounded-full bg-brand-red text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1 text-white">
                <h3 className="text-base font-bold group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
