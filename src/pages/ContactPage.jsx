import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, 
  Clock, ShieldCheck, ExternalLink, HelpCircle 
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SERVICES_DATA } from '../data/servicesData';
import { saveInquiry } from '../utils/inquiryStorage';

export default function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceRequired: '',
    warehouseRequirement: '',
    message: '',
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
      setErrorMsg('Please enter your Name and Phone Number.');
      return;
    }

    setSubmitting(true);
    try {
      const result = await saveInquiry(formData, 'contact');
      setSubmittedData(result);
    } catch (err) {
      setErrorMsg('Failed to process message. Please call our dispatch desk directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* Contact Hero */}
      <section className="bg-[#07101E] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="DCR Logistics Attibele Operations"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07101E] via-[#07101E]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
            Direct Communications
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Contact DCR Logistics
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Reach out to our warehouse operations and commercial team at Attibele, Bangalore. We're here to answer inquiries, arrange site visits, and coordinate rapid quotations.
          </p>
        </div>
      </section>

      {/* Main Contact Section: Info + Functional Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-extrabold text-orange-600 uppercase tracking-wider">
                  Operational Facility
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                  Connect Directly With Our Team
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Whether you need warehouse storage space, C&F representation in Karnataka, or express freight rates across South India, our team responds swiftly.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                {/* Address Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-50 text-orange-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <span className="text-slate-400 block text-[11px] font-bold uppercase">Warehouse & Registered Hub</span>
                    <strong className="text-slate-900 block font-bold text-sm mt-0.5">
                      {COMPANY_CONFIG.name}
                    </strong>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      {COMPANY_CONFIG.address.fullFormatted}
                    </p>
                    <a
                      href={COMPANY_CONFIG.geo.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-orange-600 font-bold text-xs mt-2 hover:underline"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-50 text-orange-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <span className="text-slate-400 block text-[11px] font-bold uppercase">Commercial Dispatch Phone</span>
                    <a
                      href={`tel:${COMPANY_CONFIG.phone}`}
                      className="text-base sm:text-lg font-black text-slate-900 hover:text-orange-600 font-mono transition block mt-0.5"
                    >
                      {COMPANY_CONFIG.phoneDisplay}
                    </a>
                    <p className="text-slate-500 text-xs mt-1">
                      Direct line to operations desk & fleet dispatch
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-50 text-orange-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm space-y-1.5">
                    <span className="text-slate-400 block text-[11px] font-bold uppercase">Official Email Correspondence</span>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-semibold block">General & Commercial Inquiries:</span>
                      <a
                        href="mailto:info@dcrlogistics.in"
                        className="text-sm font-bold text-slate-900 hover:text-orange-600 font-mono transition block"
                      >
                        info@dcrlogistics.in
                      </a>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-semibold block">Management Desk:</span>
                      <a
                        href="mailto:dhruvanth@dcrlogistics.in"
                        className="text-sm font-bold text-slate-900 hover:text-orange-600 font-mono transition block"
                      >
                        dhruvanth@dcrlogistics.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Quick Connect Button */}
                <div className="pt-2">
                  <a
                    href={COMPANY_CONFIG.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Chat With Operations on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Operating Hours Box */}
              <div className="p-5 rounded-2xl bg-[#0B192C] text-white border border-slate-800 text-xs space-y-2">
                <div className="flex items-center gap-2 text-orange-400 font-bold uppercase text-[11px]">
                  <Clock className="w-4 h-4" />
                  <span>Operations Schedule</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 py-1">
                  <span className="text-slate-400">Warehouse Dock & Dispatch:</span>
                  <span className="font-semibold text-white">24 Hours / 7 Days</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Commercial Office Desk:</span>
                  <span className="font-semibold text-white">Mon – Sat: 9:00 AM – 7:00 PM</span>
                </div>
              </div>
            </div>

            {/* Right: Functional Contact & Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
                
                {submittedData ? (
                  <div className="py-8 text-center space-y-5">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                        Enquiry Successfully Registered!
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                        Thank you for reaching out, <strong className="text-slate-900">{formData.name}</strong>. Your enquiry reference number is:
                      </p>
                      <div className="inline-block mt-3 px-4 py-2 bg-slate-100 border border-slate-300 rounded-xl font-mono text-sm font-bold text-slate-800">
                        {submittedData.id}
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs space-y-2 max-w-md mx-auto text-slate-700">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Service:</span>
                        <span className="font-semibold text-slate-900">{formData.serviceRequired || 'General Logistics'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Phone:</span>
                        <span className="font-semibold text-slate-900">{formData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Warehouse Hub:</span>
                        <span className="font-semibold text-slate-900">Attibele, Bangalore</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Your submission is safely recorded in our lead management system. Our team will get in touch shortly.
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={() => {
                          setSubmittedData(null);
                          setFormData({
                            name: '',
                            company: '',
                            phone: '',
                            email: '',
                            serviceRequired: '',
                            warehouseRequirement: '',
                            message: '',
                          });
                        }}
                        className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
                      >
                        Send Another Message
                      </button>
                      <a
                        href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=Hi%20DCR%20Logistics%2C%20I%20sent%20an%20enquiry%20Ref%20${submittedData.id}.%20Can%20we%20connect%3F`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                      >
                        Follow up on WhatsApp
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <span className="text-xs font-extrabold text-orange-600 uppercase tracking-wider">
                        Send An Enquiry
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                        How Can DCR Logistics Support Your Operations?
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Fill out your requirements below and our commercial manager will respond promptly.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Full Name <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                        />
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Organization / Brand name"
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
                          placeholder="+91 87928 XXXXX"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
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
                          placeholder="name@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                        />
                      </div>
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Service Required <span className="text-orange-500">*</span>
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm bg-white transition"
                      >
                        <option value="">Select a service category</option>
                        {SERVICES_DATA.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="End-to-End Integrated 3PL + Transport">End-to-End Integrated 3PL + Transport</option>
                        <option value="General Warehouse Consultation">General Warehouse Consultation</option>
                      </select>
                    </div>

                    {/* Warehouse or Logistics Requirement */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Warehouse or Logistics Requirement (Area, SKU, Pallets, or Volume)
                      </label>
                      <input
                        type="text"
                        name="warehouseRequirement"
                        value={formData.warehouseRequirement}
                        onChange={handleChange}
                        placeholder="e.g. 10,000 sq ft or daily 100 cartons dispatch to Tamil Nadu"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Message / Additional Information
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please share any other details about your timeline, special storage requirements, or locations..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm transition resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                      >
                        {submitting ? (
                          <span>Delivering Enquiry...</span>
                        ) : (
                          <>
                            <span>Submit Enquiry</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        Stored in DCR Lead Management • Fully Confidential
                      </span>
                      <span>Response SLA: &lt; 4 Hours</span>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Integration Section (Attibele Location) */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold text-orange-600 uppercase tracking-wider">
                Geographic Verification
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Our Warehouse Location: Attibele, Bangalore
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Pin Code: 562107 | Strategic Border Hub | Karnataka–Tamil Nadu Border
              </p>
            </div>

            <a
              href={COMPANY_CONFIG.geo.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl h-96 sm:h-[450px] relative bg-slate-100">
            <iframe
              title="DCR Logistics Attibele Bangalore Location"
              src={COMPANY_CONFIG.geo.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

