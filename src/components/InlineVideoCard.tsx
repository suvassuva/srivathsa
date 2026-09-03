"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { VideoItem } from "@/data/videos";
import { VideoModal } from "./VideoModal";

interface InlineVideoCardProps {
  video: VideoItem;
  aspect?: "video" | "square" | "portrait";
  className?: string;
  showDetails?: boolean;
}

export const InlineVideoCard: React.FC<InlineVideoCardProps> = ({
  video,
  aspect = "video",
  className = "",
  showDetails = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "portrait"
      ? "aspect-[4/5]"
      : "aspect-video";

  return (
    <>
      <div
        className={`group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
      >
        {/* Video Canvas */}
        <div
          className={`relative ${aspectClass} w-full overflow-hidden bg-black cursor-pointer`}
          onClick={() => setIsModalOpen(true)}
        >
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />

          {/* Top Badge & Duration */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-brand-red text-white shadow-sm backdrop-blur-md">
              {video.badge}
            </span>
            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-950/80 text-white border border-slate-700/80 backdrop-blur-md">
              {video.duration}
            </span>
          </div>

          {/* Centered Play Indicator on Pause */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-brand-red/90 text-white flex items-center justify-center shadow-lg transform scale-110 transition-transform">
                <Play className="w-5 h-5 ml-0.5" />
              </div>
            </div>
          )}

          {/* Bottom Interactive Controls */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={togglePlay}
                className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/70 transition-colors backdrop-blur-sm"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/70 transition-colors backdrop-blur-sm"
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5 text-brand-red" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/70 transition-colors backdrop-blur-sm flex items-center gap-1 text-[11px] font-bold px-2.5"
              aria-label="Expand video"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Expand</span>
            </button>
          </div>
        </div>

        {/* Text Details */}
        {showDetails && (
          <div className="p-4 sm:p-5 space-y-2 bg-white">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-brand-red block">
                {video.categoryLabel}
              </span>
              <h4 className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                {video.title}
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed font-normal">
                {video.subtitle}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
              {video.features.slice(0, 2).map((feat, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700"
                >
                  ✓ {feat}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <VideoModal
        video={video}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
