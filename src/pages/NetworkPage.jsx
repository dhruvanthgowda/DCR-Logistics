import React from 'react';
import { 
  MapPin, Navigation, ShieldCheck, Warehouse, Truck, 
  Clock, ArrowRight, CheckCircle2, Building, ExternalLink 
} from 'lucide-react';
import { NETWORK_DATA } from '../data/networkData';
import { COMPANY_CONFIG } from '../config/company';
import { useQuoteModal } from '../context/QuoteModalContext';
import SouthIndiaMap from '../components/SouthIndiaMap';

export default function NetworkPage({ onNavigate }) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* Network Hero */}
      <section className="bg-[#07101E] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80"
            alt="South India Logistics Transit Highway"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07101E] via-[#07101E]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
            Regional Logistics Backbone
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Strategically Located in Bengaluru. <br />
            <span className="text-orange-500">Connected to All South India.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Operating our central operational warehouse in Attibele, Bangalore, we connect manufacturers, distributors, and consumers across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana with fast transit and dependable dispatch.
          </p>
        </div>
      </section>

      {/* Main Interactive South India Map Section */}
      <section className="py-16 sm:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Interactive Regional Transit Grid
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Explore delivery transit times, arterial highway corridors, and key connected cities radiating from our Attibele warehouse hub.
            </p>
          </div>

          <SouthIndiaMap />
        </div>
      </section>

      {/* Attibele Strategic Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold text-orange-600 uppercase tracking-wider">
                Geographic Superiority
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Why Attibele, Bangalore Is The Ideal South Indian Logistics Gateway
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Positioned directly on the southern edge of Bangalore at the Karnataka–Tamil Nadu border, Attibele occupies the sweet spot of South Indian commerce:
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: 'Direct Multi-State Highway Frontage',
                    desc: 'Instant access to interstate arterial expressways and the Chennai freight highway without entering urban Bangalore traffic restrictions.'
                  },
                  {
                    title: 'Proximity to Major Industrial Belts',
                    desc: 'Located merely 8 km from Hosur’s manufacturing and automotive clusters, and 18 km from Electronic City, enabling effortless factory feeding and vendor consolidation.'
                  },
                  {
                    title: '24/7 Heavy Commercial Vehicle Clearance',
                    desc: 'Avoid peak-hour city entry truck bans. Long-haul trailers and 32ft multi-axle container trucks enter, dock, and exit at any hour of the day or night.'
                  },
                  {
                    title: 'Ring Road & Expressway Connectivity',
                    desc: 'Effortless linkage to the NICE Peripheral Ring Road and the upcoming Satellite Town Ring Road (STRR), smoothly routing cargo towards Mysuru, Tumkur, and Hyderabad.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Facility Specifications Card */}
              <div className="bg-[#0B192C] text-white p-7 rounded-3xl border border-slate-800 shadow-xl space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-orange-500 text-white">
                    <Warehouse className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Attibele Hub Specifications
                    </h3>
                    <p className="text-xs text-slate-400">
                      Bangalore, Karnataka – 562107
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 text-xs border-t border-slate-800">
                  {NETWORK_DATA.warehouseSpecs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-400">{spec.label}</span>
                      <strong className="text-white text-right font-medium">{spec.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={COMPANY_CONFIG.geo.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
                  >
                    <span>View Exact Location on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Arterial Highway Corridors Table */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-extrabold text-orange-600 uppercase tracking-wider">
              Transit Logistics
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Major Radial Transit Corridors
            </h2>
            <p className="text-sm text-slate-600">
              Connecting our central Attibele warehouse to key commercial consumption centres across South India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NETWORK_DATA.corridors.map((c, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-orange-50 text-orange-600 font-mono text-[11px] font-bold">
                      {c.highway}
                    </span>
                    <span className="text-xs font-bold text-slate-400">{c.distance}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{c.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Transit SLA: {c.transitTime}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <strong className="text-slate-700 block mb-1">Route Waypoints:</strong>
                  {c.coverage}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => openQuoteModal('Transit & Distribution Quote')}
              className="px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition"
            >
              Get Rates for Your Specific Route
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

