import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import WhatsAppFloatingBtn from './components/WhatsAppFloatingBtn';
import { QuoteModalProvider } from './context/QuoteModalContext';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import IndustriesPage from './pages/IndustriesPage';
import NetworkPage from './pages/NetworkPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';
import { COMPANY_CONFIG } from './config/company';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  // Listen to browser forward/backward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page title and meta description dynamically for SEO
  useEffect(() => {
    let title = `${COMPANY_CONFIG.name} | ${COMPANY_CONFIG.tagline}`;
    let description = 'DCR Logistics - Leading 3PL, Warehousing, C&F and Supply Chain Solutions in Attibele, Bangalore.';

    if (currentPath === '/about') {
      title = `About Us | ${COMPANY_CONFIG.name} - Bangalore Warehousing & 3PL`;
      description = 'Learn about DCR Logistics, our vision, mission, and warehouse infrastructure in Attibele, Bangalore.';
    } else if (currentPath === '/services') {
      title = `Our Services | ${COMPANY_CONFIG.name} - 3PL, Warehousing, C&F & Transport`;
      description = 'Explore our 7 core logistics verticals: 3PL, Warehousing, C&F, Inventory Management, Reverse Logistics, Transportation, and Value-Added Services.';
    } else if (currentPath.startsWith('/services/')) {
      title = `Service Details | ${COMPANY_CONFIG.name}`;
      description = 'Detailed operational scope and benefits of DCR Logistics supply chain services.';
    } else if (currentPath === '/industries') {
      title = `Industries We Serve | ${COMPANY_CONFIG.name}`;
      description = 'Logistics and warehouse solutions tailored for Manufacturing, E-commerce, FMCG, Automotive, Retail, Electronics, and Food & Beverage.';
    } else if (currentPath === '/network') {
      title = `Our Network | ${COMPANY_CONFIG.name} - South India Distribution`;
      description = 'Strategic warehouse hub in Attibele, Bangalore, serving Karnataka, Tamil Nadu, Kerala, Andhra Pradesh & Telangana.';
    } else if (currentPath === '/contact') {
      title = `Contact Us | ${COMPANY_CONFIG.name} - Attibele, Bangalore`;
      description = 'Get in touch with DCR Logistics commercial operations at Attibele, Bangalore. Phone: +91 8792886452.';
    } else if (currentPath === '/quote') {
      title = `Get a Commercial Quote | ${COMPANY_CONFIG.name}`;
      description = 'Request a fast quote for warehousing space, distribution, and supply chain management.';
    }

    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
  }, [currentPath]);

  // Navigate helper
  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route resolver
  const renderCurrentPage = () => {
    // Service detail route match: /services/:id
    if (currentPath.startsWith('/services/')) {
      const serviceId = currentPath.replace('/services/', '');
      return <ServiceDetailPage serviceId={serviceId} onNavigate={navigate} />;
    }

    switch (currentPath) {
      case '/about':
        return <AboutPage onNavigate={navigate} />;
      case '/services':
        return <ServicesPage onNavigate={navigate} />;
      case '/industries':
        return <IndustriesPage onNavigate={navigate} />;
      case '/network':
        return <NetworkPage onNavigate={navigate} />;
      case '/contact':
        return <ContactPage onNavigate={navigate} />;
      case '/quote':
        return <QuotePage onNavigate={navigate} />;
      case '/':
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <QuoteModalProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-orange-500 selection:text-white antialiased font-sans">
        
        {/* Sticky Header */}
        <Header currentPath={currentPath} onNavigate={navigate} />

        {/* Main Content Area */}
        <main className="flex-1">
          {renderCurrentPage()}
        </main>

        {/* Footer */}
        <Footer onNavigate={navigate} />

        {/* Global Quote Request Modal */}
        <QuoteModal />

        {/* Floating WhatsApp Quick Action Button */}
        <WhatsAppFloatingBtn />

      </div>
    </QuoteModalProvider>
  );
}
