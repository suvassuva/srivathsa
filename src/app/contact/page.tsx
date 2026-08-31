import React from "react";
import { Phone, Mail, MapPin, UserCheck, MessageSquare } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CallButton } from "@/components/CallButton";
import { COMPANY_INFO } from "@/data/company";

export const metadata = {
  title: "Contact Us | Srivathsa Enterprises Bangalore",
  description:
    "Get in touch with Srivathsa Enterprises in Bangalore. Call +91 95381 11134 or email srivathsaenterprises99@gmail.com for signage, interior, and property inquiries.",
};

export default function ContactPage() {
  return (
    <div className="space-y-0 bg-slate-50">
      {/* Hero */}
      <Hero
        title="Contact Srivathsa Enterprises"
        subtitle="Connect directly with our Bangalore corporate office for signage manufacturing, interior project execution, or real estate advisory."
        tag="Get in Touch"
        size="medium"
        bgImage="/commercial-building-illuminated.jpeg"
      />

      {/* Main Contact Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Col: Contact Info & Leadership Card */}
            <div className="space-y-8">
              <SectionHeading
                tag="Direct Channel"
                title="Bangalore Office Details"
                subtitle="Reach out via call, WhatsApp message, email, or by filling out the enquiry form."
              />

              {/* Leadership & Verified Box */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-brand-red block">
                      Leadership Contact
                    </span>
                    <h3 className="text-xl font-black text-slate-900">
                      {COMPANY_INFO.ceo.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-semibold">
                      Founder & CEO • Srivathsa Enterprises
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-red-50 text-brand-red border border-red-100">
                    <UserCheck className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Direct inquiry line for signage architectural quotes, commercial interior site measurements, and Bangalore property advisories.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY_INFO.contact.phoneClean}`}
                  className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-2 hover:border-brand-red transition-all group block shadow-sm"
                >
                  <div className="p-2.5 rounded-xl bg-white text-brand-red w-fit border border-slate-200 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                    Phone / Call Direct
                  </span>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                    {COMPANY_INFO.contact.phone}
                  </h4>
                </a>

                {/* WhatsApp */}
                <a
                  href={COMPANY_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-2 hover:border-[#25D366] transition-all group block shadow-sm"
                >
                  <div className="p-2.5 rounded-xl bg-white text-[#25D366] w-fit border border-slate-200 shadow-sm">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                    WhatsApp Chat
                  </span>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-[#25D366] transition-colors">
                    +91 95381 11134
                  </h4>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-2 hover:border-brand-red transition-all group block sm:col-span-2 shadow-sm"
                >
                  <div className="p-2.5 rounded-xl bg-white text-brand-red w-fit border border-slate-200 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                    Corporate Email
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-red transition-colors break-all">
                    {COMPANY_INFO.contact.email}
                  </h4>
                </a>

                {/* Location */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-2 sm:col-span-2 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white text-brand-red border border-slate-200 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                        Headquarters Location
                      </span>
                      <h4 className="text-base font-bold text-slate-900">
                        {COMPANY_INFO.contact.location}
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 font-medium pt-1">
                    Bangalore – 560075, Karnataka, India
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <CallButton text="Call +91 95381 11134" variant="primary" className="w-full sm:flex-1" />
                <WhatsAppButton text="WhatsApp Chat" className="w-full sm:flex-1" />
              </div>
            </div>

            {/* Right Col: Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
