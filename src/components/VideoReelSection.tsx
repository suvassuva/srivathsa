"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, Maximize2, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { VIDEO_SHOWCASE_DATA, VideoItem } from "@/data/videos";
import { VideoModal } from "./VideoModal";

interface VideoReelSectionProps {
  title?: string;
  subtitle?: string;
  tag?: string;
  initialCategoryId?: string;
}

export const VideoReelSection: React.FC<VideoReelSectionProps> = ({
  title = "Precision In Motion: Fabrication & Site Execution",
  subtitle = "Experience the craft behind our CNC laser cutting, dimensional channel letter fabrication, corporate slate wall branding, and high-rise commercial installations.",
  tag = "Cinematic Video Reel",
  initialCategoryId = "all",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryId);
  const [activeVideo, setActiveVideo] = useState<VideoItem>(VIDEO_SHOWCASE_DATA[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const mainVideoRef = useRef<HTMLVideoElement>(null);

  const categories = [
    { id: "all", label: "All Clips (5)" },
    { id: "signage", label: "Signage & CNC (3)" },
    { id: "interiors", label: "Interiors (1)" },
    { id: "real-estate", label: "Real Estate (1)" },
  ];

  const filteredVideos =
    selectedCategory === "all"
      ? VIDEO_SHOWCASE_DATA
      : VIDEO_SHOWCASE_DATA.filter((v) => v.category === selectedCategory);

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsPlaying(true);
    if (mainVideoRef.current) {
      mainVideoRef.current.currentTime = 0;
      mainVideoRef.current.play().catch(() => {});
    }
  };

  const togglePlay = () => {
    if (!mainVideoRef.current) return;
    if (isPlaying) {
      mainVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      mainVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!mainVideoRef.current) return;
    mainVideoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background Ambience & Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-extrabold uppercase tracking-wider text-slate-300">
              <Sparkles className="w-3 h-3 text-brand-red animate-pulse" />
              <span>{tag}</span>
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight uppercase leading-snug text-white">
              {title}
            </h2>
            <p className="text-slate-400 text-[11px] sm:text-xs lg:text-sm leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-brand-red text-white shadow-md shadow-red-600/30"
                      : "bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Video Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Active Player (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-slate-900/90 rounded-2xl sm:rounded-3xl border border-slate-800 overflow-hidden shadow-2xl p-2 sm:p-3 space-y-3">
            <div
              className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black cursor-pointer group"
              onClick={togglePlay}
            >
              <video
                ref={mainVideoRef}
                key={activeVideo.id}
                src={activeVideo.src}
                poster={activeVideo.poster}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Dynamic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none" />

              {/* Badge & Duration */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-brand-red text-white shadow-md">
                  {activeVideo.badge}
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-950/80 text-slate-200 border border-slate-800 backdrop-blur-md">
                  {activeVideo.duration}
                </span>
              </div>

              {/* Centered Play indicator on Pause */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-brand-red text-white flex items-center justify-center shadow-xl transform scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </div>
              )}

              {/* Bottom Control Bar */}
              <div
                className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/80 backdrop-blur-md transition-all shadow-md"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/80 backdrop-blur-md transition-all shadow-md flex items-center gap-1.5 text-xs font-semibold px-3"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-4 h-4 text-brand-red" />
                        <span className="text-[11px] hidden sm:inline text-slate-300">Unmute</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4 text-green-400" />
                        <span className="text-[11px] hidden sm:inline text-slate-300">Sound On</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/80 backdrop-blur-md transition-all shadow-md flex items-center gap-1.5 text-xs font-bold px-3"
                  aria-label="Fullscreen modal"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span className="hidden sm:inline text-[11px]">Fullscreen</span>
                </button>
              </div>
            </div>

            {/* Video Meta Info */}
            <div className="p-2.5 sm:p-3.5 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-brand-red/20 text-brand-red border border-brand-red/30 text-[10px] font-extrabold uppercase tracking-wider shrink-0">
                  {activeVideo.categoryLabel}
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-slate-300 font-medium text-[11px] sm:text-xs leading-tight">
                  {activeVideo.subtitle}
                </span>
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-black text-white leading-snug">
                {activeVideo.title}
              </h3>
              <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed font-normal">
                {activeVideo.description}
              </p>
              <div className="pt-1 flex flex-wrap gap-1.5">
                {activeVideo.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-slate-800/90 text-slate-200 border border-slate-700/80"
                  >
                    <CheckCircle2 className="w-3 h-3 text-brand-red shrink-0" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Playlist Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5 flex-1 overflow-y-auto max-h-[540px] pr-1">
              <div className="flex items-center justify-between pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>Select Clip To Watch</span>
                <span>{filteredVideos.length} Available</span>
              </div>

              {filteredVideos.map((video) => {
                const isActive = activeVideo.id === video.id;
                return (
                  <div
                    key={video.id}
                    onClick={() => handleSelectVideo(video)}
                    className={`group flex items-center gap-3 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border transition-all cursor-pointer ${
                      isActive
                        ? "bg-slate-900 border-brand-red shadow-md shadow-red-600/10 ring-1 ring-brand-red/50"
                        : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-24 h-16 sm:w-28 sm:h-18 rounded-lg overflow-hidden shrink-0 bg-black border border-slate-800">
                      <video
                        src={video.src}
                        poster={video.poster}
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-mono bg-slate-950/80 text-white border border-slate-800">
                        {video.duration}
                      </div>
                      {isActive ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center shadow-md">
                            <Play className="w-3 h-3 ml-0.5" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1 space-y-0.5">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider truncate">
                          {video.badge}
                        </span>
                        {isActive && (
                          <span className="text-[9px] font-bold uppercase tracking-wider text-green-400 bg-green-950/60 border border-green-800/80 px-1.5 py-0.2 rounded">
                            Playing
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-red transition-colors line-clamp-1">
                        {video.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1 font-normal">
                        {video.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Call to Action Card */}
            <div className="p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Require On-Site Demonstration?</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
                Visit our Bangalore workshop or arrange an on-site sample presentation with our CEO & fabrication team.
              </p>
              <div className="pt-1 flex gap-2">
                <Link
                  href="/get-a-quote"
                  className="px-3 py-1.5 rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-extrabold text-[11px] uppercase tracking-wider transition-all flex items-center gap-1 shadow-sm"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <Link
                  href="/gallery"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-[11px] uppercase tracking-wider transition-all border border-slate-700"
                >
                  <span>View Full Gallery</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <VideoModal
        video={activeVideo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
