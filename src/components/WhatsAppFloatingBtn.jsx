import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export default function WhatsAppFloatingBtn() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=Hello%20DCR%20Logistics%2C%20I%20would%20like%20to%20inquire%20about%20your%20warehousing%20and%20supply%20chain%20services%20in%20Attibele%2C%20Bangalore.`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick message tooltip */}
      {showTooltip && (
        <div className="mb-3 p-3.5 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 text-xs w-64 animate-fadeIn relative">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-slate-800">DCR Logistics Dispatch</span>
          </div>
          <p className="text-slate-600 leading-tight">
            Need urgent warehouse space or transport rates in Bangalore? Chat directly with our Attibele operations desk!
          </p>
        </div>
      )}

      {/* Main Action Pill */}
      <div className="flex items-center gap-2">
        {/* Direct Call Button (Mobile & Desktop) */}
        <a
          href={`tel:${COMPANY_CONFIG.phone}`}
          className="hidden sm:flex items-center gap-2 px-3.5 py-3 rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 text-xs font-bold transition-all border border-slate-700"
          title="Call DCR Logistics directly"
        >
          <Phone className="w-3.5 h-3.5 text-orange-400" />
          <span>{COMPANY_CONFIG.phoneDisplay}</span>
        </a>

        {/* WhatsApp Icon Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-green-600/30 transition-transform duration-300 hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp with DCR Logistics"
        >
          <MessageCircle className="w-7 h-7 fill-white stroke-none" />
        </a>
      </div>
    </div>
  );
}

