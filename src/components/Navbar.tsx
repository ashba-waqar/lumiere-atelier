import React, { useState } from 'react';
import { Bookmark, Compass, Layers, PhoneCall, Box, Grid, ShieldCheck, Menu, X } from 'lucide-react';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as const, label: 'Home', icon: Compass },
    { id: 'catalog' as const, label: 'Catalog', icon: Grid },
    { id: 'studio' as const, label: '3D Studio', icon: Box },
    { id: 'materials' as const, label: 'Materials', icon: Layers },
    { id: 'about' as const, label: 'Craftsmanship', icon: ShieldCheck },
  ];

  const handleSelectTab = (tab: 'home' | 'catalog' | 'materials' | 'studio' | 'about') => {
    setCurrentTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-8 py-3 sm:py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 flex flex-col border border-[#D4C4AE]/40 shadow-xl backdrop-blur-xl bg-white/85">
        
        <div className="flex items-center justify-between w-full">
          {/* Brand Logo & Monogram */}
          <button 
            onClick={() => handleSelectTab('home')}
            className="flex items-center gap-2.5 sm:gap-3 group text-left focus:outline-none"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#785A1D] via-[#A37B34] to-[#C5A059] p-[1px] shadow-sm group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <div className="w-full h-full bg-[#FAF7F2] rounded-full flex items-center justify-center">
                <span className="font-serif-luxury font-bold text-xs sm:text-sm tracking-tighter gold-gradient-text">LA</span>
              </div>
            </div>
            <div>
              <span className="font-serif-luxury font-semibold text-base sm:text-lg tracking-widest text-[#1C1917] block leading-none group-hover:text-[#A37B34] transition-colors">
                LUMIÈRE ATELIER
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#A37B34] font-medium block mt-0.5 sm:mt-1">
                HAUTE ATELIER
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F3EFE6]/80 rounded-full px-3 py-1 border border-[#E5DDCB]/70 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white font-semibold shadow-md'
                      : 'text-[#57534E] hover:text-[#1C1917] hover:bg-white/80'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Saved Swatches Button */}
            <button
              onClick={onOpenSavedDrawer}
              className="relative p-2 sm:p-2.5 rounded-full bg-white/80 border border-[#D4C4AE]/60 text-[#1C1917] hover:text-[#A37B34] hover:border-[#A37B34]/60 transition-all group shadow-sm"
              title="Saved Material Swatches"
            >
              <Bookmark className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {savedSwatchesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#A37B34] text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center animate-pulse shadow-md">
                  {savedSwatchesCount}
                </span>
              )}
            </button>

            {/* Book Consultation CTA (Desktop) */}
            <button
              onClick={onOpenConsultation}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-[#A37B34]/40 bg-[#A37B34]/10 text-[#A37B34] text-xs font-medium tracking-wider uppercase hover:bg-[#A37B34] hover:text-white transition-all duration-300 shadow-sm hover:shadow-[#A37B34]/20"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Private Consultation</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-full bg-white/80 border border-[#D4C4AE]/60 text-[#1C1917] hover:text-[#A37B34] hover:border-[#A37B34]/60 transition-all shadow-sm focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#A37B34]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden w-full pt-3 mt-3 border-t border-[#D4C4AE]/40 flex flex-col gap-1.5 animate-fadeIn">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs font-medium tracking-wider uppercase transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white font-semibold shadow-md shadow-[#A37B34]/20'
                      : 'text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3EFE6]/80 bg-[#FAF7F2]/60 border border-[#E5DDCB]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#A37B34]'}`} />
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  )}
                </button>
              );
            })}

            {/* Mobile Consultation Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full mt-2 px-4 py-2.5 rounded-xl border border-[#A37B34] bg-gradient-to-r from-[#A37B34] to-[#C5A059] text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Private Consultation</span>
            </button>
          </div>
        )}

      </div>
    </header>
  );
};
