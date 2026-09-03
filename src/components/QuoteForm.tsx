"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send, MessageSquare, Calculator } from "lucide-react";

export const QuoteForm: React.FC = () => {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "Signage";
  const initialDetails = searchParams.get("details") || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: initialService,
    location: "Bangalore",
    projectDetails: initialDetails,
    budget: "Not Specified",
    timeline: "Standard (1-2 Weeks)",
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

  const handleWhatsAppSend = () => {
    const text = `Hello Srivathsa Enterprises,\n\n*REQUEST FOR QUOTATION*\n\nName: ${formData.name || "N/A"}\nCompany: ${formData.company || "N/A"}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nLocation: ${formData.location}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.projectDetails}`;
    window.open(`https://wa.me/919538111134?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="rounded-2xl bg-white border border-slate-300 p-6 sm:p-10 shadow-xl">
      {submitted ? (
        <div className="text-center py-12 space-y-6 max-w-lg mx-auto">
          <div className="w-20 h-20 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto border border-brand-red/30">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
              Quotation Request Sent!
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed font-semibold">
              Thank you <strong className="text-slate-900">{formData.name}</strong>. We have registered your quotation request for <strong className="text-brand-red">{formData.service}</strong>. Our team will review your specifications and contact you shortly at <strong className="text-slate-900">{formData.phone}</strong>.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleWhatsAppSend}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Forward Quote to WhatsApp</span>
            </button>

            <button
              onClick={() => setSubmitted(false)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-bold border border-slate-300"
            >
              Edit & Submit Another
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 shadow-xs">
              <Calculator className="w-6 h-6 text-brand-red" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight block">
                Get an Official Quotation
              </h3>
              <p className="text-xs text-slate-700 font-semibold block">
                Specify your signage, interior or property details for an accurate commercial estimate.
              </p>
            </div>
          </div>

          {/* Form grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="quote-name" className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                Full Name <span className="text-brand-red">*</span>
              </label>
              <input
                id="quote-name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Vikram Gadaputi"
                className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border-2 border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all font-semibold"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label htmlFor="quote-phone" className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                Phone Number <span className="text-brand-red">*</span>
              </label>
              <input
                id="quote-phone"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 95381 11134"
                className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border-2 border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all font-semibold"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="quote-email" className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                Email Address <span className="text-brand-red">*</span>
              </label>
              <input
                id="quote-email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border-2 border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all font-semibold"
              />
            </div>

            {/* Company */}
            <div className="space-y-1.5">
              <label htmlFor="quote-company" className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                Company / Organization
              </label>
              <input
                id="quote-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Srivathsa Tech Park"
                className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border-2 border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all font-semibold"
              />
            </div>

            {/* Service */}
            <div className="space-y-1.5">
              <label htmlFor="quote-service" className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                Service Vertical <span className="text-brand-red">*</span>
              </label>
              <select
                id="quote-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border-2 border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 text-sm outline-none transition-all font-semibold"
              >
                <option value="Signage" className="text-slate-900 bg-white font-semibold">Signage Manufacturing</option>
                <option value="Interior Works" className="text-slate-900 bg-white font-semibold">Interior Project Works</option>
                <option value="Real Estate" className="text-slate-900 bg-white font-semibold">Real Estate Advisory</option>
                <option value="Other" className="text-slate-900 bg-white font-semibold">Other Custom Service</option>
              </select>
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <label htmlFor="quote-location" className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                Project / Property Location <span className="text-brand-red">*</span>
              </label>
              <input
                id="quote-location"
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Whitefield, Bangalore"
                className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border-2 border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all font-semibold"
              />
            </div>

            {/* Budget Range */}
            <div className="space-y-1.5">
              <label htmlFor="quote-budget" className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                Estimated Budget Range
              </label>
              <select
                id="quote-budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border-2 border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 text-sm outline-none transition-all font-semibold"
              >
                <option value="Not Specified" className="text-slate-900 bg-white font-semibold">Prefer Not to Specify</option>
                <option value="Under ₹50,000" className="text-slate-900 bg-white font-semibold">Under ₹50,000</option>
                <option value="₹50,000 - ₹2 Lakhs" className="text-slate-900 bg-white font-semibold">₹50,000 - ₹2 Lakhs</option>
                <option value="₹2 Lakhs - ₹10 Lakhs" className="text-slate-900 bg-white font-semibold">₹2 Lakhs - ₹10 Lakhs</option>
                <option value="Above ₹10 Lakhs" className="text-slate-900 bg-white font-semibold">Above ₹10 Lakhs (Commercial)</option>
              </select>
            </div>

            {/* Timeline */}
            <div className="space-y-1.5">
              <label htmlFor="quote-timeline" className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                Desired Timeline
              </label>
              <select
                id="quote-timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border-2 border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 text-sm outline-none transition-all font-semibold"
              >
                <option value="Urgent (1-3 Days)" className="text-slate-900 bg-white font-semibold">Urgent (1-3 Days)</option>
                <option value="Standard (1-2 Weeks)" className="text-slate-900 bg-white font-semibold">Standard (1-2 Weeks)</option>
                <option value="1 Month" className="text-slate-900 bg-white font-semibold">1 Month</option>
                <option value="Flexible" className="text-slate-900 bg-white font-semibold">Flexible Planning</option>
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-1.5">
            <label htmlFor="quote-projectDetails" className="text-xs font-black text-slate-900 uppercase tracking-wider block">
              Detailed Scope & Specifications <span className="text-brand-red">*</span>
            </label>
            <textarea
              id="quote-projectDetails"
              name="projectDetails"
              required
              rows={4}
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Specify signage dimensions, materials (SS, acrylic, brass), interior sq. ft., or real estate requirements..."
              className="w-full px-4 py-3.5 rounded-lg bg-slate-50 border-2 border-slate-300 focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-red-100 text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all font-semibold resize-y"
            />
          </div>

          {/* Actions */}
          <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:flex-1 py-4 px-8 rounded-xl bg-brand-red hover:bg-brand-dark-red text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Generating Quote Request...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request Official Quotation</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="w-full sm:w-auto py-4 px-8 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Submit via WhatsApp</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
