import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-[#F4ECE1]/60 border-t border-[#CBB09C]/40 text-[#57534E] py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Row 1: Minimalist Brand Header */}
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

          <span className="text-xs text-[#57534E] font-light">
            Paris • Milan • New York
          </span>
        </div>

        {/* Row 2: Private Salons & Minimalist Lookbook */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-6 border-b border-[#CBB09C]/30">
          
          {/* Salons Row */}
          <div className="md:col-span-6 flex items-center gap-4 text-xs text-[#57534E]">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#9E7E66] font-semibold flex items-center gap-1.5 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#9E7E66]" />
              Salons
            </span>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span className="text-[#2C221A] font-medium">Paris <span className="text-[#9E7E66] text-[10px] ml-0.5">By Appt</span></span>
              <span className="text-[#2C221A] font-medium">Milan <span className="text-[#9E7E66] text-[10px] ml-0.5">By Appt</span></span>
              <span className="text-[#2C221A] font-medium">New York <span className="text-[#9E7E66] text-[10px] ml-0.5">By Appt</span></span>
            </div>
          </div>

          {/* Minimal Lookbook Email Input */}
          <div className="md:col-span-6 flex items-center justify-start md:justify-end gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#9E7E66] font-semibold shrink-0">
              Lookbook
            </span>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 w-full max-w-xs">
              <input
                type="email"
                placeholder="Architect / Collector Email"
                className="bg-white/90 border border-[#CBB09C]/50 rounded-xl px-3.5 py-2 text-xs text-[#2C221A] placeholder-[#78716C] focus:outline-none focus:border-[#9E7E66] flex-1 shadow-xs"
              />
              <button className="bg-[#9E7E66] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#7A5E48] transition-colors flex items-center gap-1 shadow-xs shrink-0">
                <span>Join</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Row 3: Minimal Legal & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#78716C] gap-4">
          <p>© 2026 LUMIÈRE ATELIER. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#9E7E66] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#9E7E66] transition-colors">Certifications</a>
            <a href="#" className="hover:text-[#9E7E66] transition-colors">Portal</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
