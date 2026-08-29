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
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between overflow-y-auto p-6 z-10 transition-transform duration-300">
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-brand-red flex items-center justify-center font-bold text-white text-base shadow-sm">
                SE
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-slate-900 tracking-wide text-sm">
                  SRIVATHSA
                </span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest -mt-0.5">
                  Enterprises
                </span>
              </div>
            </Link>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-1.5">
            <Link
              href="/"
              onClick={onClose}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/"
                  ? "bg-red-50 text-brand-red font-bold"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/about"
                  ? "bg-red-50 text-brand-red font-bold"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span>About Us</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>

            {/* Accordion Services */}
            <div className="rounded-lg border border-slate-100 overflow-hidden bg-slate-50/50 my-1">
              <button
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 bg-slate-100/60 hover:bg-slate-100"
              >
                <div className="flex items-center gap-2">
                  <span className="text-brand-red font-bold">Services</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-brand-red/10 text-brand-red font-bold">
                    3 Divisions
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform ${
                    servicesExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesExpanded && (
                <div className="p-2 space-y-1 bg-white">
                  <Link
                    href="/services"
                    onClick={onClose}
                    className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-brand-red hover:underline border-b border-slate-100 mb-1"
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
                        className={`flex items-start gap-3 p-2.5 rounded-lg transition-colors ${
                          isActive
                            ? "bg-red-50 text-brand-red font-semibold"
                            : "hover:bg-slate-50 text-slate-800"
                        }`}
                      >
                        <div className="p-1.5 rounded bg-slate-100 text-brand-red mt-0.5">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{sub.name}</div>
                          <div className="text-[10px] text-slate-500">{sub.desc}</div>
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
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/projects"
                  ? "bg-red-50 text-brand-red font-bold"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span>Projects</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/gallery"
              onClick={onClose}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/gallery"
                  ? "bg-red-50 text-brand-red font-bold"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span>Gallery</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/contact"
                  ? "bg-red-50 text-brand-red font-bold"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </nav>

          {/* Quote Button */}
          <div className="pt-2">
            <Link
              href="/get-a-quote"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-bold text-center text-sm shadow-md transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Footer contact */}
        <div className="border-t border-slate-100 pt-5 mt-6 space-y-4">
          <div className="space-y-2 text-xs text-slate-600">
            <a
              href={`tel:${COMPANY_INFO.contact.phoneClean}`}
              className="flex items-center gap-2.5 hover:text-brand-red transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-red shrink-0" />
              <span className="font-semibold">{COMPANY_INFO.contact.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.contact.email}`}
              className="flex items-center gap-2.5 hover:text-brand-red transition-colors truncate"
            >
              <Mail className="w-4 h-4 text-brand-red shrink-0" />
              <span className="truncate">{COMPANY_INFO.contact.email}</span>
            </a>
            <div className="flex items-center gap-2.5 text-slate-500">
              <MapPin className="w-4 h-4 text-brand-red shrink-0" />
              <span>{COMPANY_INFO.contact.location}</span>
            </div>
          </div>

          <WhatsAppButton text="WhatsApp Quick Query" className="w-full" />
        </div>
      </div>
    </div>
  );
};
