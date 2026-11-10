import React from 'react';
import { 
  ArrowRight, CheckCircle2, Shield, Warehouse, Truck, 
  MapPin, Clock, Boxes, FileCheck, ClipboardList, 
  RotateCcw, PackageCheck, Building2, Phone, Mail, 
  Factory, ShoppingCart, Store, Car, Tv, Coffee, ExternalLink
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SERVICES_DATA } from '../data/servicesData';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { useQuoteModal } from '../context/QuoteModalContext';
import SouthIndiaMap from '../components/SouthIndiaMap';

export default function HomePage({ onNavigate }) {
  const { openQuoteModal } = useQuoteModal();

  const iconMap = {
    Boxes: Boxes,
    Warehouse: Warehouse,
    FileCheck: FileCheck,
    ClipboardList: ClipboardList,
    RotateCcw: RotateCcw,
    Truck: Truck,
    PackageCheck: PackageCheck,
    Factory: Factory,
    ShoppingCart: ShoppingCart,
    Store: Store,
    Car: Car,
    Building2: Building2,
    Tv: Tv,
    Coffee: Coffee
  };

  const whyChooseStrengths = [
    {
      title: 'Strategic Location in Attibele, Bangalore',
      desc: 'Prime position right at the Karnataka–Tamil Nadu border, enabling swift freight access to Hosur, Electronic City, and key South Indian transit corridors without urban traffic bottlenecks.',
      icon: MapPin
    },
    {
      title: 'Customer-Focused Logistics Solutions',
      desc: 'We tailor storage contracts, operating procedures, and delivery schedules to align precisely with your enterprise demands rather than forcing rigid one-size-fits-all agreements.',
      icon: CheckCircle2
    },
    {
      title: 'Reliable Warehouse Operations',
      desc: 'Disciplined inbound receiving, systematic put-away, high-bay racking, and safe material handling governed by established warehouse SOPs and strict security protocols.',
      icon: Shield
    },
    {
      title: 'Flexible Storage Solutions',
      desc: 'Both dedicated warehousing for enterprise brands and scalable shared space for dynamic businesses needing elastic storage that adjusts to business cycles.',
      icon: Warehouse
    },
    {
      title: 'Efficient Inventory Handling',
      desc: 'Rigorous stock tracking, continuous cycle counts, FIFO/FEFO rotation discipline, and transparent inward/outward documentation to maintain high inventory integrity.',
      icon: ClipboardList
    },
    {
      title: 'B2B & B2C Distribution Capabilities',
      desc: 'Seamless transit orchestration bridging primary plant dispatches to regional distributors, modern trade retail counters, and direct customer delivery channels across South India.',
      icon: Truck
    },
    {
      title: 'Customized Value-Added Services',
      desc: 'On-site promotional kitting, barcode labelling, MRP tagging, product rework, and repacking right within our warehouse hub for immediate retail readiness.',
      icon: PackageCheck
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* =========================================================================
          SECTION A: HERO SECTION
         ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center bg-[#07101E] text-white overflow-hidden">
        {/* Full-width premium logistics warehouse background image with corporate overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85"
            alt="DCR Logistics Modern Warehouse Facility"
            className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07101E] via-[#07101E]/90 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(#FF6500_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl space-y-6">
            
            {/* Tagline & Location Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs shadow-lg backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
              <span className="font-extrabold uppercase tracking-widest text-orange-400">
                {COMPANY_CONFIG.tagline}
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-300">Attibele, Bangalore</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              SMART LOGISTICS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300">
                SEAMLESS SUPPLY CHAINS.
              </span>
            </h1>

            {/* Supporting Heading */}
            <h2 className="text-lg sm:text-xl font-bold text-slate-200 tracking-tight">
              Your Trusted Partner for 3PL, Warehousing, C&F and End-to-End Logistics Solutions.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              At DCR Logistics, we deliver reliable warehousing, inventory management, transportation and supply chain solutions that help businesses operate efficiently, reduce complexity and grow with confidence.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => {
                  onNavigate('/services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-base border border-slate-600 transition flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>

              <button
                onClick={() => openQuoteModal()}
                className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-base shadow-xl shadow-orange-500/30 transition flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Strategic Quick Highlights */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-orange-400 font-extrabold uppercase text-[10px] block">Location Hub</span>
                <strong className="text-white text-sm">Attibele, Bangalore</strong>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-orange-400 font-extrabold uppercase text-[10px] block">Transit Network</span>
                <strong className="text-white text-sm">South India Corridors</strong>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-orange-400 font-extrabold uppercase text-[10px] block">Service Scope</span>
                <strong className="text-white text-sm">Dedicated & Shared</strong>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-orange-400 font-extrabold uppercase text-[10px] block">Coverage</span>
                <strong className="text-white text-sm">South India Transit</strong>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION B: COMPANY INTRODUCTION
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-extrabold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                About DCR Logistics
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Simplifying Logistics. <br />
                <span className="text-orange-600">Strengthening Businesses.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                DCR Logistics is a professional logistics and supply chain solutions provider based in Attibele, Bangalore. We specialize in empowering manufacturers, consumer brands, retail chains, and e-commerce enterprises with end-to-end warehousing and distribution infrastructure engineered for speed, safety, and operational excellence across South India.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                By operating at the strategic convergence of Karnataka and Tamil Nadu, we grant our clients unprecedented regional reach, streamlined dock operations, and dependable order execution.
              </p>

              {/* 6 Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: 'Strategic warehouse location', desc: 'Attibele hub with immediate connectivity to Hosur and Electronic City.' },
                  { title: 'Reliable logistics operations', desc: 'Strict standard operating procedures ensuring safe handling and prompt turnaround.' },
                  { title: 'Flexible warehousing solutions', desc: 'Custom tailored space allocations that expand or contract with seasonal demand.' },
                  { title: 'Efficient inventory management', desc: 'Continuous cycle audits, batch control, and accurate inward/outward documentation.' },
                  { title: 'B2B and B2C transportation', desc: 'Regional distribution, dedicated truckloads, and last-mile connectivity.' },
                  { title: 'Customized supply chain services', desc: 'On-demand kitting, packaging, C&F agency, and reverse logistics handling.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => {
                    onNavigate('/about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition flex items-center gap-2 cursor-pointer"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="px-5 py-3.5 rounded-xl border border-slate-200 hover:border-orange-500 text-slate-700 hover:text-orange-600 font-bold text-sm transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>Call {COMPANY_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Warehouse Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80"
                  alt="DCR Logistics Warehouse Racking Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Floating Hub Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 text-slate-900">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-orange-500 text-white">
                      <Warehouse className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">
                        Attibele Logistics Facility
                      </h4>
                      <p className="text-xs text-slate-600">
                        Bangalore, Karnataka – 562107
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-semibold text-orange-600">Strategic Border Gateway</span>
                    <span>24/7 Security & CCTV</span>
                  </div>
                </div>
              </div>

              {/* Decorative accent behind image */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-500/10 rounded-3xl -z-10 blur-xl pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C: OUR CORE SERVICES
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-extrabold uppercase tracking-wider">
              Comprehensive Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Our Core Logistics Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              End-to-end warehousing, clearing and forwarding, inventory control, and multi-modal transit engineered to elevate your business performance.
            </p>
          </div>

          {/* Service Cards Grid - All 7 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => {
              const IconComp = iconMap[service.icon] || Boxes;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  {/* Service Card Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold border border-slate-700">
                      {service.tag}
                    </span>
                    <div className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-orange-500 text-white shadow-lg">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Service Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-orange-600 transition">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3">
                        {service.summary}
                      </p>
                    </div>

                    {/* Bullet Highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      {service.keyActivities.slice(0, 3).map((act, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                          <span className="line-clamp-1">{act}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer with Learn More & Quick Quote */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => {
                          onNavigate(`/services/${service.id}`);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 group-hover:gap-1.5 transition cursor-pointer"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => openQuoteModal(service.title)}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-700 text-xs font-semibold transition cursor-pointer"
                      >
                        Quote This
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Integrated Custom Solutions card spanning remaining slot */}
            <div className="bg-[#0B192C] text-white rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
                  Bespoke Operations
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Need a Customized Supply Chain Package?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We design integrated solutions combining multi-temperature ambient storage, dedicated fleet vehicles, C&F operations, and computerized inventory reporting tailored precisely to your operational requirements.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => openQuoteModal('Integrated Custom Package')}
                  className="w-full py-3.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/30 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Discuss Custom Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => {
                onNavigate('/services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition cursor-pointer"
            >
              <span>Explore Detailed Service Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION D: WHY CHOOSE DCR LOGISTICS?
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-extrabold uppercase tracking-wider">
              Operational Distinction
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Why Choose DCR Logistics?
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Built on operational dependability, strategic geographical positioning in Attibele, and customer-first execution.
            </p>
          </div>

          {/* 7 Strengths Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseStrengths.map((strength, index) => {
              const IconComp = strength.icon;
              return (
                <div
                  key={index}
                  className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-orange-300 hover:bg-orange-50/20 transition-all duration-300 group shadow-sm hover:shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-orange-600 transition">
                      {strength.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {strength.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-orange-600 transition">
                    <span>Verified DCR Standard</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                </div>
              );
            })}

            {/* Operational Commitment Highlight Box */}
            <div className="p-7 rounded-3xl bg-[#0B192C] text-white border border-slate-800 shadow-xl flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div className="space-y-3">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  Our Operating Philosophy
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Transparent Logistics Without Empty Claims
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  At DCR Logistics, we focus on what truly matters to businesses: your goods are accounted for with accurate inventory tracking, stored securely in clean, monitored space, and dispatched punctually across South India.
                </p>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-4 border-t border-slate-800 mt-4">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Shield className="w-4 h-4 text-orange-400" />
                  <span>24/7 Security Protocols</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>Attibele Logistics Hub</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>High Dispatch Discipline</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION E: INDUSTRIES WE SERVE
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
              Sector Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Tailored warehousing, inventory control, and distribution strategies aligned with sector-specific supply chain dynamics.
            </p>
          </div>

          {/* 7 Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {INDUSTRIES_DATA.map((ind) => {
              const IconComp = iconMap[ind.icon] || Factory;
              return (
                <div
                  key={ind.id}
                  className="bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-700/80 hover:border-orange-500/60 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 text-[10px] font-bold text-orange-400 border border-slate-800">
                      {ind.badge}
                    </span>
                    <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-orange-500 text-white">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition">
                        {ind.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                        {ind.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-700/80 flex items-center justify-between text-xs">
                      <button
                        onClick={() => {
                          onNavigate('/industries');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>View Sector Logistics</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => {
                onNavigate('/industries');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition cursor-pointer"
            >
              <span>Explore All Industry Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION F: OUR NETWORK
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-extrabold uppercase tracking-wider">
              Strategic Reach
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Strategically Located. <br />
              <span className="text-orange-500">Connected to South India.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              "Warehouse in Bengaluru, serving and connecting businesses across South India."
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Located at Attibele in Bangalore, our centralized facility provides a decisive logistical advantage. Situated directly on the border between Karnataka and Tamil Nadu, we facilitate uninterrupted movement of cargo to Chennai, Hosur, Coimbatore, Kochi, Hyderabad, and major regional economic zones without entering urban restriction zones.
            </p>
          </div>

          {/* Interactive South India SVG Map & Corridor Visualizer */}
          <SouthIndiaMap />

        </div>
      </section>

      {/* =========================================================================
          SECTION G: CALL-TO-ACTION (CTA) SECTION
         ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 text-white relative overflow-hidden">
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
            Ready To Streamline Your Supply Chain?
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Looking for a Reliable Logistics Partner?
          </h2>

          <p className="text-base sm:text-xl text-orange-100 max-w-2xl mx-auto font-medium">
            Let DCR Logistics simplify your warehousing and supply chain operations with flexible, dependable logistics solutions.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-base shadow-2xl transition flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                onNavigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/95 hover:bg-white text-slate-900 font-bold text-base shadow-xl transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span>Contact Our Team</span>
            </button>
          </div>

          <div className="pt-6 text-xs text-orange-100/90 flex flex-wrap items-center justify-center gap-6">
            <span>📍 Attibele Hub, Bangalore</span>
            <span>📞 {COMPANY_CONFIG.phoneDisplay}</span>
            <span>⏱️ 24/7 Operations</span>
          </div>
        </div>
      </section>

    </div>
  );
}

