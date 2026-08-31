"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, ChevronDown, Layers, Compass, Building2, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const serviceSubItems = [
    {
      title: "Signage Manufacturing",
      desc: "3D Stainless steel, Acrylic LED, Brass & Photoluminescent Safety signs",
      href: "/signage",
      icon: Layers,
    },
    {
      title: "Interior Project Works",
      desc: "Turnkey commercial office fit-outs, acoustic ceilings & partitions",
      href: "/interior-works",
      icon: Compass,
    },
    {
      title: "Real Estate Advisory",
      desc: "Commercial properties, converted land, plots, bungalows & farmlands",
      href: "/real-estate",
      icon: Building2,
    },
  ];

  const isServicesActive =
    pathname === "/services" ||
    pathname === "/signage" ||
    pathname === "/interior-works" ||
    pathname === "/real-estate";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-1.5 sm:py-2 lg:py-2"
            : "bg-white border-b border-slate-100 py-2 sm:py-2.5 lg:py-2.5 shadow-xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Perfectly Sized Logo Branding for Mobile & Desktop */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg p-0.5"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-md bg-brand-red flex items-center justify-center font-black text-white text-xs sm:text-sm lg:text-base tracking-tighter shadow-sm group-hover:bg-brand-dark-red transition-all shrink-0">
                SE
              </div>
              <div className="flex flex-col">
                <span className="font-black text-slate-900 text-xs sm:text-sm lg:text-base tracking-tight uppercase group-hover:text-brand-red transition-colors leading-none">
                  SRIVATHSA
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] lg:text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-none mt-0.5">
                  ENTERPRISES
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-0.5">
              <Link
                href="/"
                className={`px-3 py-1.5 rounded-md text-xs lg:text-[13px] font-bold tracking-wide uppercase transition-all ${
                  pathname === "/"
                    ? "text-brand-red bg-red-50/80 font-extrabold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-3 py-1.5 rounded-md text-xs lg:text-[13px] font-bold tracking-wide uppercase transition-all ${
                  pathname === "/about"
                    ? "text-brand-red bg-red-50/80 font-extrabold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                About
              </Link>

              {/* Services Dropdown Trigger */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs lg:text-[13px] font-bold tracking-wide uppercase transition-all ${
                    isServicesActive
                      ? "text-brand-red bg-red-50/80 font-extrabold"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-brand-red" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Dropdown Menu Card */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50">
                    <div className="bg-white rounded-xl border border-slate-200 shadow-xl p-2.5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-red-50/60 text-xs font-extrabold uppercase tracking-wider text-brand-red transition-colors border border-slate-100"
                      >
                        <span>All Services Overview</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <div className="h-px bg-slate-100 my-1" />

                      {serviceSubItems.map((sub) => {
                        const IconComponent = sub.icon;
                        const isActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            className={`flex items-start gap-2.5 p-2 rounded-lg transition-colors group ${
                              isActive
                                ? "bg-red-50 text-brand-red"
                                : "hover:bg-slate-50 text-slate-800"
                            }`}
                          >
                            <div className="p-1.5 rounded-md bg-slate-100 group-hover:bg-brand-red group-hover:text-white text-brand-red transition-colors mt-0.5 shrink-0">
                              <IconComponent className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                                {sub.title}
                              </div>
                              <div className="text-[11px] text-slate-500 line-clamp-1 leading-snug mt-0.5">
                                {sub.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/projects"
                className={`px-3 py-1.5 rounded-md text-xs lg:text-[13px] font-bold tracking-wide uppercase transition-all ${
                  pathname === "/projects"
                    ? "text-brand-red bg-red-50/80 font-extrabold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                Projects
              </Link>

              <Link
                href="/gallery"
                className={`px-3 py-1.5 rounded-md text-xs lg:text-[13px] font-bold tracking-wide uppercase transition-all ${
                  pathname === "/gallery"
                    ? "text-brand-red bg-red-50/80 font-extrabold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-1.5 rounded-md text-xs lg:text-[13px] font-bold tracking-wide uppercase transition-all ${
                  pathname === "/contact"
                    ? "text-brand-red bg-red-50/80 font-extrabold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Right Action Area */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={`tel:${COMPANY_INFO.contact.phoneClean}`}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-brand-red px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </a>

              <Link
                href="/get-a-quote"
                className="px-3.5 py-1.5 rounded-md bg-brand-red hover:bg-brand-dark-red text-white text-xs font-extrabold uppercase tracking-wider shadow-xs hover:shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button & Quick Action */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <Link
                href="/get-a-quote"
                className="hidden sm:inline-flex px-2.5 py-1 rounded-md bg-brand-red hover:bg-brand-dark-red text-white text-[11px] font-extrabold uppercase tracking-wider shadow-xs transition-all"
              >
                Get Quote
              </Link>

              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="p-1.5 sm:p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-900 hover:text-brand-red transition-colors active:scale-95 flex items-center justify-center shadow-xs"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

    {/* Mobile Drawer (placed outside header to avoid CSS backdrop-filter containing block constraints) */}
    <MobileMenu
      isOpen={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    />
  </>
);
};
