"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface ContactFormProps {
  defaultService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultService = "Signage",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Srivathsa Enterprises,\n\nName: ${formData.name || "N/A"}\nPhone: ${formData.phone || "N/A"}\nEmail: ${formData.email || "N/A"}\nService: ${formData.service}\nMessage: ${formData.message || "Enquiry regarding project requirements"}`;
    window.open(`https://wa.me/919538111134?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="rounded-xl sm:rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 lg:p-8 shadow-md">
      {submitted ? (
        <div className="text-center py-8 space-y-5">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xl font-black text-slate-900">Enquiry Received!</h3>
            <p className="text-slate-700 text-xs sm:text-sm font-medium max-w-md mx-auto">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our team at Srivathsa Enterprises will contact you shortly at <strong className="text-slate-900">{formData.phone}</strong>.
            </p>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleWhatsAppDirect}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Send via WhatsApp Instant</span>
            </button>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", phone: "", email: "", service: "Signage", message: "" });
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs sm:text-sm font-bold border border-slate-300"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4.5 sm:space-y-5">
          {/* Header */}
          <div className="border-b border-slate-200 pb-3">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-tight block">
              Send an Enquiry
            </h3>
            <p className="text-xs sm:text-xs text-slate-600 mt-0.5 font-medium block">
              Fill in your contact details and our Bangalore team will get back to you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1">
              <label htmlFor="contact-name" className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider block">
                Your Name <span className="text-brand-red">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm outline-none transition-all font-semibold"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label htmlFor="contact-phone" className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider block">
                Phone Number <span className="text-brand-red">*</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm outline-none transition-all font-semibold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="contact-email" className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider block">
                Email Address <span className="text-brand-red">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm outline-none transition-all font-semibold"
              />
            </div>

            {/* Service Option */}
            <div className="space-y-1">
              <label htmlFor="contact-service" className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider block">
                Required Service <span className="text-brand-red">*</span>
              </label>
              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 text-xs sm:text-sm outline-none transition-all font-semibold"
              >
                <option value="Signage" className="text-slate-900 bg-white font-semibold">Signage Manufacturing</option>
                <option value="Interior Works" className="text-slate-900 bg-white font-semibold">Interior Project Works</option>
                <option value="Real Estate" className="text-slate-900 bg-white font-semibold">Real Estate Advisory</option>
                <option value="Other" className="text-slate-900 bg-white font-semibold">Other Requirement</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1">
            <label htmlFor="contact-message" className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider block">
              Message / Requirement Details <span className="text-brand-red">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your signage, interior space or property requirements..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm outline-none transition-all font-semibold resize-y"
            />
          </div>

          {/* Buttons */}
          <div className="pt-1.5 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:flex-1 py-3 px-5 rounded-lg bg-brand-red hover:bg-brand-dark-red text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-red-500/20 transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Enquiry</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="w-full sm:w-auto py-3 px-5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Direct</span>
            </button>
          </div>

          <p className="text-[11px] text-slate-500 text-center font-medium pt-0.5">
            By submitting, you agree to receive follow-up contact from {COMPANY_INFO.name}.
          </p>
        </form>
      )}
    </div>
  );
};
