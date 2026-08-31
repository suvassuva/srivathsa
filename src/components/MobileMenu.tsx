"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, Mail, MapPin, ArrowRight, ChevronDown, Layers, Compass, Building2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { WhatsAppButton } from "./WhatsAppButton";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [servicesExpanded, setServicesExpanded] = useState(true);

  if (!isOpen) return null;

  const serviceSubLinks = [
    { name: "Signage Manufacturing", href: "/signage", icon: Layers, desc: "3D SS, Acrylic, Brass, Safety & Night Glow" },
    { name: "Interior Works", href: "/interior-works", icon: Compass, desc: "Turnkey Office & Showroom Execution" },
    { name: "Real Estate", href: "/real-estate", icon: Building2, desc: "Commercial Properties, Land & Bungalows" },
  ];

  return (
    <div className="fixed inset-0 z-[100] lg:hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-[300px] sm:max-w-xs h-full bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between overflow-y-auto p-4 pb-24 z-10 space-y-4 animate-in slide-in-from-right duration-300">
        <div className="space-y-4">
          {/* Header row */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <Link href="/" onClick={onClose} className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-brand-red flex items-center justify-center font-black text-white text-[10px] shadow-2xs">
              SE
            </div>
            <div className="flex flex-col">
              <span className="font-black text-slate-900 tracking-tight text-[11px]">
                SRIVATHSA
              </span>
              <span className="text-[8.5px] text-slate-500 font-bold uppercase tracking-wider -mt-0.5">
                Enterprises
              </span>
            </div>
          </Link>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-0.5">
          <Link
            href="/"
            onClick={onClose}
            className={`flex items-center justify-between px-2.5 py-1.5 rounded-md text-[11px] font-semibold transition-all ${
              pathname === "/"
                ? "bg-red-50 text-brand-red font-bold"
                : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <span>Home</span>
            <ArrowRight className="w-3 h-3 text-slate-400" />
          </Link>

          <Link
            href="/about"
            onClick={onClose}
            className={`flex items-center justify-between px-2.5 py-1.5 rounded-md text-[11px] font-semibold transition-all ${
              pathname === "/about"
                ? "bg-red-50 text-brand-red font-bold"
                : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <span>About Us</span>
            <ArrowRight className="w-3 h-3 text-slate-400" />
          </Link>

          {/* Accordion Services */}
          <div className="rounded-md border border-slate-100 overflow-hidden bg-slate-50/50 my-0.5">
            <button
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className="w-full flex items-center justify-between px-2.5 py-1.5 text-[11px] font-semibold text-slate-900 bg-slate-100/60 hover:bg-slate-100"
            >
              <div className="flex items-center gap-1">
                <span className="text-brand-red font-bold">Services</span>
                <span className="text-[8.5px] px-1 py-0.5 rounded bg-brand-red/10 text-brand-red font-bold">
                  3 Divisions
                </span>
              </div>
              <ChevronDown
                className={`w-3 h-3 text-slate-500 transition-transform ${
                  servicesExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesExpanded && (
              <div className="p-1 space-y-0.5 bg-white">
                <Link
                  href="/services"
                  onClick={onClose}
                  className="block px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-red hover:underline border-b border-slate-100 mb-0.5"
                >
                  View All Services Overview →
                </Link>

                {serviceSubLinks.map((sub) => {
                  const IconComp = sub.icon;
                  const isActive = pathname === sub.href;
                  return (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={onClose}
                      className={`flex items-start gap-2 p-1.5 rounded-md transition-colors ${
                        isActive
                          ? "bg-red-50 text-brand-red font-semibold"
                          : "hover:bg-slate-50 text-slate-800"
                      }`}
                    >
                      <div className="p-1 rounded bg-slate-100 text-brand-red mt-0.5 shrink-0">
                        <IconComp className="w-3 h-3" />
                      </div>
                      <div>
                        <div className="text-[10.5px] font-bold text-slate-900 leading-tight">{sub.name}</div>
                        <div className="text-[8.5px] text-slate-500 line-clamp-1 leading-snug">{sub.desc}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href="/projects"
            onClick={onClose}
            className={`flex items-center justify-between px-2.5 py-1.5 rounded-md text-[11px] font-semibold transition-all ${
              pathname === "/projects"
                ? "bg-red-50 text-brand-red font-bold"
                : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <span>Projects</span>
            <ArrowRight className="w-3 h-3 text-slate-400" />
          </Link>

          <Link
            href="/gallery"
            onClick={onClose}
            className={`flex items-center justify-between px-2.5 py-1.5 rounded-md text-[11px] font-semibold transition-all ${
              pathname === "/gallery"
                ? "bg-red-50 text-brand-red font-bold"
                : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <span>Gallery</span>
            <ArrowRight className="w-3 h-3 text-slate-400" />
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className={`flex items-center justify-between px-2.5 py-1.5 rounded-md text-[11px] font-semibold transition-all ${
              pathname === "/contact"
                ? "bg-red-50 text-brand-red font-bold"
                : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <span>Contact</span>
            <ArrowRight className="w-3 h-3 text-slate-400" />
          </Link>
        </nav>

        {/* Footer contact */}
        <div className="border-t border-slate-100 pt-3 space-y-2.5">
          <Link
            href="/get-a-quote"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md bg-brand-red hover:bg-brand-dark-red text-white font-extrabold text-center text-xs shadow-2xs transition-all uppercase tracking-wider"
          >
            Get a Quote
          </Link>

          <div className="space-y-1.5 text-[11px] text-slate-600">
            <a
              href={`tel:${COMPANY_INFO.contact.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-brand-red transition-colors"
            >
              <Phone className="w-3 h-3 text-brand-red shrink-0" />
              <span className="font-semibold">{COMPANY_INFO.contact.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.contact.email}`}
              className="flex items-center gap-1.5 hover:text-brand-red transition-colors truncate"
            >
              <Mail className="w-3 h-3 text-brand-red shrink-0" />
              <span className="truncate">{COMPANY_INFO.contact.email}</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-500">
              <MapPin className="w-3 h-3 text-brand-red shrink-0" />
              <span className="truncate">{COMPANY_INFO.contact.location}</span>
            </div>
          </div>

          <WhatsAppButton text="WhatsApp Quick Query" className="w-full text-[10.5px] py-1.5 px-2.5" />
        </div>
      </div>
    </div>
  </div>
);
};
