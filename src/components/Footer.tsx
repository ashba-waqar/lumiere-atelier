import React from 'react';
import { MapPin, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-[#F4EFE6] border-t border-[#D4C4AE]/50 text-[#57534E] pt-20 pb-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#A37B34] flex items-center justify-center text-white font-bold font-serif-luxury text-sm shadow-sm">
              LA
            </div>
            <span className="font-serif-luxury text-xl font-bold tracking-widest text-[#1C1917]">
              LUMIÈRE ATELIER
            </span>
          </div>
          <p className="text-xs leading-relaxed text-[#57534E] font-light">
            Sculptural furniture atelier dedicated to timeless organic forms, rare sustainable timber, and Italian upholstered craftsmanship.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#A37B34] font-medium">
            <Award className="w-4 h-4 text-[#A37B34]" />
            <span>2026 Architectural Digest Design Laureate</span>
          </div>
        </div>

        {/* Global Salons */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-[#1C1917] mb-4 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#A37B34]" />
            Private Salons
          </h4>
          <ul className="space-y-2.5 text-xs text-[#57534E]">
            <li className="flex justify-between border-b border-[#E5DDCB] pb-1">
              <span>Paris — Place Vendôme</span>
              <span className="text-[#A37B34] font-medium">By Appt</span>
            </li>
            <li className="flex justify-between border-b border-[#E5DDCB] pb-1">
              <span>Milan — Via Montenapoleone</span>
              <span className="text-[#A37B34] font-medium">By Appt</span>
            </li>
            <li className="flex justify-between border-b border-[#E5DDCB] pb-1">
              <span>New York — Soho Studio</span>
              <span className="text-[#A37B34] font-medium">By Appt</span>
            </li>
          </ul>
        </div>

        {/* Guarantees & Certifications */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-[#1C1917] mb-4 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A37B34]" />
            Atelier Commitments
          </h4>
          <ul className="space-y-2 text-xs text-[#57534E]">
            <li>• 100% FSC® Certified Sustainable Timber</li>
            <li>• Lifetime Structural Hand-Frame Warranty</li>
            <li>• Low-VOC Non-Toxic Organic Finishes</li>
            <li>• Zero-Waste Circular Craft Protocol</li>
          </ul>
        </div>

        {/* Private Lookbook Newsletter */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-[#1C1917] mb-4">
            Private Lookbook
          </h4>
          <p className="text-xs text-[#57534E] mb-3">
            Receive exclusive seasonal material swatch drops & limited edition releases.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Architect / Collector Email"
              className="bg-white border border-[#D4C4AE]/60 rounded-lg px-3 py-2 text-xs text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#A37B34] flex-1 shadow-sm"
            />
            <button className="bg-[#A37B34] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#785A1D] transition-colors flex items-center gap-1 shadow-sm">
              <span>Join</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[#E5DDCB] flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#78716C] gap-4">
        <p>© 2026 LUMIÈRE ATELIER. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#A37B34] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#A37B34] transition-colors">Material Certifications</a>
          <a href="#" className="hover:text-[#A37B34] transition-colors">Architectural Portal</a>
        </div>
      </div>
    </footer>
  );
};
