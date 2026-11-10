import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, ShieldCheck, Database, ExternalLink } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { COMPANY_CONFIG } from '../config/company';
import { SERVICES_DATA } from '../data/servicesData';
import InquiryViewerModal from './InquiryViewerModal';

export default function Footer({ onNavigate }) {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  const handleNav = (path) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const industriesList = [
    'Manufacturing & Engineering',
    'E-commerce & Quick Commerce',
    'FMCG & Consumer Goods',
    'Automotive & Auto Components',
    'Retail & Wholesale Distribution',
    'Electronics & Consumer Durables',
    'Food & Beverage (Ambient)',
  ];

  return (
    <>
      <footer className="bg-[#07101E] text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
            
            {/* Column 1: Brand & Tagline */}
            <div className="lg:col-span-4 space-y-4">
              <BrandLogo variant="light" showTagline={true} />
              
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
                DCR Logistics is an established supply chain and warehousing partner based in Attibele, Bangalore. We engineer dependable 3PL, warehousing, C&F, and transport operations to keep Indian businesses moving with speed and security.
              </p>

              {/* Tagline highlight pill */}
              <div className="inline-block p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange-400">
                  {COMPANY_CONFIG.tagline}
                </span>
              </div>

              {/* WhatsApp direct connect button */}
              <div className="pt-2">
                <a
                  href={COMPANY_CONFIG.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-lg shadow-emerald-900/30"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2 text-xs">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Services Overview', path: '/services' },
                  { name: 'Industries We Serve', path: '/industries' },
                  { name: 'Our Network (South India)', path: '/network' },
                  { name: 'Contact & Inquiry', path: '/contact' },
                  { name: 'Request Quotation', path: '/quote' },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNav(item.path)}
                      className="hover:text-orange-400 transition text-left cursor-pointer"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: All 7 Services */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider">
                Core Logistics Verticals
              </h4>
              <ul className="space-y-2 text-xs">
                {SERVICES_DATA.map((srv) => (
                  <li key={srv.id}>
                    <button
                      onClick={() => handleNav(`/services/${srv.id}`)}
                      className="hover:text-orange-400 transition text-left text-slate-400 hover:text-white flex items-center gap-1 group cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-orange-500 transition" />
                      <span>{srv.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Official Contact & Location */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider">
                Attibele Hub & Office
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">{COMPANY_CONFIG.name}</strong>
                    <span className="text-slate-400">{COMPANY_CONFIG.address.fullFormatted}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[10px]">Commercial Dispatch:</span>
                    <a
                      href={`tel:${COMPANY_CONFIG.phone}`}
                      className="text-white font-mono font-bold hover:text-orange-400 transition"
                    >
                      {COMPANY_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-slate-500 block text-[10px]">Official Inquiries:</span>
                    <a
                      href="mailto:info@dcrlogistics.in"
                      className="text-white font-mono hover:text-orange-400 transition block text-xs"
                    >
                      info@dcrlogistics.in
                    </a>
                    <a
                      href="mailto:dhruvanth@dcrlogistics.in"
                      className="text-white font-mono hover:text-orange-400 transition block text-xs"
                    >
                      dhruvanth@dcrlogistics.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_CONFIG.geo.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} {COMPANY_CONFIG.name}. All Rights Reserved.
              <span className="ml-2 text-slate-600">| {COMPANY_CONFIG.tagline}</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-slate-600">Attibele, Bangalore, Karnataka – 562107</span>

              {/* Lead Management Tool Trigger for owner/review */}
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-orange-400 hover:border-orange-500/40 text-[11px] transition cursor-pointer"
                title="View locally recorded customer enquiries & quotes"
              >
                <Database className="w-3 h-3" />
                <span>Enquiries Database</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Inquiry storage viewer drawer */}
      <InquiryViewerModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </>
  );
}

