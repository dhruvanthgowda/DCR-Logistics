import React, { useState, useEffect } from 'react';
import { 
  Boxes, Warehouse, FileCheck, ClipboardList, RotateCcw, 
  Truck, PackageCheck, CheckCircle2, ArrowRight, ShieldCheck, 
  ExternalLink, Sparkles 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { useQuoteModal } from '../context/QuoteModalContext';
import { COMPANY_CONFIG } from '../config/company';

export default function ServicesPage({ onNavigate, initialServiceId }) {
  const { openQuoteModal } = useQuoteModal();
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId || SERVICES_DATA[0].id);

  const iconMap = {
    Boxes: Boxes,
    Warehouse: Warehouse,
    FileCheck: FileCheck,
    ClipboardList: ClipboardList,
    RotateCcw: RotateCcw,
    Truck: Truck,
    PackageCheck: PackageCheck,
  };

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
      // scroll to service detail container
      const el = document.getElementById(initialServiceId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialServiceId]);

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* Services Hero Header */}
      <section className="bg-[#07101E] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt="DCR Logistics Services Hub"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07101E] via-[#07101E]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
            Operational Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Comprehensive Logistics & Warehousing Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From Grade-A warehousing in Attibele to South India freight distribution, C&F agency, and inventory governance, explore our 7 core service categories.
          </p>
        </div>
      </section>

      {/* Quick Jump Horizontal Navigation */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline">
            Quick Jump:
          </span>
          {SERVICES_DATA.map((srv) => (
            <a
              key={srv.id}
              href={`#${srv.id}`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedServiceId(srv.id);
                document.getElementById(srv.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                selectedServiceId === srv.id
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {srv.shortTitle}
            </a>
          ))}
        </div>
      </div>

      {/* Detailed Services Vertical Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {SERVICES_DATA.map((srv, index) => {
            const IconComp = iconMap[srv.icon] || Boxes;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={srv.id}
                id={srv.id}
                className="scroll-mt-32 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-slate-900 ${isReversed ? 'lg:order-2' : ''}`}>
                    <img
                      src={srv.heroImage}
                      alt={srv.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-slate-900/90 text-orange-400 font-mono text-xs font-bold border border-slate-700">
                      Service 0{index + 1}
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg text-slate-900 text-xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-orange-500 text-white">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <strong className="block text-slate-900 font-bold">{srv.shortTitle}</strong>
                          <span className="text-slate-500 text-[11px]">{srv.tag}</span>
                        </div>
                      </div>
                      <span className="font-semibold text-orange-600 text-[11px]">Attibele Hub</span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-extrabold uppercase tracking-wider">
                        {srv.tag}
                      </div>
                      
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        {srv.title}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {srv.description}
                      </p>

                      {/* 2-Column Key Activities & Business Benefits */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                        {/* Key Activities */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-orange-500" />
                            Key Operational Activities
                          </h4>
                          <ul className="space-y-2 text-xs text-slate-600">
                            {srv.keyActivities.map((act, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                                <span>{act}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Business Benefits */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            Direct Business Benefits
                          </h4>
                          <ul className="space-y-2 text-xs text-slate-600">
                            {srv.businessBenefits.map((ben, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                                <span>{ben}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Service Specifications Specs */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
                        {srv.specs.map((sp, i) => (
                          <div key={i} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block">{sp.label}</span>
                            <span className="text-xs font-bold text-slate-800 block mt-0.5">{sp.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <div className="text-xs text-slate-500">
                        📍 Executed at our Attibele facility with South India distribution.
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => openQuoteModal(srv.title)}
                          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md shadow-orange-500/20 transition flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Enquire for {srv.shortTitle}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="py-16 bg-[#0B192C] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Need Multiple Logistics Capabilities Combined?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            We regularly orchestrate customized end-to-end combinations spanning warehousing, C&F agency, value-added packaging, and multi-tier transport for clients.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openQuoteModal('Integrated Multi-Service Logistics')}
              className="px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition cursor-pointer"
            >
              Request Custom Multi-Service Proposal
            </button>
            <a
              href={`tel:${COMPANY_CONFIG.phone}`}
              className="px-6 py-3.5 rounded-xl border border-slate-700 text-slate-200 hover:text-white font-bold text-sm transition"
            >
              Call Dispatch: {COMPANY_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

