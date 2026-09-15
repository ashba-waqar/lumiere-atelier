import React from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import type { Material } from '../../data/materialsData';

interface FeaturedMaterialsStripProps {
  materials: Material[];
  onSelectMaterial: (material: Material) => void;
  onGoToLibrary: () => void;
}

export const FeaturedMaterialsStrip: React.FC<FeaturedMaterialsStripProps> = ({
  materials,
  onSelectMaterial,
  onGoToLibrary,
}) => {
  return (
    <section className="relative z-10 py-20 px-6 sm:px-12 bg-[#F3EFE6]/50 border-t border-b border-[#E5DDCB]/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#A37B34] font-semibold block mb-1">
              03 / SWATCH ATELIER PREVIEW
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-luxury font-light text-[#1C1917]">
              Featured Rare Materials & Finishes
            </h2>
          </div>

          <button
            onClick={onGoToLibrary}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A37B34] hover:text-[#785A1D] transition-colors group"
          >
            <span>View All 8 Material Swatches</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Horizontal Swatch Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.slice(0, 4).map((mat) => (
            <div
              key={mat.id}
              onClick={() => onSelectMaterial(mat)}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-[#D4C4AE]/50 bg-white/85 hover:border-[#A37B34]/60 p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              {/* Swatch Image */}
              <div className="relative h-44 rounded-xl overflow-hidden mb-4">
                <img
                  src={mat.thumbnail}
                  alt={mat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                <span className="absolute top-3 left-3 text-[10px] font-mono tracking-wider bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[#1C1917] border border-[#D4C4AE]/60 font-medium shadow-sm">
                  {mat.code}
                </span>

                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#A37B34] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Info */}
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#A37B34] block font-mono font-semibold">
                  {mat.category}
                </span>
                <h3 className="text-base font-serif-luxury font-medium text-[#1C1917] group-hover:text-[#A37B34] transition-colors">
                  {mat.name}
                </h3>
                <p className="text-xs text-[#57534E] line-clamp-1 font-light">
                  {mat.tagline}
                </p>
              </div>

              {/* Spec Badge */}
              <div className="mt-3 pt-3 border-t border-[#E5DDCB]/70 flex items-center justify-between text-[11px] text-[#57534E]">
                <span>
                  {mat.specs.martindaleRubs
                    ? `${(mat.specs.martindaleRubs / 1000).toFixed(0)}k Rubs`
                    : mat.specs.jankaHardness
                    ? `${mat.specs.jankaHardness} Janka`
                    : mat.specs.pvdCoating
                    ? 'PVD Titanium'
                    : 'Master Grade'}
                </span>
                <span className="text-[#A37B34] font-semibold">Inspect Specs →</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
