import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Clock, Award } from 'lucide-react';

interface HeroProps {
  onExploreMaterials: () => void;
  onExploreCollection: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMaterials, onExploreCollection }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden">
      
      {/* Subtle Ambient Warm Gold Halo Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A37B34]/12 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Luxury Pill Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-gold mb-8 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-[#A37B34] animate-spin-slow" />
        <span className="text-xs uppercase tracking-[0.2em] text-[#A37B34] font-semibold">
          2026 Haute Atelier Collection
        </span>
      </div>

      {/* Main Kinetic Typography Headline */}
      <div className="max-w-5xl text-center space-y-6 z-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-luxury font-extralight tracking-tight leading-[1.08] text-[#1C1917]">
          Architectural Pureness.{' '}
          <span className="block font-normal italic gold-gradient-text">
            Sculpted for Generations.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#44403C] font-light leading-relaxed tracking-wide">
          Handcrafted bespoke haute furniture merging rare organic timbers, tactile Italian bouclé textiles, and precision PVD brushed champagne brass.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 z-10">
        <button
          onClick={onExploreMaterials}
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white text-xs font-bold uppercase tracking-[0.18em] shadow-xl hover:shadow-[#A37B34]/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
        >
          <span>Explore Material Atelier</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={onExploreCollection}
          className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel border border-[#D4C4AE]/60 text-[#1C1917] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-white hover:border-[#A37B34]/50 transition-all duration-300 shadow-sm"
        >
          View 2026 Bento Showcase
        </button>
      </div>

      {/* Craftsmanship Metrics Ticker */}
      <div className="w-full max-w-6xl mt-20 pt-10 border-t border-[#E5DDCB]/80 grid grid-cols-2 md:grid-cols-4 gap-6 z-10">
        <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 border border-[#D4C4AE]/40 bg-white/80 shadow-sm">
          <div className="p-3 rounded-xl bg-[#A37B34]/10 text-[#A37B34]">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-2xl font-serif-luxury font-bold text-[#1C1917]">480+</span>
            <span className="text-[11px] uppercase tracking-widest text-[#57534E] font-medium">Hours per Piece</span>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 border border-[#D4C4AE]/40 bg-white/80 shadow-sm">
          <div className="p-3 rounded-xl bg-[#A37B34]/10 text-[#A37B34]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-2xl font-serif-luxury font-bold text-[#1C1917]">100%</span>
            <span className="text-[11px] uppercase tracking-widest text-[#57534E] font-medium">FSC Certified Timber</span>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 border border-[#D4C4AE]/40 bg-white/80 shadow-sm">
          <div className="p-3 rounded-xl bg-[#A37B34]/10 text-[#A37B34]">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-2xl font-serif-luxury font-bold text-[#1C1917]">110k</span>
            <span className="text-[11px] uppercase tracking-widest text-[#57534E] font-medium">Martindale Rubs</span>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 border border-[#D4C4AE]/40 bg-white/80 shadow-sm">
          <div className="p-3 rounded-xl bg-[#A37B34]/10 text-[#A37B34]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-2xl font-serif-luxury font-bold text-[#1C1917]">9H</span>
            <span className="text-[11px] uppercase tracking-widest text-[#57534E] font-medium">PVD Mohs Hardness</span>
          </div>
        </div>
      </div>

    </section>
  );
};
