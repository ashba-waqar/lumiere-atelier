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
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 flex flex-col border border-[#CBB09C]/40 shadow-xl backdrop-blur-xl bg-[#FAF6EE]/85">
        
        <div className="flex items-center justify-between w-full">
          {/* Brand Logo & Monogram */}
          <button 
            onClick={() => handleSelectTab('home')}
            className="flex items-center gap-2.5 sm:gap-3 group text-left focus:outline-none"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#7A5E48] via-[#9E7E66] to-[#CBB09C] p-[1px] shadow-sm group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <div className="w-full h-full bg-[#FAF6EE] rounded-full flex items-center justify-center">
                <span className="font-serif-luxury font-bold text-xs sm:text-sm tracking-tighter gold-gradient-text">LA</span>
              </div>
            </div>
            <div>
              <span className="font-serif-luxury font-semibold text-base sm:text-lg tracking-widest text-[#2C221A] block leading-none group-hover:text-[#9E7E66] transition-colors">
                ALURIA LIVINGS
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#9E7E66] font-medium block mt-0.5 sm:mt-1">
                LUXURY LIVING
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F4ECE1]/80 rounded-full px-3 py-1 border border-[#CBB09C]/40 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#7A5E48] via-[#9E7E66] to-[#CBB09C] text-white font-semibold shadow-md'
                      : 'text-[#57534E] hover:text-[#2C221A] hover:bg-white/80'
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
              className="relative p-2 sm:p-2.5 rounded-full bg-white/80 border border-[#CBB09C]/50 text-[#2C221A] hover:text-[#9E7E66] hover:border-[#9E7E66]/60 transition-all group shadow-sm"
              title="Saved Material Swatches"
            >
              <Bookmark className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {savedSwatchesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#9E7E66] text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center animate-pulse shadow-md">
                  {savedSwatchesCount}
                </span>
              )}
            </button>

            {/* Book Consultation CTA (Desktop) */}
            <button
              onClick={onOpenConsultation}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-[#9E7E66]/40 bg-[#9E7E66]/10 text-[#9E7E66] text-xs font-medium tracking-wider uppercase hover:bg-[#9E7E66] hover:text-white transition-all duration-300 shadow-sm hover:shadow-[#9E7E66]/20"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Private Consultation</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-full bg-white/80 border border-[#CBB09C]/50 text-[#2C221A] hover:text-[#9E7E66] hover:border-[#9E7E66]/60 transition-all shadow-sm focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#9E7E66]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden w-full pt-3 mt-3 border-t border-[#CBB09C]/40 flex flex-col gap-1.5 animate-fadeIn">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs font-medium tracking-wider uppercase transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-[#7A5E48] via-[#9E7E66] to-[#CBB09C] text-white font-semibold shadow-md shadow-[#9E7E66]/20'
                      : 'text-[#57534E] hover:text-[#2C221A] hover:bg-[#F4ECE1]/80 bg-[#FAF6EE]/60 border border-[#CBB09C]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#9E7E66]'}`} />
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
              className="w-full mt-2 px-4 py-2.5 rounded-xl border border-[#9E7E66] bg-gradient-to-r from-[#9E7E66] to-[#CBB09C] text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md"
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
