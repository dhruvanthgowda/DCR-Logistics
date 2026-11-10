import React from 'react';
import { 
  Building2, Target, Eye, ShieldCheck, Warehouse, Truck, 
  MapPin, CheckCircle2, ArrowRight, Phone, Clock, FileCheck 
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { useQuoteModal } from '../context/QuoteModalContext';

export default function AboutPage({ onNavigate }) {
  const { openQuoteModal } = useQuoteModal();

  const corePillars = [
    {
      title: 'Operational Precision',
      desc: 'Logistics succeeds on execution details. We apply strict inbound dock checklists, standardized palletization protocols, and barcode-level traceability to ensure zero-defect operations.',
      icon: CheckCircle2
    },
    {
      title: 'Geographical Advantage',
      desc: 'Our facility in Attibele serves as the premier distribution crossroad between Karnataka and Tamil Nadu, bypassing urban congestion for rapid regional dispatch.',
      icon: MapPin
    },
    {
      title: 'Adaptive Scalability',
      desc: 'Whether supporting dynamic seasonal peaks for e-commerce or steady-state industrial inventory, our storage footprint flexes to match our clients’ business curves.',
      icon: Warehouse
    },
    {
      title: 'Accountability & Integrity',
      desc: 'Clear inventory audits, daily inward/outward records, and open communication channels ensure our clients maintain absolute visibility and peace of mind.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* Hero Header */}
      <section className="bg-[#07101E] text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2000&q=80"
            alt="DCR Logistics Warehouse Infrastructure"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07101E] via-[#07101E]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
              About DCR Logistics
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Architecting Reliable Supply Chains Across South India
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Based in Attibele, Bangalore, DCR Logistics delivers dependable 3PL, warehousing, C&F agency, and transportation services engineered to empower business growth.
            </p>
            <div className="pt-2 text-xs text-orange-400 font-bold uppercase tracking-wider">
              {COMPANY_CONFIG.tagline}
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold text-orange-600 uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                A Dedicated Supply Chain Partner Positioned at the Heart of Commerce
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Founded with a mission to simplify modern warehousing and freight complexities, <strong>DCR Logistics</strong> operates from its strategically located warehouse facility in Attibele, Bangalore. We support manufacturers, e-commerce platforms, FMCG corporations, automotive suppliers, and retail businesses with scalable logistics infrastructure.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                We understand that warehousing is not merely about square footage—it is about inventory accuracy, rapid order turnaround, strict physical security, and seamless transit coordination. Our team brings deep hands-on discipline to every shipment, dock operation, and storage layout.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-orange-500 space-y-2">
                <h4 className="text-sm font-bold text-slate-900">
                  Headquartered in Attibele, Bangalore – 562107
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Located directly at the Karnataka–Tamil Nadu state border, our hub grants clients uninterrupted highway access to Hosur industrial areas, Electronic City, and the wider South Indian economic corridor.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="DCR Logistics Operations Center"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-lg relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600">
                  Our Long-Term Horizon
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Our Vision
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To become South India’s most trusted and agile regional logistics partner, recognized for exceptional operational integrity, state-of-the-art warehousing practices, and customer-first supply chain execution that powers business expansion.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400">
                Guiding every operational standard we uphold.
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0B192C] text-white border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-orange-400">
                  Daily Execution Purpose
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Our Mission
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  To relieve enterprises of logistical complexity by delivering dependable warehousing, error-free inventory governance, and coordinated transportation solutions that safeguard goods, optimize turnaround times, and keep businesses moving seamlessly.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-semibold text-slate-400">
                Committed to tangible, reliable performance every day.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Approach to Logistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-extrabold text-orange-600 uppercase tracking-wider">
              Operational Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Approach to Logistics
            </h2>
            <p className="text-base text-slate-600">
              We approach supply chains not as disjointed freight moves, but as a disciplined operational system built on four foundational pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((p, i) => {
              const IconComp = p.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-400 transition space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Warehousing & Distribution Capabilities */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold text-orange-400 uppercase tracking-wider">
                Infrastructure & Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Our Warehousing & Distribution Capabilities
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Operating out of Attibele, our modern facility is engineered to accommodate diverse industrial and consumer inventory requirements:
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                {[
                  'Heavy vehicle dock bays designed for prompt container unloading and trailer staging.',
                  'High-bay selective pallet racking alongside open floor space for bulky and oversized freight.',
                  'Systematic SKU segregation, barcode labeling, and FIFO/FEFO stock rotation enforcement.',
                  'Round-the-clock CCTV surveillance, fire hydrant safety networks, and controlled gate security.',
                  'Strategic proximity to the Hosur manufacturing belt (8 km) and Electronic City tech corridor (18 km).',
                  'Dedicated freight fleet coordination connecting Bangalore to all four southern states.'
                ].map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openQuoteModal()}
                  className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/30 transition flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Warehouse Space Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80"
                  alt="Forklift and Racking"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square mt-6">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
                  alt="Logistics Transport Truck"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Commitment to Customers */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Our Commitment to Every Customer
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            "We treat your cargo with the exact same diligence, security, and care as if it were our own. When you partner with DCR Logistics, you get direct operational responsiveness, clear communication, and an unwavering commitment to keep your business moving."
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                onNavigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition"
            >
              Contact Our Operations Desk
            </button>
            <a
              href={`tel:${COMPANY_CONFIG.phone}`}
              className="px-6 py-3 rounded-xl border border-slate-300 text-slate-800 font-bold text-sm hover:border-orange-500 transition"
            >
              Call {COMPANY_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

