import React from 'react';
import { 
  Factory, ShoppingCart, Store, Car, Building2, Tv, Coffee, 
  ArrowRight, CheckCircle2, ShieldCheck, Warehouse, Truck 
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { useQuoteModal } from '../context/QuoteModalContext';
import { COMPANY_CONFIG } from '../config/company';

export default function IndustriesPage({ onNavigate }) {
  const { openQuoteModal } = useQuoteModal();

  const iconMap = {
    Factory: Factory,
    ShoppingCart: ShoppingCart,
    Store: Store,
    Car: Car,
    Building2: Building2,
    Tv: Tv,
    Coffee: Coffee
  };

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* Industries Hero Header */}
      <section className="bg-[#07101E] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
            alt="Industrial and Commercial Sectors"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07101E] via-[#07101E]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
            Sector Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Industries We Serve
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every sector has unique supply chain constraints, storage requirements, and distribution timelines. Discover how DCR Logistics provides tailored infrastructure for 7 essential commercial industries.
          </p>
        </div>
      </section>

      {/* Industries Detailed Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {INDUSTRIES_DATA.map((ind, index) => {
            const IconComp = iconMap[ind.icon] || Factory;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={ind.id}
                id={ind.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Industry Image Column */}
                  <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-900 ${isReversed ? 'lg:order-2' : ''}`}>
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-slate-900/90 text-orange-400 text-xs font-bold border border-slate-700">
                      {ind.badge}
                    </span>

                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg text-slate-900 flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-orange-500 text-white">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{ind.title}</h4>
                        <span className="text-[11px] text-slate-500">Tailored Hub Storage & Dispatch</span>
                      </div>
                    </div>
                  </div>

                  {/* Industry Details Column */}
                  <div className={`lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-extrabold uppercase tracking-wider">
                        Industry 0{index + 1}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        {ind.title}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {ind.summary}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                        {/* Supply Chain Challenges */}
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-amber-500" />
                            Industry Supply Chain Challenges
                          </h4>
                          <ul className="space-y-2 text-xs text-slate-600">
                            {ind.challenges.map((ch, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                                <span>{ch}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* DCR Tailored Logistics Solutions */}
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            DCR Strategic Solutions
                          </h4>
                          <ul className="space-y-2 text-xs text-slate-600">
                            {ind.solutions.map((sol, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                                <span>{sol}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Suitable DCR Services */}
                      <div className="pt-4 border-t border-slate-100">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                          Recommended Service Vertical Modules:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {ind.suitableServices.map((srvName, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
                            >
                              {srvName}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <span className="text-xs text-slate-500">
                        Operational support available directly from our Attibele facility.
                      </span>

                      <button
                        onClick={() => openQuoteModal(ind.title)}
                        className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Enquire for {ind.shortTitle}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 bg-[#07101E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Have Specific Handling or Storage Constraints?
          </h3>
          <p className="text-sm sm:text-base text-slate-300">
            From pallet density requirements to custom barcode compliance and dedicated vehicle scheduling, we build bespoke operational workflows for your industry.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openQuoteModal('Industry Custom Logistics Consultation')}
              className="px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-xl transition cursor-pointer"
            >
              Consult with Our Operations Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

