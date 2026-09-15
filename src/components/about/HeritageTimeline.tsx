import React from 'react';
import { Sparkles } from 'lucide-react';

export const HeritageTimeline: React.FC = () => {
  const milestones = [
    {
      year: '1894',
      title: 'Florentine Tannery & Wood Atelier Foundation',
      location: 'Florence, Italy',
      description: 'Founded by master leather artisan Giovanni Lumière as a bespoke saddle and timber chest guild supplying European nobility.',
      tag: 'Heritage Guild'
    },
    {
      year: '1950',
      title: 'Mid-Century Organic Ergonomics Era',
      location: 'Milan & Paris',
      description: 'Pioneered hand-carved curved wooden frames and blind mortise-and-tenon joinery without exposed metallic fasteners.',
      tag: 'Ergonomic Innovation'
    },
    {
      year: '2010',
      title: '100% FSC® Certified Sustainable Commitment',
      location: 'Pennsylvania & Småland',
      description: 'Enforced 100% traceable timber harvesting protocols, vegetable-tanned leathers, and zero-VOC organic wax finishes.',
      tag: 'Circular Protocol'
    },
    {
      year: '2026',
      title: 'Digital Atelier & 360° 3D Studio Configurator',
      location: 'Global Salons',
      description: 'Merged traditional centuries-old hand craftsmanship with real-time WebGL PBR 3D material customization for architects worldwide.',
      tag: 'Modern Haute Atelier'
    }
  ];

  return (
    <section className="relative z-10 py-24 px-6 sm:px-12 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#A37B34] font-semibold">
          130+ YEARS OF EXCELLENCE
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif-luxury font-light text-[#1C1917]">
          Chronicles of Heritage Craftsmanship
        </h2>
        <p className="text-xs sm:text-sm text-[#57534E] font-light leading-relaxed">
          From a 19th-century Florentine saddlery to a global haute furniture atelier, our dedication to organic form remains unbroken.
        </p>
      </div>

      {/* Timeline Grid */}
      <div className="relative space-y-8 before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-[#A37B34] before:via-[#A37B34]/40 before:to-transparent hidden sm:block">
        {milestones.map((m, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={m.year}
              className={`relative flex items-center justify-between ${
                isEven ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Content Card */}
              <div className="w-[45%] glass-panel p-6 rounded-3xl border border-[#D4C4AE]/60 bg-white/90 hover:border-[#A37B34]/50 transition-all duration-300 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif-luxury font-bold text-[#A37B34] font-mono">
                    {m.year}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full bg-[#A37B34]/15 text-[#A37B34] border border-[#A37B34]/30 font-semibold">
                    {m.tag}
                  </span>
                </div>
                <h3 className="text-lg font-serif-luxury font-semibold text-[#1C1917]">
                  {m.title}
                </h3>
                <span className="text-[11px] text-[#57534E] block font-light">{m.location}</span>
                <p className="text-xs text-[#44403C] leading-relaxed font-light pt-1">
                  {m.description}
                </p>
              </div>

              {/* Center Timeline Node Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FAF7F2] border-2 border-[#A37B34] flex items-center justify-center text-[#A37B34] shadow-md z-10">
                <Sparkles className="w-3.5 h-3.5" />
              </div>

              {/* Empty Opposite Side */}
              <div className="w-[45%]" />
            </div>
          );
        })}
      </div>

      {/* Mobile Stacked View */}
      <div className="space-y-6 sm:hidden">
        {milestones.map((m) => (
          <div key={m.year} className="glass-panel p-6 rounded-3xl border border-[#D4C4AE]/60 bg-white/90 space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xl font-serif-luxury font-bold text-[#A37B34] font-mono">{m.year}</span>
              <span className="text-[9px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-[#A37B34]/15 text-[#A37B34] font-semibold">
                {m.tag}
              </span>
            </div>
            <h3 className="text-base font-serif-luxury font-semibold text-[#1C1917]">{m.title}</h3>
            <p className="text-xs text-[#57534E] font-light">{m.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
};
