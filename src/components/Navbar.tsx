import React from 'react';
import { Bookmark, Compass, Layers, PhoneCall, Box, Grid, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentTab: 'home' | 'catalog' | 'materials' | 'studio' | 'about';
  setCurrentTab: (tab: 'home' | 'catalog' | 'materials' | 'studio' | 'about') => void;
  savedSwatchesCount: number;
  onOpenSavedDrawer: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  savedSwatchesCount,
  onOpenSavedDrawer,
  onOpenConsultation,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between border border-[#D4C4AE]/40 shadow-xl backdrop-blur-xl bg-white/85">
        
        {/* Brand Logo & Monogram */}
        <button 
          onClick={() => setCurrentTab('home')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#785A1D] via-[#A37B34] to-[#C5A059] p-[1px] shadow-sm group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#FAF7F2] rounded-full flex items-center justify-center">
              <span className="font-serif-luxury font-bold text-sm tracking-tighter gold-gradient-text">LA</span>
            </div>
          </div>
          <div>
            <span className="font-serif-luxury font-semibold text-lg tracking-widest text-[#1C1917] block leading-none group-hover:text-[#A37B34] transition-colors">
              LUMIÈRE ATELIER
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#A37B34] font-medium block mt-1">
              HAUTE ATELIER
            </span>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F3EFE6]/80 rounded-full px-3 py-1 border border-[#E5DDCB]/70 shadow-inner">
          <button
            onClick={() => setCurrentTab('home')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
              currentTab === 'home'
                ? 'bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white font-semibold shadow-md'
                : 'text-[#57534E] hover:text-[#1C1917] hover:bg-white/80'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            Home
          </button>

          <button
            onClick={() => setCurrentTab('catalog')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
              currentTab === 'catalog'
                ? 'bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white font-semibold shadow-md'
                : 'text-[#57534E] hover:text-[#1C1917] hover:bg-white/80'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            Catalog
          </button>

          <button
            onClick={() => setCurrentTab('studio')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
              currentTab === 'studio'
                ? 'bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white font-semibold shadow-md'
                : 'text-[#57534E] hover:text-[#1C1917] hover:bg-white/80'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            3D Studio
          </button>

          <button
            onClick={() => setCurrentTab('materials')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
              currentTab === 'materials'
                ? 'bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white font-semibold shadow-md'
                : 'text-[#57534E] hover:text-[#1C1917] hover:bg-white/80'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Materials
          </button>

          <button
            onClick={() => setCurrentTab('about')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
              currentTab === 'about'
                ? 'bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white font-semibold shadow-md'
                : 'text-[#57534E] hover:text-[#1C1917] hover:bg-white/80'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Craftsmanship
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Saved Swatches Button */}
          <button
            onClick={onOpenSavedDrawer}
            className="relative p-2.5 rounded-full bg-white/80 border border-[#D4C4AE]/60 text-[#1C1917] hover:text-[#A37B34] hover:border-[#A37B34]/60 transition-all group shadow-sm"
            title="Saved Material Swatches"
          >
            <Bookmark className="w-4 h-4 group-hover:scale-110 transition-transform" />
            {savedSwatchesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#A37B34] text-white text-[10px] font-bold flex items-center justify-center animate-pulse shadow-md">
                {savedSwatchesCount}
              </span>
            )}
          </button>

          {/* Book Consultation CTA */}
          <button
            onClick={onOpenConsultation}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-[#A37B34]/40 bg-[#A37B34]/10 text-[#A37B34] text-xs font-medium tracking-wider uppercase hover:bg-[#A37B34] hover:text-white transition-all duration-300 shadow-sm hover:shadow-[#A37B34]/20"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Private Consultation</span>
          </button>
        </div>

      </div>
    </header>
  );
};
