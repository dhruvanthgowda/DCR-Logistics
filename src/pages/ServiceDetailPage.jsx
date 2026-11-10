import React from 'react';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, 
  Warehouse, Boxes, FileCheck, ClipboardList, RotateCcw, 
  Truck, PackageCheck, Phone, MapPin 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { useQuoteModal } from '../context/QuoteModalContext';
import { COMPANY_CONFIG } from '../config/company';

export default function ServiceDetailPage({ serviceId, onNavigate }) {
  const { openQuoteModal } = useQuoteModal();

  const service = SERVICES_DATA.find(s => s.id === serviceId) || SERVICES_DATA[0];

  const iconMap = {
    Boxes: Boxes,
    Warehouse: Warehouse,
    FileCheck: FileCheck,
    ClipboardList: ClipboardList,
    RotateCcw: RotateCcw,
    Truck: Truck,
    PackageCheck: PackageCheck,
  };

  const IconComp = iconMap[service.icon] || Boxes;
  const otherServices = SERVICES_DATA.filter(s => s.id !== service.id);

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* Service Detail Hero */}
      <section className="bg-[#07101E] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07101E] via-[#07101E]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => {
              onNavigate('/services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 mb-6 transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </button>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              {service.tag}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {service.summary}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openQuoteModal(service.title)}
                className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition flex items-center gap-2 cursor-pointer"
              >
                <span>Request Quote for {service.shortTitle}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="px-5 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-bold text-sm transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call {COMPANY_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Deep Dive */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Article */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Detailed Overview */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="p-3 rounded-2xl bg-orange-500 text-white">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Operational Scope
                    </span>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                      Detailed Service Execution
                    </h2>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4 text-sm sm:text-base">
                  <p>{service.description}</p>
                </div>

                {/* Key Activities */}
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                    Key Activities Managed by DCR Logistics
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                    {service.keyActivities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Benefits */}
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    Business Benefits for Your Enterprise
                  </h3>
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {service.businessBenefits.map((ben, i) => (
                      <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100">
                        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* High-Resolution Warehouse Image Showcase */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>

            </div>

            {/* Right Sidebar: Hub Specs + Other Services Navigation */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Hub Specs */}
              <div className="bg-[#0B192C] text-white p-6 rounded-3xl border border-slate-800 shadow-xl space-y-4">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  Facility Specifications
                </span>
                <h3 className="text-lg font-bold text-white">
                  Attibele Hub Infrastructure
                </h3>

                <div className="space-y-2.5 text-xs pt-2 border-t border-slate-800">
                  {service.specs.map((sp, i) => (
                    <div key={i} className="flex justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-400">{sp.label}</span>
                      <strong className="text-white font-medium">{sp.value}</strong>
                    </div>
                  ))}
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Regional Gateway</span>
                    <strong className="text-orange-400 font-medium">Attibele Hub Entrance</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openQuoteModal(service.title)}
                    className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition"
                  >
                    Request Quotation for {service.shortTitle}
                  </button>
                </div>
              </div>

              {/* Other Services Navigation List */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Explore Other Services
                </h4>

                <div className="space-y-1.5">
                  {otherServices.map((other) => (
                    <button
                      key={other.id}
                      onClick={() => {
                        onNavigate(`/services/${other.id}`);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full text-left p-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition flex items-center justify-between group cursor-pointer"
                    >
                      <span>{other.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-500 opacity-0 group-hover:opacity-100 transition" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

