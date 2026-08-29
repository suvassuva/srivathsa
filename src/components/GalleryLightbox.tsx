"use client";

import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, items.length]);

  if (!isOpen || !currentItem) return null;

  const handlePrev = () => {
    setIsZoomed(false);
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setIsZoomed(false);
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 transition-all duration-300">
      {/* Top control bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded bg-brand-red text-white text-xs font-bold uppercase tracking-wider">
            {currentItem.categoryLabel}
          </span>
          <span className="text-xs text-neutral-400 font-medium hidden sm:inline">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom toggle button */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            className="p-2.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-white transition-colors border border-neutral-800"
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2.5 rounded-lg bg-neutral-900/90 hover:bg-brand-red text-white transition-colors border border-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport */}
      <div className="relative max-w-5xl w-full h-[80vh] flex flex-col items-center justify-center p-2">
        {/* Navigation Arrow Left */}
        <button
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-brand-red text-white transition-all border border-neutral-800 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div
          className={`relative max-w-full max-h-full overflow-auto rounded-lg transition-transform duration-300 ${
            isZoomed ? "scale-125 cursor-zoom-out" : "scale-100 cursor-zoom-in"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl mx-auto"
          />
        </div>

        {/* Navigation Arrow Right */}
        <button
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-brand-red text-white transition-all border border-neutral-800 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Caption bar */}
        <div className="mt-4 text-center space-y-1 max-w-xl bg-neutral-900/90 border border-neutral-800/80 px-6 py-3 rounded-xl backdrop-blur-md">
          <h3 className="text-base font-bold text-white">{currentItem.title}</h3>
          <p className="text-xs text-neutral-400">{currentItem.caption}</p>
        </div>
      </div>
    </div>
  );
};
