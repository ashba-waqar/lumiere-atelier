import React from 'react';
import type { Material } from '../../data/materialsData';
import { X, Layers, Trash2 } from 'lucide-react';

interface MaterialComparisonDrawerProps {
  comparedMaterials: Material[];
  onRemoveFromCompare: (material: Material) => void;
  onClearAll: () => void;
  onClose: () => void;
}

export const MaterialComparisonDrawer: React.FC<MaterialComparisonDrawerProps> = ({
  comparedMaterials,
  onRemoveFromCompare,
  onClearAll,
  onClose,
}) => {
  if (comparedMaterials.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 sm:p-6 bg-white/95 backdrop-blur-2xl border-t border-[#D4C4AE]/60 shadow-2xl animate-slide-up text-[#1C1917]">
      <div className="max-w-7xl mx-auto space-y-4">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Layers className="w-4 h-4 text-[#A37B34]" />
            <h3 className="text-sm font-serif-luxury font-bold text-[#1C1917]">
              Material Specification Comparison Matrix ({comparedMaterials.length}/3)
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClearAll}
              className="text-xs text-[#57534E] hover:text-red-600 flex items-center gap-1 transition-colors font-medium"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-[#78716C] hover:text-[#1C1917]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Side-by-side Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {comparedMaterials.map((mat) => (
            <div
              key={mat.id}
              className="glass-panel p-4 rounded-2xl border border-[#D4C4AE]/60 bg-[#F3EFE6]/90 relative space-y-3 shadow-xs"
            >
              <button
                onClick={() => onRemoveFromCompare(mat)}
                className="absolute top-3 right-3 p-1 rounded-full bg-white text-[#78716C] hover:text-red-600 border border-[#D4C4AE]/50"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-3">
                <img
                  src={mat.thumbnail}
                  alt={mat.name}
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <span className="text-[9px] font-mono text-[#A37B34] font-semibold block">{mat.code}</span>
                  <h4 className="text-xs font-semibold text-[#1C1917]">{mat.name}</h4>
                </div>
              </div>

              {/* Specs Comparison Metrics */}
              <div className="space-y-1 text-[11px] text-[#57534E] pt-2 border-t border-[#E5DDCB]">
                <div className="flex justify-between">
                  <span className="text-[#78716C]">Category:</span>
                  <span className="font-medium text-right text-[#1C1917]">{mat.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#78716C]">Durability Metric:</span>
                  <span className="font-mono text-[#A37B34] font-bold">
                    {mat.specs.martindaleRubs
                      ? `${(mat.specs.martindaleRubs / 1000).toFixed(0)}k Rubs`
                      : mat.specs.jankaHardness
                      ? `${mat.specs.jankaHardness} Janka`
                      : 'PVD Coated'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#78716C]">FSC / Eco:</span>
                  <span className="text-right text-[#1C1917] font-medium">
                    {mat.specs.fscCertified ? 'FSC Certified' : mat.specs.ecoFriendly ? 'Eco Crafted' : 'Hand Artisan'}
                  </span>
                </div>
              </div>

            </div>
          ))}

          {/* Empty Slot Placeholder */}
          {Array.from({ length: 3 - comparedMaterials.length }).map((_, i) => (
            <div
              key={i}
              className="glass-panel p-4 rounded-2xl border border-dashed border-[#D4C4AE] flex flex-col items-center justify-center text-center text-xs text-[#78716C] min-h-[140px] bg-white/50"
            >
              <span>+ Select material card to compare specs</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
