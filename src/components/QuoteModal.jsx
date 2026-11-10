import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Phone, Mail, Building, MapPin, Calendar, FileText, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { COMPANY_CONFIG } from '../config/company';
import { SERVICES_DATA } from '../data/servicesData';
import { saveInquiry } from '../utils/inquiryStorage';

export default function QuoteModal() {
  const { isOpen, closeQuoteModal, initialService } = useQuoteModal();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    space: '',
    location: 'Bangalore / South India',
    startDate: '',
    requirements: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
    if (!isOpen) {
      setSubmittedData(null);
      setErrorMsg('');
    }
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and phone number so our logistics team can contact you.');
      return;
    }

    setSubmitting(true);
    try {
      const result = await saveInquiry(formData, 'quote');
      setSubmittedData(result);
    } catch (err) {
      setErrorMsg('An unexpected error occurred while saving your request. Please try again or reach out by phone.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#0B192C] text-white px-6 py-5 sm:px-8 flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">
              DCR Logistics • Direct Enquiry
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5">
              Request a Commercial Quote
            </h3>
          </div>
          <button
            onClick={closeQuoteModal}
            className="p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submittedData ? (
            /* Success confirmation screen */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                  Quotation Request Received!
                </h4>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your requirement has been registered in our system under Reference ID:
                </p>
                <div className="inline-block mt-3 px-4 py-2 bg-slate-100 border border-slate-300 rounded-xl font-mono text-sm font-bold text-slate-800 tracking-wider">
                  {submittedData.id}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs space-y-2 max-w-md mx-auto text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-900">{formData.service || 'Comprehensive Logistics'}</span>
                </div>
                {formData.company && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Company:</span>
                    <span className="font-semibold text-slate-900">{formData.company}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-semibold text-slate-900">{formData.phone}</span>
                </div>
                {formData.space && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Space Requirement:</span>
                    <span className="font-semibold text-slate-900">{formData.space}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-500">Facility Location:</span>
                  <span className="font-semibold text-slate-900">Attibele Hub, Bangalore</span>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                Our operations team at Attibele will review your specifications and contact you within 2-4 business hours.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=Hi%20DCR%20Logistics%2C%20I%20just%20submitted%20Quote%20Request%20${submittedData.id}%20for%20${encodeURIComponent(formData.service || 'Logistics')}.%20Can%20we%20discuss%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition"
                >
                  Connect on WhatsApp Now
                </a>
                <button
                  onClick={closeQuoteModal}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Main Quotation Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Apex Industrial Solutions"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone Number <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                  />
                </div>
              </div>

              {/* Service Required */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Required Service <span className="text-orange-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm bg-white transition"
                >
                  <option value="">Select a primary service</option>
                  {SERVICES_DATA.map(s => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Integrated End-to-End Package">Integrated End-to-End Package</option>
                  <option value="Other Custom Requirement">Other Custom Requirement</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Required Warehouse Space */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Required Warehouse Space (If applicable)
                  </label>
                  <input
                    type="text"
                    name="space"
                    value={formData.space}
                    onChange={handleChange}
                    placeholder="e.g. 5,000 sq ft or 200 Pallets"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                  />
                </div>

                {/* Expected Start Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Expected Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Target Service Location / Destination
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Attibele Hub / Bangalore / Chennai Corridor"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                />
              </div>

              {/* Additional Requirements */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Additional Requirements / Specifics
                </label>
                <textarea
                  name="requirements"
                  rows="3"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Tell us about your cargo type, SKU count, throughput velocity, racking needs, or transit schedules..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-base shadow-lg shadow-orange-500/25 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {submitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <span>Submit Quotation Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Direct warehouse inquiry • Confidential commercial terms
                </span>
                <span>Attibele, Bangalore</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

