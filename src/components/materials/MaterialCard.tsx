import React from 'react';
import type { Material } from '../../data/materialsData';
import { ZoomIn, Bookmark } from 'lucide-react';

interface MaterialCardProps {
  material: Material;
  onInspect: (material: Material) => void;
  isSaved: boolean;
  onToggleSave: (material: Material) => void;
  isCompared: boolean;
  onToggleCompare: (material: Material) => void;
}

export const MaterialCard: React.FC<MaterialCardProps> = ({
  material,
  onInspect,
  isSaved,
  onToggleSave,
  isCompared,
  onToggleCompare,
}) => {
  return (
    <div className="group relative rounded-3xl overflow-hidden glass-card border border-[#D4C4AE]/50 bg-white/90 hover:border-[#A37B34]/60 p-5 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-sm hover:shadow-md">
      
      {/* Top Image & Actions */}
      <div>
        <div className="relative h-56 rounded-2xl overflow-hidden mb-5 bg-[#F3EFE6]">
          <img
            src={material.thumbnail}
            alt={material.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-black/20" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <span className="text-[10px] font-mono tracking-widest uppercase bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[#A37B34] border border-[#A37B34]/40 font-semibold shadow-sm">
              {material.code}
            </span>

            <div className="flex items-center gap-2">
              {/* Compare Checkbox pill */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleCompare(material);
                }}
                className={`px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold transition-all border ${
                  isCompared
                    ? 'bg-[#A37B34] text-white border-transparent shadow-md'
                    : 'bg-white/90 text-[#57534E] border-[#D4C4AE]/60 hover:border-[#A37B34]/50 shadow-xs'
                }`}
              >
                {isCompared ? '✓ Comparing' : '+ Compare'}
              </button>

              {/* Bookmark Save Swatch */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSave(material);
                }}
                className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                  isSaved
                    ? 'bg-[#A37B34] text-white border-transparent shadow-md'
                    : 'bg-white/90 text-[#1C1917] border-[#D4C4AE]/60 hover:text-[#A37B34] shadow-xs'
                }`}
                title={isSaved ? 'Remove Swatch' : 'Save Swatch'}
              >
                <Bookmark className="w-3.5 h-3.5 fill-current" />
              </button>
            </div>
          </div>

          {/* Center Inspect Button on Hover */}
          <div 
            onClick={() => onInspect(material)}
            className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform">
              <ZoomIn className="w-4 h-4" />
              Macro Zoom & Specs
            </span>
          </div>

          {/* Bottom FSC / Eco pill */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] text-[#1C1917] bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#D4C4AE]/60 shadow-sm font-medium">
            {material.specs.fscCertified && (
              <span className="text-emerald-700 font-bold">FSC® Certified</span>
            )}
            {material.specs.ecoFriendly && !material.specs.fscCertified && (
              <span className="text-[#A37B34] font-semibold">Eco-Crafted</span>
            )}
            {!material.specs.fscCertified && !material.specs.ecoFriendly && (
              <span>Hand Artisanal</span>
            )}
          </div>
        </div>

        {/* Title & Category */}
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#A37B34] font-semibold block">
            {material.category}
          </span>
          <h3 className="text-xl font-serif-luxury font-semibold text-[#1C1917] group-hover:text-[#A37B34] transition-colors">
            {material.name}
          </h3>
          <p className="text-xs text-[#57534E] font-light line-clamp-2 leading-relaxed">
            {material.tagline}
          </p>
        </div>
      </div>

      {/* Technical Spec Quick Bar & Action */}
      <div className="mt-5 pt-4 border-t border-[#E5DDCB] space-y-3">
        {/* Spec Pill Highlights */}
        <div className="flex flex-wrap gap-2 text-[10px] text-[#57534E]">
          {material.specs.martindaleRubs && (
            <span className="px-2.5 py-1 rounded-md bg-[#F3EFE6] border border-[#D4C4AE]/40">
              Rub Count: <strong className="text-[#1C1917] font-mono font-semibold">{(material.specs.martindaleRubs / 1000).toFixed(0)}k</strong>
            </span>
          )}
          {material.specs.jankaHardness && (
            <span className="px-2.5 py-1 rounded-md bg-[#F3EFE6] border border-[#D4C4AE]/40">
              Hardness: <strong className="text-[#1C1917] font-mono font-semibold">{material.specs.jankaHardness} lbf</strong>
            </span>
          )}
          {material.specs.pvdCoating && (
            <span className="px-2.5 py-1 rounded-md bg-[#F3EFE6] border border-[#D4C4AE]/40">
              Coating: <strong className="text-[#1C1917] font-semibold">PVD Titanium</strong>
            </span>
          )}
          <span className="px-2.5 py-1 rounded-md bg-[#A37B34]/15 text-[#A37B34] font-semibold">
            {material.specs.durabilityRating}
          </span>
        </div>

        {/* Primary Modal Action */}
        <button
          onClick={() => onInspect(material)}
          className="w-full py-2.5 rounded-xl bg-white border border-[#A37B34]/40 text-[#A37B34] text-xs font-semibold uppercase tracking-wider hover:bg-[#A37B34] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-xs"
        >
          <span>Inspect Macro & Specs</span>
          <ZoomIn className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
