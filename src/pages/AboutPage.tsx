import React from 'react';
import { HeritageTimeline } from '../components/about/HeritageTimeline';
import { ArtisanProfiles } from '../components/about/ArtisanProfiles';
import { Footer } from '../components/Footer';
import { PhoneCall, Box } from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: () => void;
  onExploreStudio: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenConsultation,
  onExploreStudio,
}) => {
  return (
    <div className="min-h-screen pt-28 pb-12">
      
      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-20 text-center space-y-6">
        <h1 className="text-4xl sm:text-7xl font-serif-luxury font-extralight text-[#1C1917] max-w-4xl mx-auto leading-tight">
          Where Heritage Mastery Meets{' '}
          <span className="gold-gradient-text font-normal italic">Organic Modernism.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#44403C] font-light leading-relaxed">
          Founded in Florence over a century ago, ALURIA LIVINGS creates heirloom furniture pieces that unite ethically harvested rare timbers, Italian upholstery, and precision PVD metallurgy.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white text-xs font-bold uppercase tracking-widest shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Book Private Salon Consultation</span>
          </button>

          <button
            onClick={onExploreStudio}
            className="px-8 py-3.5 rounded-full glass-panel border border-[#D4C4AE]/60 text-[#1C1917] text-xs font-semibold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2 shadow-sm"
          >
            <Box className="w-4 h-4 text-[#A37B34]" />
            <span>Launch 3D Studio Configurator</span>
          </button>
        </div>
      </div>

      {/* Craftsmanship Visual Showcase Video/Image Overlay */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-24">
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-[#D4C4AE]/60 h-[480px] sm:h-[550px] shadow-xl group">
          <img
            src="https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1600&q=90"
            alt="Hand carving dark walnut"
            className="w-full h-full object-cover filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/85 via-[#1C1917]/30 to-black/10" />

          <div className="absolute bottom-10 left-10 right-10 max-w-2xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F5E8CE] font-semibold block">
              ZERO SYNTHETIC FASTENERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-light text-white leading-tight">
              Blind Mortise & Tenon Wood Joinery
            </h2>
            <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
              Every chair and desk frame is chiseled by hand with tolerances measured in sub-millimeters. Assembled with organic animal glues that ensure structural elasticity across centuries.
            </p>
          </div>
        </div>
      </div>

      {/* Heritage Timeline */}
      <HeritageTimeline />

      {/* Artisan Profiles */}
      <ArtisanProfiles />

      <Footer />
    </div>
  );
};
