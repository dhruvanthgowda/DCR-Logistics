import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { NETWORK_DATA } from '../data/networkData';

export default function SouthIndiaMap() {
  const [selectedDest, setSelectedDest] = useState(NETWORK_DATA.destinations[0]);
  const [activeFilter, setActiveFilter] = useState('all');

  const destinations = NETWORK_DATA.destinations;

  // Visual SVG coordinates tuned for South India schematic layout (x: 0-100%, y: 0-100%)
  const cityPositions = {
    blr: { x: 48, y: 56, name: 'Attibele, Bengaluru', isHub: true },
    hsr: { x: 53, y: 59, name: 'Hosur Industrial Hub', isHub: false },
    chn: { x: 74, y: 52, name: 'Chennai', isHub: false },
    slm: { x: 52, y: 70, name: 'Salem', isHub: false },
    cbe: { x: 42, y: 76, name: 'Coimbatore', isHub: false },
    kch: { x: 34, y: 86, name: 'Kochi', isHub: false },
    hyd: { x: 51, y: 22, name: 'Hyderabad', isHub: false },
    vjw: { x: 73, y: 32, name: 'Vijayawada', isHub: false },
    mys: { x: 38, y: 61, name: 'Mysuru', isHub: false }
  };

  const filteredDests = activeFilter === 'all'
    ? destinations
    : destinations.filter(d => {
        if (activeFilter === 'tn') return d.state === 'Tamil Nadu';
        if (activeFilter === 'ka') return d.state === 'Karnataka';
        if (activeFilter === 'kl') return d.state === 'Kerala';
        if (activeFilter === 'ap_ts') return d.state === 'Andhra Pradesh' || d.state === 'Telangana';
        return true;
      });

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            Central Strategic Node
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            South India Transit & Distribution Grid
          </h3>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Operating from our central facility in Attibele, Bangalore, with strategic multi-lane arterial access across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh & Telangana.
          </p>
        </div>

        {/* State filter buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Corridors' },
            { id: 'tn', label: 'Tamil Nadu' },
            { id: 'ka', label: 'Karnataka' },
            { id: 'kl', label: 'Kerala' },
            { id: 'ap_ts', label: 'AP & Telangana' },
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === btn.id
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center relative z-10">
        {/* Left: Interactive Vector Map Canvas */}
        <div className="lg:col-span-7 bg-slate-950/70 rounded-2xl p-4 sm:p-6 border border-slate-800/80 relative min-h-[460px] flex items-center justify-center">
          
          <svg
            viewBox="0 0 500 560"
            className="w-full h-auto max-h-[500px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B00" />
                <stop offset="100%" stopColor="#EA580C" />
              </linearGradient>
              <linearGradient id="transitLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Schematic South India Contour Outline */}
            <path
              d="M 120 40 
                 Q 280 20 420 50 
                 Q 440 180 390 280 
                 Q 360 360 260 510 
                 Q 240 540 230 520 
                 Q 190 440 170 360 
                 Q 140 250 110 160 
                 Z"
              fill="#0F172A"
              stroke="#334155"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              className="opacity-70"
            />

            {/* Regional highway network backbones */}
            {/* Arterial North to Hyderabad */}
            <line x1="240" y1="310" x2="255" y2="120" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />
            {/* Arterial East to Chennai */}
            <line x1="240" y1="310" x2="370" y2="290" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />
            {/* Arterial South to Salem & Coimbatore */}
            <line x1="240" y1="310" x2="260" y2="390" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="260" y1="390" x2="210" y2="425" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="210" y1="425" x2="170" y2="480" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />

            {/* Active Radiant Transit Vectors from Bengaluru Hub */}
            {destinations.map(d => {
              const pos = cityPositions[d.id];
              if (!pos || pos.isHub) return null;
              const isSelected = selectedDest.id === d.id;
              const xTarget = (pos.x / 100) * 500;
              const yTarget = (pos.y / 100) * 560;

              return (
                <g key={`transit-${d.id}`}>
                  <line
                    x1="240"
                    y1="310"
                    x2={xTarget}
                    y2={yTarget}
                    stroke={isSelected ? '#FF6500' : 'url(#transitLine)'}
                    strokeWidth={isSelected ? '3.5' : '1.8'}
                    strokeDasharray={isSelected ? 'none' : '4 4'}
                    className={isSelected ? 'animate-pulse' : 'opacity-60'}
                  />
                  {isSelected && (
                    <circle
                      cx={(240 + xTarget) / 2}
                      cy={(310 + yTarget) / 2}
                      r="4"
                      fill="#FF6500"
                      className="animate-ping"
                    />
                  )}
                </g>
              );
            })}

            {/* City Nodes */}
            {destinations.map(d => {
              const pos = cityPositions[d.id];
              if (!pos) return null;
              const isHub = pos.isHub;
              const isSelected = selectedDest.id === d.id;
              const cx = (pos.x / 100) * 500;
              const cy = (pos.y / 100) * 560;

              if (isHub) {
                return (
                  <g key={d.id} className="cursor-pointer" onClick={() => setSelectedDest(d)}>
                    {/* Glowing outer rings for central warehouse hub */}
                    <circle cx={cx} cy={cy} r="28" fill="#FF6500" opacity="0.15" className="animate-ping" />
                    <circle cx={cx} cy={cy} r="18" fill="#FF6500" opacity="0.3" />
                    <circle cx={cx} cy={cy} r="10" fill="url(#hubGradient)" filter="url(#glow)" />
                    <circle cx={cx} cy={cy} r="5" fill="#FFFFFF" />
                    
                    <rect x={cx - 75} y={cy - 48} width="150" height="26" rx="6" fill="#0B192C" stroke="#FF6500" strokeWidth="1.5" />
                    <text x={cx} y={cy - 31} textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">
                      ★ ATTIBELE HUB (BLR)
                    </text>
                  </g>
                );
              }

              return (
                <g
                  key={d.id}
                  className="cursor-pointer group"
                  onClick={() => setSelectedDest(d)}
                >
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? '9' : '6'}
                    fill={isSelected ? '#FF6500' : '#1E293B'}
                    stroke={isSelected ? '#FFFFFF' : '#64748B'}
                    strokeWidth="2"
                    className="transition-all duration-200"
                  />
                  {isSelected && (
                    <circle cx={cx} cy={cy} r="16" fill="#FF6500" opacity="0.25" className="animate-ping" />
                  )}
                  <text
                    x={cx + (pos.x > 60 ? -12 : 12)}
                    y={cy + 4}
                    textAnchor={pos.x > 60 ? 'end' : 'start'}
                    fill={isSelected ? '#FF6500' : '#94A3B8'}
                    fontSize="11"
                    fontWeight={isSelected ? '700' : '500'}
                  >
                    {d.name.split(' ')[0]}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Map Legend Overlay */}
          <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-800 text-[11px] space-y-1.5 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-500 border border-white" />
              <span className="font-semibold text-white">Central Warehouse Hub (Attibele)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-400" />
              <span className="text-slate-300">Connected South Indian Market</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-0.5 bg-orange-500" />
              <span className="text-slate-400">Direct Regional Express Corridors</span>
            </div>
          </div>
        </div>

        {/* Right: Selected Hub / Destination Details */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  {selectedDest.state} Route
                </span>
                <h4 className="text-xl font-bold text-white mt-0.5 flex items-center gap-2">
                  {selectedDest.name}
                  {selectedDest.id === 'blr' && (
                    <span className="px-2 py-0.5 text-[10px] bg-orange-500 text-white rounded font-extrabold uppercase">
                      Headquarters & Hub
                    </span>
                  )}
                </h4>
              </div>
              <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <Navigation className="w-5 h-5" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-slate-700">
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 text-xs flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-orange-400" /> Transit Time
                </span>
                <p className="text-sm font-bold text-white mt-1">{selectedDest.transit}</p>
              </div>

              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 text-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" /> Distance
                </span>
                <p className="text-sm font-bold text-white mt-1">{selectedDest.distance}</p>
              </div>
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
              {selectedDest.id === 'blr' ? (
                <span>
                  <strong>Attibele Facility:</strong> Central multi-modal warehouse facility, directly at the border between Karnataka and Tamil Nadu. Equipped with dedicated docks, 24/7 security, and high-cube racking.
                </span>
              ) : selectedDest.id === 'hsr' ? (
                <span>
                  <strong>Hosur Connection:</strong> Immediate 8 km transit to Hosur's manufacturing and auto cluster via direct 6-lane highway. Same-day milk runs and JIT deliveries available.
                </span>
              ) : (
                <span>
                  Connected to DCR Logistics Attibele hub via planned freight dispatches, FTL (Full Truckload) and PTL (Part Truckload) schedules with guaranteed delivery SLAs.
                </span>
              )}
            </div>
          </div>

          {/* Quick Hub Specs List */}
          <div className="bg-slate-800/40 rounded-2xl p-5 border border-slate-800">
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              Strategic Attibele Advantages
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              {NETWORK_DATA.hub.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clickable destination pills */}
          <div className="pt-2">
            <p className="text-xs text-slate-400 mb-2">Click to inspect connected markets:</p>
            <div className="flex flex-wrap gap-2">
              {filteredDests.map(d => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDest(d)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedDest.id === d.id
                      ? 'bg-orange-500 text-white font-bold shadow-md shadow-orange-500/30'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {d.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

