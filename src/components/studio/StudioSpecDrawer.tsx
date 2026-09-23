import React, { useState } from 'react';
import type { ModelPartMaterials } from './3dModels';
import { MATERIALS_DATA } from '../../data/materialsData';
import { ShieldCheck, Clock, ChevronUp, ChevronDown, PhoneCall } from 'lucide-react';

interface StudioSpecDrawerProps {
  modelType: 'chair' | 'sofa' | 'desk' | 'lamp';
  partMaterials: ModelPartMaterials;
  onRequestQuote: () => void;
}

export const StudioSpecDrawer: React.FC<StudioSpecDrawerProps> = ({
  modelType,
  partMaterials,
  onRequestQuote,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const getModelDetails = () => {
    switch (modelType) {
      case 'chair':
        return {
          title: 'Sculptural Lounger Edition',
          code: '3D-CHR-901',
          dimensions: '34" W x 36" D x 32" H (86 x 91 x 81 cm)',
          weight: '38 kg (84 lbs)',
          hours: 320,
          leadTime: '6-8 Weeks Handcrafted',
        };
      case 'sofa':
        return {
          title: 'Modular Sectional Lounge',
          code: '3D-SOF-402',
          dimensions: '110" W x 42" D x 30" H (279 x 106 x 76 cm)',
          weight: '115 kg (253 lbs)',
          hours: 640,
          leadTime: '8-10 Weeks Handcrafted',
        };
      case 'desk':
        return {
          title: 'Executive Architectural Desk',
          code: '3D-DSK-108',
          dimensions: '84" W x 38" D x 30" H (213 x 96 x 76 cm)',
          weight: '140 kg (308 lbs)',
          hours: 580,
          leadTime: '7-9 Weeks Handcrafted',
        };
      case 'lamp':
        return {
          title: 'Architectural Glass Luminaire',
          code: '3D-[#C5A059]-LMP',
          dimensions: '16" W x 16" D x 26" H (40 x 40 x 66 cm)',
          weight: '14 kg (30 lbs)',
          hours: 140,
          leadTime: '3-4 Weeks Handcrafted',
        };
    }
  };

  const details = getModelDetails();

  const seatMatObj = MATERIALS_DATA.find((m) => m.id === partMaterials.seatMatId);
  const frameMatObj = MATERIALS_DATA.find((m) => m.id === partMaterials.frameMatId);
  const accentMatObj = MATERIALS_DATA.find((m) => m.id === partMaterials.accentMatId);

  return (
    <div className="glass-panel rounded-3xl border border-[#D4C4AE]/60 bg-white/95 backdrop-blur-xl shadow-xl p-5 space-y-4 text-[#1C1917]">
      
      {/* Drawer Header Toggle */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between cursor-pointer select-none"
      >
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#A37B34] font-semibold">
            CONFIGURED SPECIFICATIONS
          </span>
          <h3 className="text-lg font-serif-luxury font-bold text-[#1C1917]">
            {details.title}
          </h3>
        </div>

        <button className="p-2 rounded-full bg-white text-[#1C1917] hover:text-[#A37B34] border border-[#D4C4AE]/50 shadow-xs">
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>
      </div>

      {/* Quick Summary Pill Bar */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-[#57534E] pt-1">
        <div className="flex items-center gap-1.5 bg-[#F3EFE6] px-3 py-1 rounded-full border border-[#D4C4AE]/50 shadow-xs font-medium">
          <Clock className="w-3.5 h-3.5 text-[#A37B34]" />
          <span>{details.hours} Studio Hours</span>
        </div>

        <div className="flex items-center gap-1.5 bg-[#F3EFE6] px-3 py-1 rounded-full border border-[#D4C4AE]/50 shadow-xs font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-[#A37B34]" />
          <span>{details.leadTime}</span>
        </div>
      </div>

      {/* Expanded Spec Breakdown */}
      {isExpanded && (
        <div className="space-y-4 pt-4 border-t border-[#E5DDCB] animate-fade-in text-xs">
          
          {/* Dimensions & Weight */}
          <div className="grid grid-cols-2 gap-3 bg-[#F3EFE6] p-3 rounded-2xl border border-[#D4C4AE]/50">
            <div>
              <span className="text-[10px] text-[#57534E] uppercase tracking-wider block font-semibold">Dimensions</span>
              <span className="font-mono text-[#1C1917] font-semibold">{details.dimensions}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#57534E] uppercase tracking-wider block font-semibold">Net Weight</span>
              <span className="font-mono text-[#1C1917] font-semibold">{details.weight}</span>
            </div>
          </div>

          {/* Current Material Breakdown */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#A37B34] block font-semibold">
              CONFIGURED MATERIAL PALETTE
            </span>
            
            <div className="space-y-1.5">
              <div className="flex justify-between items-center border-b border-[#E5DDCB] pb-1">
                <span className="text-[#57534E]">Upholstery / Seat:</span>
                <span className="font-semibold text-[#1C1917]">{seatMatObj?.name || 'Custom'}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E5DDCB] pb-1">
                <span className="text-[#57534E]">Frame / Timber:</span>
                <span className="font-semibold text-[#1C1917]">{frameMatObj?.name || 'Custom'}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E5DDCB] pb-1">
                <span className="text-[#57534E]">Hardware Accent:</span>
                <span className="font-semibold text-[#1C1917]">{accentMatObj?.name || 'Custom'}</span>
              </div>
            </div>
          </div>

          {/* Quote Button */}
          <button
            onClick={onRequestQuote}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white text-xs font-bold uppercase tracking-widest shadow-md hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Request Bespoke Quote for Configuration</span>
          </button>

        </div>
      )}

    </div>
  );
};
