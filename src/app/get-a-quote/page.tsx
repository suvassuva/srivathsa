import React, { Suspense } from "react";
import { CheckCircle2, Phone, Mail } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { QuoteForm } from "@/components/QuoteForm";
import { COMPANY_INFO } from "@/data/company";

export const metadata = {
  title: "Get a Quote | Srivathsa Enterprises Bangalore",
  description:
    "Request an official quotation for signage manufacturing, interior project execution, or real estate advisory from Srivathsa Enterprises Bangalore.",
};

export default function GetAQuotePage() {
  return (
    <div className="space-y-0 bg-slate-50">
      {/* Hero */}
      <Hero
        title="Get an Official Quotation"
        subtitle="Request a detailed commercial proposal for your signage manufacturing, interior workspace, or real estate requirements in Bangalore."
        tag="Commercial Estimate"
        size="medium"
        bgImage="https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Quote Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Sidebar information */}
            <div className="space-y-6 lg:col-span-1">
              <SectionHeading
                tag="Proposal Request"
                title="Commercial Quote Submission"
                subtitle="Provide your project specs and our engineering team will respond with a breakdown."
              />

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-4 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-brand-red">
                  What Happens Next?
                </h4>
                <div className="space-y-3 text-xs text-slate-700 font-semibold">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span>Review of dimensions, materials (SS, acrylic, brass), and project scope.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span>On-site measurement inspection arranged if required across Bangalore.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span>Formal commercial quotation sent via email & WhatsApp.</span>
                  </div>
                </div>
              </div>

              {/* Direct Help */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                  Need Immediate Assistance?
                </span>
                <a
                  href={`tel:${COMPANY_INFO.contact.phoneClean}`}
                  className="flex items-center gap-3 text-sm font-bold text-slate-900 hover:text-brand-red transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  <span>{COMPANY_INFO.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="flex items-center gap-3 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors truncate"
                >
                  <Mail className="w-4 h-4 text-brand-red shrink-0" />
                  <span className="truncate">{COMPANY_INFO.contact.email}</span>
                </a>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Suspense fallback={<div className="p-8 text-slate-500">Loading form...</div>}>
                <QuoteForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
