import React from 'react';
import { MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-[#F4ECE1]/60 border-t border-[#CBB09C]/40 text-[#57534E] py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto space-y-7">
        
        {/* Row 1: Brand Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#CBB09C]/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#9E7E66] flex items-center justify-center text-white font-bold font-serif-luxury text-sm shadow-sm">
              LA
            </div>
            <div>
              <span className="font-serif-luxury text-lg font-bold tracking-widest text-[#2C221A] block leading-tight">
                LUMIÈRE ATELIER
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#9E7E66] font-mono block">
                Haute Furniture Atelier
              </span>
            </div>
          </div>

          <p className="text-xs text-[#57534E] font-light">
            Bespoke Architectural Furniture & Rare Sustainable Materials
          </p>
        </div>

        {/* Row 2: Dedicated Private Salons Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#CBB09C]/30 text-xs">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#9E7E66] font-semibold shrink-0">
            <MapPin className="w-3.5 h-3.5 text-[#9E7E66]" />
            <span>Private Salons</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-xs w-full md:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-2">
              <span className="text-[#2C221A] font-medium">Paris — Place Vendôme</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E7E66] bg-[#9E7E66]/10 px-2 py-0.5 rounded-full border border-[#9E7E66]/20 font-semibold">By Appt</span>
            </div>
            
            <span className="hidden sm:inline text-[#CBB09C]">•</span>

            <div className="flex items-center gap-2">
              <span className="text-[#2C221A] font-medium">Milan — Via Montenapoleone</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E7E66] bg-[#9E7E66]/10 px-2 py-0.5 rounded-full border border-[#9E7E66]/20 font-semibold">By Appt</span>
            </div>

            <span className="hidden sm:inline text-[#CBB09C]">•</span>

            <div className="flex items-center gap-2">
              <span className="text-[#2C221A] font-medium">New York — Soho Studio</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E7E66] bg-[#9E7E66]/10 px-2 py-0.5 rounded-full border border-[#9E7E66]/20 font-semibold">By Appt</span>
            </div>
          </div>
        </div>

        {/* Row 3: Dedicated Private Lookbook Newsletter Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#CBB09C]/30 text-xs">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#9E7E66] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#9E7E66]" />
              <span>Private Lookbook</span>
            </div>
            <p className="text-[11px] text-[#57534E] font-light">
              Receive seasonal material swatch drops & limited edition releases.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 w-full md:w-auto max-w-md">
            <input
              type="email"
              placeholder="Architect / Collector Email"
              className="bg-white/90 border border-[#CBB09C]/50 rounded-xl px-3.5 py-2 text-xs text-[#2C221A] placeholder-[#78716C] focus:outline-none focus:border-[#9E7E66] flex-1 md:w-64 shadow-xs"
            />
            <button className="bg-[#9E7E66] text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-[#7A5E48] transition-colors flex items-center gap-1 shadow-xs shrink-0">
              <span>Join</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Row 4: Minimal Legal & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#78716C] gap-4">
          <p>© 2026 LUMIÈRE ATELIER. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#9E7E66] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#9E7E66] transition-colors">Material Certifications</a>
            <a href="#" className="hover:text-[#9E7E66] transition-colors">Architectural Portal</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
