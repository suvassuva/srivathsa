"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { GalleryItem } from "@/data/gallery";
import { GalleryLightbox } from "./GalleryLightbox";

interface SignageSliderProps {
  items: GalleryItem[];
  autoPlayInterval?: number;
  title?: string;
  subtitle?: string;
  tag?: string;
}

export const SignageSlider: React.FC<SignageSliderProps> = ({
  items,
  autoPlayInterval = 3500,
  title = "Real Client Signage Executions",
  subtitle = "Auto-playing showcase of 3D SS channel letters, acrylic LEDs, metal pylons & safety signs.",
  tag = "Live Portfolio Reel",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Number of items visible at once depending on screen width
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, totalPages, autoPlayInterval, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  const handleOpenLightbox = (globalIdx: number) => {
    setLightboxIndex(globalIdx);
    setLightboxOpen(true);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-6">
      {/* Header section */}
      {(title || tag) && (
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            {tag && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200 text-brand-red text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>{tag}</span>
              </div>
            )}
            {title && (
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* Top navigation controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous signage projects"
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-brand-red hover:border-brand-red shadow-2xs hover:shadow-sm transition-all active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold font-mono text-slate-500 px-1">
              {currentIndex + 1} / {totalPages}
            </span>
            <button
              onClick={nextSlide}
              aria-label="Next signage projects"
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-brand-red hover:border-brand-red shadow-2xs hover:shadow-sm transition-all active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Slider Track */}
      <div
        className="relative overflow-hidden rounded-2xl p-1 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {Array.from({ length: totalPages }).map((_, pageIdx) => {
            const pageItems = items.slice(
              pageIdx * itemsPerPage,
              (pageIdx + 1) * itemsPerPage
            );

            return (
              <div
                key={pageIdx}
                className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-1"
              >
                {pageItems.map((item, itemOffset) => {
                  const globalIdx = pageIdx * itemsPerPage + itemOffset;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleOpenLightbox(globalIdx)}
                      className="group/card relative rounded-xl sm:rounded-2xl bg-white border border-slate-200 hover:border-brand-red overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-2xs hover:shadow-lg"
                    >
                      {/* Image Frame */}
                      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover/card:opacity-95 transition-opacity" />

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-2 py-0.5 rounded bg-brand-red text-white text-[9.5px] font-black uppercase tracking-wider shadow-sm">
                            {item.categoryLabel}
                          </span>
                        </div>

                        {/* Hover Overlay Zoom Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px] z-10">
                          <div className="p-2.5 rounded-full bg-brand-red text-white shadow-xl transform scale-75 group-hover/card:scale-100 transition-transform">
                            <Maximize2 className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Bottom Info text */}
                        <div className="absolute bottom-3 left-3 right-3 space-y-0.5 text-white z-10">
                          <h4 className="text-sm font-extrabold group-hover/card:text-red-400 transition-colors line-clamp-1">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-300 line-clamp-1 font-normal">
                            {item.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Bottom Progress Bar & Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 pt-4">
          {Array.from({ length: totalPages }).map((_, pageIdx) => (
            <button
              key={pageIdx}
              onClick={() => setCurrentIndex(pageIdx)}
              aria-label={`Go to slide page ${pageIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === pageIdx
                  ? "w-7 bg-brand-red"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={items}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
