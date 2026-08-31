"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-10 pb-20 sm:pt-16 sm:pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-8 sm:pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Branding & Leadership */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-brand-red flex items-center justify-center font-extrabold text-white text-sm sm:text-xl shadow-md shrink-0">
                SE
              </div>
              <div>
                <span className="font-black text-white text-base sm:text-xl tracking-wide block uppercase">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[10px] sm:text-xs text-red-400 font-bold tracking-wider uppercase block">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {COMPANY_INFO.description}
            </p>

            {/* Leadership box */}
            <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/70 border border-slate-700/80 max-w-md flex items-center justify-between gap-2 shadow-2xs">
              <div>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest block font-medium">
                  Founder & CEO
                </span>
                <span className="font-extrabold text-white text-xs sm:text-sm">
                  {COMPANY_INFO.ceo.name}
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px] sm:text-xs text-red-400 font-bold bg-red-950/60 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-red-800/50 shrink-0">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-400 shrink-0" />
                <span>Verified Leadership</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white text-[10.5px] sm:text-xs font-bold uppercase tracking-widest text-red-400">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Projects Portfolio", href: "/projects" },
                { label: "Photo Gallery", href: "/gallery" },
                { label: "Contact Us", href: "/contact" },
                { label: "Get a Quote", href: "/get-a-quote" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-1 group text-slate-300"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-red-400 transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Business Divisions */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white text-[10.5px] sm:text-xs font-bold uppercase tracking-widest text-red-400">
              Business Divisions
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <Link
                  href="/signage"
                  className="hover:text-white transition-colors font-bold text-white block"
                >
                  Signage Manufacturing
                </Link>
                <span className="text-[11px] sm:text-xs text-slate-400 block">
                  3D Stainless Steel, Acrylic LED & Safety Night Glow
                </span>
              </li>
              <li>
                <Link
                  href="/interior-works"
                  className="hover:text-white transition-colors font-bold text-white block"
                >
                  Interior Project Works
                </Link>
                <span className="text-[11px] sm:text-xs text-slate-400 block">
                  Turnkey Office Fit-outs & Commercial Showrooms
                </span>
              </li>
              <li>
                <Link
                  href="/real-estate"
                  className="hover:text-white transition-colors font-bold text-white block"
                >
                  Real Estate Solutions
                </Link>
                <span className="text-[11px] sm:text-xs text-slate-400 block">
                  Commercial Properties, Converted Land & Bungalows
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white text-[10.5px] sm:text-xs font-bold uppercase tracking-widest text-red-400">
              Contact Bangalore
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.contact.phoneClean}`}
                  className="flex items-start gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-400 block">Direct Line</span>
                    <span className="font-bold text-white text-xs sm:text-sm">
                      {COMPANY_INFO.contact.phone}
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="flex items-start gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-400 block">Email Address</span>
                    <span className="text-xs text-slate-300 font-medium break-all">
                      {COMPANY_INFO.contact.email}
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] sm:text-xs text-slate-400 block">Headquarters</span>
                  <span className="text-xs sm:text-sm font-medium text-slate-300">
                    {COMPANY_INFO.contact.location}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10.5px] sm:text-xs text-slate-400">
          <p>© 2026 Srivathsa Enterprises. All Rights Reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span>Bangalore, Karnataka</span>
            <span>•</span>
            <Link href="/get-a-quote" className="hover:text-white transition-colors font-medium">
              Request Quotation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
