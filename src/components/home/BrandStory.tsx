import React, { useState } from 'react';
import { Hammer, Sparkles, CheckCircle2 } from 'lucide-react';

export const BrandStory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      step: '01',
      title: 'Rare Material Sourcing',
      subtitle: 'Ethical Alpine Leathers & Certified Timbers',
      description: 'We source baby alpaca wool directly from high-altitude Biella mills, full-grain aniline hides from Tuscan vegetable tanneries, and FSC® certified dark walnut logs felled during sustainable forest thinning.',
      highlights: [
        '100% Traceable origin credentials',
        'Zero toxic heavy metals in tannery effluent',
        'Hand-inspected grain figure mapping'
      ],
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      hotspot: { x: '35%', y: '45%', label: 'Hand-inspected Alpine Grain' }
    },
    {
      step: '02',
      title: 'Artisanal Hand Joinery',
      subtitle: 'Traditional Mortise & Tenon Architecture',
      description: 'Every frame is assembled without metallic fasteners where possible, using blind mortise-and-tenon joints secured with organic animal-hide glue for structural integrity that spans generations.',
      highlights: [
        'Zero reliance on synthetic adhesives',
        'Precision hand-chiseled joint tolerances',
        'Stress-tested up to 500kg loads'
      ],
      image: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1200&q=80',
      hotspot: { x: '60%', y: '50%', label: 'Blind Mortise Precision Joint' }
    },
    {
      step: '03',
      title: 'Titanium PVD & Hand Oiling',
      subtitle: '9H Hardness Barrier & Organic Beeswax Satin',
      description: 'Metals receive physical vapor deposition inside high-vacuum chambers for lifetime scratch resistance, while solid timbers are hand-rubbed with seven coats of cold-pressed linseed oil and organic beeswax.',
      highlights: [
        'Oxidation & fingerprint-proof PVD finish',
        'Natural breathability preserving wood warmth',
        'Tactile satin hand-burnished feel'
      ],
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      hotspot: { x: '45%', y: '40%', label: 'Hand-rubbed Organic Wax Satin' }
    },
    {
      step: '04',
      title: 'Architectural Bespoke Tailoring',
      subtitle: 'Custom Scale & Spec Accommodations',
      description: 'Our master craftsmen modify dimensions, finish sheens, and upholstery stitch patterns to integrate seamlessly into residential penthouses and hospitality commissions.',
      highlights: [
        'Dedicated atelier technical draftsperson',
        'Physical swatch box dispatched in 48 hours',
        'White-glove glove install & care guide'
      ],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      hotspot: { x: '50%', y: '60%', label: 'Double Saddle Stitch Detail' }
    }
  ];

  return (
    <section className="relative z-10 py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E5DDCB]/80">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#A37B34] font-semibold">
          02 / BRAND STORY & CRAFTSMANSHIP
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif-luxury font-light text-[#1C1917]">
          The Art of Uncompromising Craftsmanship
        </h2>
        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
          Behind every curve and seam lies hundreds of hours of dedicated artisanal mastery, respecting centuries of heritage techniques.
        </p>
      </div>

      {/* Interactive Story Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Navigation Tabs */}
        <div className="lg:col-span-5 space-y-4">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.step}
              onClick={() => setActiveTab(idx)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                activeTab === idx
                  ? 'glass-panel-gold border-[#A37B34]/50 shadow-md bg-white/95'
                  : 'glass-panel border-[#D4C4AE]/40 bg-white/70 hover:bg-white/90'
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-mono text-[#A37B34] font-bold">
                  {pillar.step}
                </span>
                <span className={`text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                  activeTab === idx ? 'bg-[#A37B34] text-white font-semibold border-transparent' : 'text-[#57534E] border-[#D4C4AE]/50'
                }`}>
                  Pillar
                </span>
              </div>

              <h3 className="text-xl font-serif-luxury font-medium text-[#1C1917] mt-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#57534E] mt-1 font-light">
                {pillar.subtitle}
              </p>

              {activeTab === idx && (
                <div className="mt-4 pt-4 border-t border-[#A37B34]/20 space-y-3 animate-fade-in">
                  <p className="text-xs text-[#44403C] leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="space-y-1.5 pt-1">
                    {pillar.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-[#A37B34] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A37B34] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Interactive Image Preview with Hotspot Pin */}
        <div className="lg:col-span-7 relative rounded-3xl overflow-hidden glass-panel border border-[#D4C4AE]/50 h-[500px] shadow-xl group">
          <img
            src={pillars[activeTab].image}
            alt={pillars[activeTab].title}
            className="w-full h-full object-cover filter brightness-95 transition-all duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-black/10" />

          {/* Hotspot Pin */}
          <div
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group/pin"
            style={{ left: pillars[activeTab].hotspot.x, top: pillars[activeTab].hotspot.y }}
          >
            <div className="relative">
              <div className="w-6 h-6 rounded-full bg-[#A37B34] animate-ping opacity-75 absolute inset-0" />
              <div className="w-6 h-6 rounded-full bg-[#A37B34] border-2 border-white flex items-center justify-center text-white shadow-lg relative z-10">
                <Sparkles className="w-3 h-3" />
              </div>

              {/* Hotspot Tooltip */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/95 border border-[#A37B34]/40 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] text-[#1C1917] whitespace-nowrap shadow-xl opacity-90 group-hover/pin:opacity-100 transition-opacity">
                <span className="font-semibold text-[#A37B34]">Inspect:</span> {pillars[activeTab].hotspot.label}
              </div>
            </div>
          </div>

          {/* Overlay Badge */}
          <div className="absolute bottom-6 left-6 right-6 z-10 glass-panel p-4 rounded-2xl border border-white/40 bg-white/85 backdrop-blur-md flex items-center justify-between shadow-md">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#A37B34] font-semibold block">Craftsmanship Feature</span>
              <span className="text-sm font-serif-luxury font-semibold text-[#1C1917]">
                {pillars[activeTab].title}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#57534E]">
              <Hammer className="w-4 h-4 text-[#A37B34]" />
              <span>Handcrafted in Atelier</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
