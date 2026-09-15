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
      tagline: 'Textured Alpaca Bouclé & Italian Aniline Leathers',
      piecesCount: '24 Bespoke Editions',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      icon: Sofa,
      colSpan: 'md:col-span-8',
      rowSpan: 'h-[440px]'
    },
    {
      id: 'tables',
      title: 'Monolithic Tables',
      tagline: 'American Dark Walnut & Travertine Stone',
      piecesCount: '16 Editions',
      image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=800&q=80',
      icon: Utensils,
      colSpan: 'md:col-span-4',
      rowSpan: 'h-[440px]'
    },
    {
      id: 'lighting',
      title: 'Architectural Lighting',
      tagline: 'Hand-blown Amber Glass & Champagne Brass',
      piecesCount: '18 Luminaires',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
      icon: Lamp,
      colSpan: 'md:col-span-4',
      rowSpan: 'h-[380px]'
    },
    {
      id: 'casegoods',
      title: 'Fluted Casegoods & Credenzas',
      tagline: 'Solid Bleached Oak & PVD Anodized Aluminum',
      piecesCount: '12 Master Works',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      icon: Archive,
      colSpan: 'md:col-span-8',
      rowSpan: 'h-[380px]'
    }
  ];

  return (
    <section id="bento-showcase" className="relative z-10 py-24 px-6 sm:px-12 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#A37B34] block mb-2 font-semibold">
            01 / CATEGORY SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-light text-[#1C1917]">
            Sculpted Furniture Architecture
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-[#57534E] font-light leading-relaxed">
          Each piece is individually handcrafted to order, combining master artisan joinery with rare sustainable materials.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {categories.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`${cat.colSpan} ${cat.rowSpan} group relative rounded-3xl overflow-hidden glass-card cursor-pointer border border-[#D4C4AE]/50 hover:border-[#A37B34]/60 transition-all duration-500 shadow-sm`}
            >
              {/* Background Image with Zoom Effect */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-95 contrast-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/85 via-[#1C1917]/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Top Bar with Icon & Count */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-[#A37B34] bg-white/80 group-hover:bg-[#A37B34] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-5 h-5" />
                </div>

                <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full glass-panel text-white bg-black/30 backdrop-blur-md border border-white/20 font-medium">
                  {cat.piecesCount}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-semibold text-white group-hover:text-[#F5E8CE] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-white/80 font-light">
                    {cat.tagline}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#A37B34] group-hover:border-[#A37B34] group-hover:scale-110 transition-all duration-300">
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
