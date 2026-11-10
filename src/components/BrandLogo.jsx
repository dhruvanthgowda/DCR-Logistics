import React from 'react';
import { COMPANY_CONFIG } from '../config/company';

/**
 * BrandLogo Component
 * 
 * Uses the user's official uploaded company logo:
 * "DCR Logistics_ Moving Business Forward LOGO.png"
 * 
 * Features:
 * - High-definition rendering
 * - Intelligent background contrast handling (clean white pill backdrop for dark footer/hero)
 * - Clickable and accessible
 */
export default function BrandLogo({ variant = 'dark', className = '', showTagline = true }) {
  const isDarkBg = variant === 'light'; // variant 'light' means the surrounding background is dark (e.g. footer)

  if (isDarkBg) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {/* On dark footers/backgrounds, house the official logo in a clean white rounded card so navy typography shines */}
        <div className="bg-white px-3.5 py-2 rounded-2xl shadow-md border border-slate-700/40 inline-flex items-center gap-3 transition-transform duration-300 hover:scale-105">
          <img
            src="/images/logo-transparent.png"
            alt={COMPANY_CONFIG.name}
            className="h-9 sm:h-11 w-auto object-contain"
          />
        </div>
      </div>
    );
  }

  // Standard Header presentation (on white / light backgrounds)
  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      <img
        src="/images/logo-transparent.png"
        alt={COMPANY_CONFIG.name}
        className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </div>
  );
}
