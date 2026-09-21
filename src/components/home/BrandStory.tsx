import React, { useState } from 'react';
import { Hammer, Sparkles, CheckCircle2 } from 'lucide-react';

export const BrandStory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      step: '01',
      title: 'Rare Material Sourcing',
      subtitle: 'Alpine Leathers & Certified Timbers',
      description: 'Baby alpaca wool, Tuscan aniline hides, and FSC® certified dark walnut.',
      badge: '100% Traceable',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      hotspot: { x: '35%', y: '45%', label: 'Hand-inspected Alpine Grain' }
    },
    {
      step: '02',
      title: 'Artisanal Hand Joinery',
      subtitle: 'Mortise & Tenon Architecture',
      description: 'Assembled with blind mortise joints and organic animal-hide glue.',
      badge: 'Zero Synthetics',
      image: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1200&q=80',
      hotspot: { x: '60%', y: '50%', label: 'Blind Mortise Precision Joint' }
    },
    {
      step: '03',
      title: 'Titanium PVD & Hand Oiling',
      subtitle: '9H Barrier & Beeswax Satin',
      description: 'Metals receive vacuum PVD coating; timbers hand-rubbed with beeswax.',
      badge: '9H Scratch Resistance',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      hotspot: { x: '45%', y: '40%', label: 'Hand-rubbed Organic Wax Satin' }
    },
    {
      step: '04',
      title: 'Architectural Bespoke Tailoring',
      subtitle: 'Custom Scale & Spec Accommodations',
      description: 'Tailored dimensions, finish sheens, and stitch patterns for luxury spaces.',
      badge: 'Bespoke Specs',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      hotspot: { x: '50%', y: '60%', label: 'Double Saddle Stitch Detail' }
    }
  ];

  return (
    <section className="relative z-10 py-20 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#CBB09C]/50">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#9E7E66] font-semibold">
          02 / BRAND STORY & CRAFTSMANSHIP
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light text-[#2C221A]">
          The Art of Uncompromising Craftsmanship
        </h2>
        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
          Mastery and heritage techniques behind every curve and seam.
        </p>
      </div>

      {/* Interactive Story Showcase - Equal Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Equal Cards Navigation */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3.5 h-[480px]">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.step}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between h-[108px] ${
                activeTab === idx
                  ? 'glass-panel-gold border-[#9E7E66]/60 shadow-md bg-white/95 ring-1 ring-[#9E7E66]/30'
                  : 'glass-panel border-[#CBB09C]/40 bg-white/70 hover:bg-white/90'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#9E7E66] font-bold">
                    {pillar.step}
                  </span>
                  <h3 className="text-base font-serif-luxury font-medium text-[#2C221A]">
                    {pillar.title}
                  </h3>
                </div>
                <span className={`text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full border font-mono ${
                  activeTab === idx ? 'bg-[#9E7E66] text-white font-semibold border-transparent' : 'text-[#57534E] border-[#CBB09C]/50'
                }`}>
                  {pillar.badge}
                </span>
              </div>

              <p className="text-xs text-[#57534E] font-light line-clamp-1">
                {pillar.subtitle} — {pillar.description}
              </p>

              <div className="flex items-center gap-1.5 text-[#9E7E66] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7E66] shrink-0" />
                <span className="text-[10px] tracking-wide uppercase font-semibold">
                  {activeTab === idx ? 'Selected Pillar' : 'Click to inspect'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Interactive Image Preview */}
        <div className="lg:col-span-7 relative rounded-3xl overflow-hidden glass-panel border border-[#CBB09C]/50 h-[480px] shadow-xl group">
          <img
            src={pillars[activeTab].image}
            alt={pillars[activeTab].title}
            className="w-full h-full object-cover filter brightness-95 transition-all duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#2C221A]/70 via-transparent to-black/10" />

          {/* Hotspot Pin */}
          <div
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group/pin"
            style={{ left: pillars[activeTab].hotspot.x, top: pillars[activeTab].hotspot.y }}
          >
            <div className="relative">
              <div className="w-6 h-6 rounded-full bg-[#9E7E66] animate-ping opacity-75 absolute inset-0" />
              <div className="w-6 h-6 rounded-full bg-[#9E7E66] border-2 border-white flex items-center justify-center text-white shadow-lg relative z-10">
                <Sparkles className="w-3 h-3" />
              </div>

              {/* Hotspot Tooltip */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/95 border border-[#9E7E66]/40 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] text-[#2C221A] whitespace-nowrap shadow-xl opacity-90 group-hover/pin:opacity-100 transition-opacity">
                <span className="font-semibold text-[#9E7E66]">Inspect:</span> {pillars[activeTab].hotspot.label}
              </div>
            </div>
          </div>

          {/* Overlay Badge */}
          <div className="absolute bottom-6 left-6 right-6 z-10 glass-panel p-4 rounded-2xl border border-white/40 bg-white/85 backdrop-blur-md flex items-center justify-between shadow-md">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#9E7E66] font-semibold block">Craftsmanship Feature</span>
              <span className="text-sm font-serif-luxury font-semibold text-[#2C221A]">
                {pillars[activeTab].title}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#57534E]">
              <Hammer className="w-4 h-4 text-[#9E7E66]" />
              <span>Handcrafted in Atelier</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
