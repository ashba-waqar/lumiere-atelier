import React from 'react';

export const ArtisanProfiles: React.FC = () => {
  const artisans = [
    {
      name: 'Matteo Rossi',
      role: 'Master Joiner & Wood Sculptor',
      experience: '34 Years Guild Mastery',
      specialty: 'Hand-chiseled mortise & tenon joints in dark walnut and European oak.',
      quote: 'Wood is a living soul; our chisels merely reveal the poetry already sculpted within the grain.',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Elena Vane',
      role: 'Director of Textile Upholstery',
      experience: '28 Years Master Craft Experience',
      specialty: 'Double-saddle hand stitching & alpaca bouclé tensioning.',
      quote: 'Every seam must breathe. A true luxury chair wraps the body in weightless tactile warmth.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Jean-Luc Blanc',
      role: 'Head of Titanium PVD Metallurgy',
      experience: '22 Years Precision Metalwork',
      specialty: 'High-vacuum titanium PVD deposition & champagne brass hand-brushing.',
      quote: 'Metal should possess the soft radiance of moonlight. Our 9H PVD barrier locks that luster forever.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <section className="relative z-10 py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#E5DDCB]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#A37B34] font-semibold block mb-2">
            THE HANDS BEHIND THE CRAFT
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-light text-[#1C1917]">
            Master Guild Artisans
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-[#57534E] font-light leading-relaxed">
          Over 38 master craftsmen dedicate their lives in our Tuscan and Biella workshops to sculpting every individual commission.
        </p>
      </div>

      {/* Artisan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {artisans.map((artisan, idx) => (
          <div
            key={idx}
            className="group relative rounded-3xl overflow-hidden glass-card border border-[#D4C4AE]/60 bg-white/90 hover:border-[#A37B34]/60 p-6 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-sm hover:shadow-md text-[#1C1917]"
          >
            <div>
              {/* Photo */}
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-[#F3EFE6]">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent" />
                
                <span className="absolute bottom-3 left-3 text-[10px] font-mono tracking-wider bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[#A37B34] border border-[#A37B34]/30 font-semibold shadow-sm">
                  {artisan.experience}
                </span>
              </div>

              {/* Info */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A37B34] font-semibold block">
                  {artisan.role}
                </span>
                <h3 className="text-2xl font-serif-luxury font-bold text-[#1C1917]">
                  {artisan.name}
                </h3>
                <p className="text-xs text-[#57534E] font-light leading-relaxed pt-1">
                  {artisan.specialty}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-6 pt-4 border-t border-[#E5DDCB]">
              <blockquote className="text-xs text-[#57534E] font-serif-luxury italic leading-relaxed">
                "{artisan.quote}"
              </blockquote>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
