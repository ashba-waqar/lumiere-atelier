import React from 'react';
import { ArrowUpRight, Sofa, Utensils, Lamp, Archive } from 'lucide-react';

interface BentoGridProps {
  onSelectCategory: (category: string) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'seating',
      title: 'Sculptural Seating',
      tagline: 'Alpaca Bouclé & Italian Leather',
      piecesCount: '24 Bespoke Editions',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      icon: Sofa,
      colSpan: 'md:col-span-6',
      rowSpan: 'h-[360px]'
    },
    {
      id: 'tables',
      title: 'Monolithic Tables',
      tagline: 'Dark Walnut & Travertine Stone',
      piecesCount: '16 Editions',
      image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=800&q=80',
      icon: Utensils,
      colSpan: 'md:col-span-6',
      rowSpan: 'h-[360px]'
    },
    {
      id: 'lighting',
      title: 'Architectural Lighting',
      tagline: 'Amber Glass & Champagne Brass',
      piecesCount: '18 Luminaires',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
      icon: Lamp,
      colSpan: 'md:col-span-6',
      rowSpan: 'h-[360px]'
    },
    {
      id: 'casegoods',
      title: 'Fluted Casegoods & Credenzas',
      tagline: 'Bleached Oak & Anodized Aluminum',
      piecesCount: '12 Master Works',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      icon: Archive,
      colSpan: 'md:col-span-6',
      rowSpan: 'h-[360px]'
    }
  ];

  return (
    <section id="bento-showcase" className="relative z-10 py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#9E7E66] block mb-2 font-semibold">
            01 / CATEGORY SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light text-[#2C221A]">
            Sculpted Furniture Architecture
          </h2>
        </div>
        <p className="max-w-xs text-xs sm:text-sm text-[#57534E] font-light leading-relaxed">
          Bespoke editions handcrafted with master joinery and rare sustainable materials.
        </p>
      </div>

      {/* Equal Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {categories.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`${cat.colSpan} ${cat.rowSpan} group relative rounded-3xl overflow-hidden glass-card cursor-pointer border border-[#CBB09C]/50 hover:border-[#9E7E66]/80 transition-all duration-500 shadow-sm`}
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C221A]/85 via-[#2C221A]/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Top Bar */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-[#9E7E66] bg-white/80 group-hover:bg-[#9E7E66] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-5 h-5" />
                </div>

                <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full glass-panel text-white bg-black/30 backdrop-blur-md border border-white/20 font-medium">
                  {cat.piecesCount}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-serif-luxury font-semibold text-white group-hover:text-[#F4ECE1] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-white/80 font-light">
                    {cat.tagline}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#9E7E66] group-hover:border-[#9E7E66] group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
