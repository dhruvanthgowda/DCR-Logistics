import React, { useState } from 'react';
import { 
  Send, CheckCircle2, ShieldCheck, Warehouse, Truck, 
  Clock, MapPin, Phone, Mail, ArrowRight, MessageCircle 
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SERVICES_DATA } from '../data/servicesData';
import { saveInquiry } from '../utils/inquiryStorage';

export default function QuotePage({ onNavigate }) {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and phone number so our team can provide your quote.');
      return;
    }

    setSubmitting(true);
    try {
      const result = await saveInquiry(formData, 'quote');
      setSubmittedData(result);
    } catch (err) {
      setErrorMsg('Could not process quotation. Please contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* Hero */}
      <section className="bg-[#07101E] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
            Commercial Quotation Desk
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Request a Warehousing & Logistics Quote
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Get transparent, competitive rates for dedicated or shared warehouse space in Attibele, inventory management, C&F representation, or South India freight transit.
          </p>
        </div>
      </section>

      {/* Main Quote Form & Benefits */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-2xl">
            
            {submittedData ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                    Quotation Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-lg mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your quotation enquiry has been logged into the DCR Logistics commercial system.
                  </p>
                  <div className="inline-block mt-4 px-5 py-2.5 bg-slate-100 border border-slate-300 rounded-xl font-mono text-base font-bold text-slate-900 tracking-wider">
                    Reference ID: {submittedData.id}
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Selected Service:</span>
                    <span className="font-bold text-slate-900">{formData.service || 'Comprehensive Logistics'}</span>
                  </div>
                  {formData.company && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Company:</span>
                      <span className="font-semibold text-slate-900">{formData.company}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-500">Phone:</span>
                    <span className="font-mono font-bold text-slate-900">{formData.phone}</span>
                  </div>
                  {formData.space && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Required Space:</span>
                      <span className="font-semibold text-slate-900">{formData.space}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-500">Primary Hub:</span>
                    <span className="font-semibold text-slate-900">Attibele, Bangalore</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a
                    href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=Hi%20DCR%20Logistics%2C%20I%20just%20submitted%20Quote%20Request%20${submittedData.id}%20for%20${encodeURIComponent(formData.service || 'Logistics')}.%20Can%20we%20discuss%3F`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Discuss Instantly on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmittedData(null);
                      setFormData({
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
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Commercial Information
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                    Tell Us About Your Supply Chain Requirements
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Our team provides customized rate cards with no hidden commitments.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
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
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Industrial Solutions"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                    />
                  </div>

                  {/* Phone */}
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
                      placeholder="+91 87928 86452"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="commercial@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                    />
                  </div>
                </div>

                {/* Service Required */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Required Service Category <span className="text-orange-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm bg-white transition"
                  >
                    <option value="">Select a service</option>
                    {SERVICES_DATA.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Integrated 3PL + Warehouse + Transport">Integrated 3PL + Warehouse + Transport</option>
                    <option value="Other Custom Operational Requirement">Other Custom Operational Requirement</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Space requirement */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Required Warehouse Space (If applicable)
                    </label>
                    <input
                      type="text"
                      name="space"
                      value={formData.space}
                      onChange={handleChange}
                      placeholder="e.g. 5,000 sq ft or 150 pallet bays"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                    />
                  </div>

                  {/* Expected start date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Expected Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Target Operational Location / Corridors
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Attibele Hub / Bangalore Metro / Hosur / Chennai transit"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                  />
                </div>

                {/* Additional requirements */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Additional Operational Requirements / Specifications
                  </label>
                  <textarea
                    name="requirements"
                    rows="4"
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Detail your product characteristics, weight, temperature needs, special handling, or dispatch frequency..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-base shadow-xl shadow-orange-500/30 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {submitting ? (
                      <span>Recording Quotation Request...</span>
                    ) : (
                      <>
                        <span>Submit Quotation Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Commercial confidentiality guaranteed • Fast Attibele response
                  </span>
                  <span>Direct Operations Desk</span>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}

