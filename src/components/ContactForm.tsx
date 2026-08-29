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
    <div className="rounded-2xl bg-white border border-slate-300 p-6 sm:p-8 md:p-10 shadow-xl">
      {submitted ? (
        <div className="text-center py-10 space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-900">Enquiry Received!</h3>
            <p className="text-slate-700 text-sm font-medium max-w-md mx-auto">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our team at Srivathsa Enterprises will contact you shortly at <strong className="text-slate-900">{formData.phone}</strong>.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleWhatsAppDirect}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Send via WhatsApp Instant</span>
            </button>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", phone: "", email: "", service: "Signage", message: "" });
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-bold border border-slate-300"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Header */}
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight block">
              Send an Enquiry
            </h3>
            <p className="text-sm text-slate-700 mt-1 font-semibold block">
              Fill in your contact details and our Bangalore team will get back to you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-xs font-black text-slate-900 uppercase tracking-wider block">
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
                className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border-2 border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all font-semibold"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label htmlFor="contact-phone" className="text-xs font-black text-slate-900 uppercase tracking-wider block">
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
                className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border-2 border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all font-semibold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-xs font-black text-slate-900 uppercase tracking-wider block">
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
                className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border-2 border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all font-semibold"
              />
            </div>

            {/* Service Option */}
            <div className="space-y-1.5">
              <label htmlFor="contact-service" className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                Required Service <span className="text-brand-red">*</span>
              </label>
              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border-2 border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 text-sm outline-none transition-all font-semibold"
              >
                <option value="Signage" className="text-slate-900 bg-white font-semibold">Signage Manufacturing</option>
                <option value="Interior Works" className="text-slate-900 bg-white font-semibold">Interior Project Works</option>
                <option value="Real Estate" className="text-slate-900 bg-white font-semibold">Real Estate Advisory</option>
                <option value="Other" className="text-slate-900 bg-white font-semibold">Other Requirement</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-xs font-black text-slate-900 uppercase tracking-wider block">
              Message / Requirement Details <span className="text-brand-red">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your signage, interior space or property requirements..."
              className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border-2 border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all font-semibold resize-y"
            />
          </div>

          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-brand-red hover:bg-brand-dark-red text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="w-full sm:w-auto py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us Direct</span>
            </button>
          </div>

          <p className="text-xs text-slate-600 text-center font-bold pt-1">
            By submitting, you agree to receive follow-up contact from {COMPANY_INFO.name}.
          </p>
        </form>
      )}
    </div>
  );
};
