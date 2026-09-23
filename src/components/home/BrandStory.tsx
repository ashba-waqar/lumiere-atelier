import React, { useState } from 'react';

export const BrandStory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      step: '01',
      title: 'Rare Material Sourcing',
      badge: '100% Traceable',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    },
    {
      step: '02',
      title: 'Artisanal Hand Joinery',
      badge: 'Zero Synthetics',
      image: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1200&q=80',
    },
    {
      step: '03',
      title: 'Titanium PVD & Hand Oiling',
      badge: '9H Scratch Resistance',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    },
    {
      step: '04',
      title: 'Architectural Bespoke Tailoring',
      badge: 'Bespoke Specs',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    }
  ];

  return (
    <section className="relative z-10 py-20 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#CBB09C]/50">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light text-[#2C221A]">
          The Art of Uncompromising Craftsmanship
        </h2>
      </div>

      {/* Interactive Story Showcase - Equal Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Equal Cards Navigation */}
        <div className="lg:col-span-5 grid grid-rows-4 gap-4 h-[540px]">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.step}
              onClick={() => setActiveTab(idx)}
              className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center min-h-0 w-full ${
                activeTab === idx
                  ? 'glass-panel-gold border-[#9E7E66]/60 shadow-md bg-white/95 ring-1 ring-[#9E7E66]/30'
                  : 'glass-panel border-[#CBB09C]/40 bg-white/70 hover:bg-white/90'
              }`}
            >
              <div className="flex items-center justify-between gap-2 w-full min-w-0">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <span className="text-sm font-mono text-[#9E7E66] font-bold shrink-0">
                    {pillar.step}
                  </span>
                  <h3 className="text-lg font-serif-luxury font-medium text-[#2C221A] truncate">
                    {pillar.title}
                  </h3>
                </div>
                <span className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border font-mono shrink-0 whitespace-nowrap ${
                  activeTab === idx ? 'bg-[#9E7E66] text-white font-semibold border-transparent' : 'text-[#57534E] border-[#CBB09C]/50'
                }`}>
                  {pillar.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Interactive Image Preview */}
        <div className="lg:col-span-7 relative rounded-3xl overflow-hidden glass-panel border border-[#CBB09C]/50 h-[540px] shadow-xl group">
          <img
            src={pillars[activeTab].image}
            alt={pillars[activeTab].title}
            className="w-full h-full object-cover filter brightness-95 transition-all duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#2C221A]/70 via-transparent to-black/10" />
        </div>

      </div>

    </section>
  );
};

