import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, ArrowRight, Shield, Warehouse } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { COMPANY_CONFIG } from '../config/company';
import { useQuoteModal } from '../context/QuoteModalContext';
import { SERVICES_DATA } from '../data/servicesData';

export default function Header({ currentPath = '/', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Industries', path: '/industries' },
    { name: 'Our Network', path: '/network' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleNavClick = (path) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#07101E] text-slate-300 text-[11px] sm:text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-300">
              Operational Hub: <strong className="text-white">Attibele, Bangalore</strong> — Connecting South India
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href={`tel:${COMPANY_CONFIG.phone}`}
              className="flex items-center gap-1.5 hover:text-orange-400 transition font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>{COMPANY_CONFIG.phoneDisplay}</span>
            </a>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline text-slate-400">
              {COMPANY_CONFIG.operations.workingHours}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-100 text-slate-900'
            : 'bg-white py-4.5 border-b border-slate-100 text-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button 
              onClick={() => handleNavClick('/')} 
              className="text-left cursor-pointer focus:outline-none"
              aria-label="DCR Logistics Home"
            >
              <BrandLogo variant="dark" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesDropdown(true)}
                      onMouseLeave={() => setServicesDropdown(false)}
                    >
                      <button
                        onClick={() => handleNavClick(link.path)}
                        className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
                          isActive || currentPath.startsWith('/services')
                            ? 'text-orange-600 bg-orange-50 font-bold'
                            : 'text-slate-700 hover:text-orange-600 hover:bg-slate-50'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4 opacity-70" />
                      </button>

                      {/* Dropdown Menu */}
                      {servicesDropdown && (
                        <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2.5 animate-fadeIn">
                          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Our 7 Core Logistics Verticals
                          </div>
                          {SERVICES_DATA.map((srv) => (
                            <button
                              key={srv.id}
                              onClick={() => handleNavClick(`/services/${srv.id}`)}
                              className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition flex items-center justify-between group"
                            >
                              <span>{srv.title}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-orange-500 transition" />
                            </button>
                          ))}
                          <div className="border-t border-slate-100 mt-2 pt-2">
                            <button
                              onClick={() => handleNavClick('/services')}
                              className="w-full text-center py-1.5 text-xs font-bold text-orange-600 hover:text-orange-700"
                            >
                              View All Services Overview →
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.path)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
                      isActive
                        ? 'text-orange-600 bg-orange-50 font-bold'
                        : 'text-slate-700 hover:text-orange-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:text-orange-600 text-xs font-bold transition"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                <span>Call Dispatch</span>
              </a>

              <button
                onClick={() => openQuoteModal()}
                className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-sm shadow-md shadow-orange-500/25 transition cursor-pointer hover:scale-[1.02] flex items-center gap-1.5"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => openQuoteModal()}
                className="px-3.5 py-2 rounded-lg bg-orange-500 text-white font-bold text-xs shadow-sm"
              >
                Get Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-5 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-bold transition ${
                    currentPath === link.path
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="border-t border-slate-100 mt-4 pt-4 space-y-3">
              <div className="text-xs text-slate-500 space-y-1 px-1">
                <p>📍 {COMPANY_CONFIG.address.fullFormatted}</p>
                <p>📞 {COMPANY_CONFIG.phoneDisplay}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-500" />
                  <span>Call Us</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuoteModal();
                  }}
                  className="w-full py-2.5 rounded-xl bg-orange-500 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

