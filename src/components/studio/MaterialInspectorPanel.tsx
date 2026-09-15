import React, { useState } from 'react';
import { MATERIALS_DATA } from '../../data/materialsData';
import type { ModelPartMaterials } from './3dModels';
import { Layers, Check } from 'lucide-react';

interface MaterialInspectorPanelProps {
  partMaterials: ModelPartMaterials;
  onUpdatePartMaterial: (part: 'seat' | 'frame' | 'accent', materialId: string) => void;
}

export const MaterialInspectorPanel: React.FC<MaterialInspectorPanelProps> = ({
  partMaterials,
  onUpdatePartMaterial,
}) => {
  const [activePart, setActivePart] = useState<'seat' | 'frame' | 'accent'>('seat');

  const parts = [
    { id: 'seat', label: 'Primary Upholstery / Seat' },
    { id: 'frame', label: 'Timber Frame / Base' },
    { id: 'accent', label: 'Hardware Accent / Trim' },
  ] as const;

  const getCurrentMaterialId = () => {
    if (activePart === 'seat') return partMaterials.seatMatId;
    if (activePart === 'frame') return partMaterials.frameMatId;
    return partMaterials.accentMatId;
  };

  const selectedMaterialObj = MATERIALS_DATA.find((m) => m.id === getCurrentMaterialId());

  return (
    <div className="glass-panel p-6 rounded-3xl border border-[#D4C4AE]/60 bg-white/95 text-[#1C1917] shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E5DDCB] pb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#A37B34]" />
          <h3 className="text-base font-serif-luxury font-bold text-[#1C1917]">
            Real-Time Material Atelier
          </h3>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#A37B34] bg-[#A37B34]/15 px-2.5 py-1 rounded-full border border-[#A37B34]/30 font-semibold">
          PBR Shaders
        </span>
      </div>

      {/* Target Component Selector */}
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-wider font-mono text-[#78716C] font-semibold">
          01 / SELECT TARGET 3D COMPONENT
        </span>
        <div className="grid grid-cols-1 gap-2">
          {parts.map((p) => {
            const isActive = activePart === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePart(p.id)}
                className={`w-full px-4 py-2.5 rounded-xl text-xs text-left font-medium transition-all flex items-center justify-between border ${
                  isActive
                    ? 'bg-[#A37B34]/15 text-[#A37B34] border-[#A37B34]/50 shadow-sm font-semibold'
                    : 'bg-[#F3EFE6] text-[#57534E] border-[#D4C4AE]/50 hover:border-[#A37B34]/40'
                }`}
              >
                <span>{p.label}</span>
                {isActive && <Check className="w-3.5 h-3.5 text-[#A37B34]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Swatch Selection Grid */}
      <div className="space-y-3">
        <span className="text-[10px] uppercase tracking-wider font-mono text-[#78716C] font-semibold">
          02 / APPLY TACTILE MATERIAL SWATCH
        </span>

        <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1">
          {MATERIALS_DATA.map((mat) => {
            const isSelected = mat.id === getCurrentMaterialId();
            return (
              <div
                key={mat.id}
                onClick={() => onUpdatePartMaterial(activePart, mat.id)}
                className={`group cursor-pointer p-2.5 rounded-2xl border transition-all duration-300 flex items-center gap-3 relative ${
                  isSelected
                    ? 'bg-[#A37B34]/15 border-[#A37B34] shadow-md scale-102'
                    : 'bg-[#F3EFE6]/80 border-[#D4C4AE]/50 hover:border-[#A37B34]/40'
                }`}
              >
                <img
                  src={mat.thumbnail}
                  alt={mat.name}
                  className="w-10 h-10 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                />

                <div className="overflow-hidden">
                  <span className="text-[9px] font-mono text-[#A37B34] font-semibold block">{mat.code}</span>
                  <h4 className="text-xs font-semibold text-[#1C1917] truncate leading-tight">
                    {mat.name}
                  </h4>
                  <span className="text-[9px] text-[#57534E] truncate block mt-0.5">
                    {mat.category}
                  </span>
                </div>

                {isSelected && (
                  <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#A37B34] text-white flex items-center justify-center shadow-xs">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Material Spec Quick Note */}
      {selectedMaterialObj && (
        <div className="pt-4 border-t border-[#E5DDCB] bg-[#F3EFE6] p-3.5 rounded-2xl text-xs space-y-1 border border-[#D4C4AE]/50">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono text-[#A37B34] font-semibold">{selectedMaterialObj.code}</span>
            <span className="text-[10px] text-[#57534E]">{selectedMaterialObj.origin}</span>
          </div>
          <p className="text-xs text-[#1C1917] font-semibold">{selectedMaterialObj.name}</p>
          <p className="text-[11px] text-[#57534E] font-light line-clamp-2">
            {selectedMaterialObj.tagline}
          </p>
        </div>
      )}

    </div>
  );
};
