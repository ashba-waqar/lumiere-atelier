import React from 'react';
import { Sofa, Utensils, Lamp, Armchair } from 'lucide-react';

interface ModelSelectorBarProps {
  currentModel: 'chair' | 'sofa' | 'desk' | 'lamp';
  onSelectModel: (model: 'chair' | 'sofa' | 'desk' | 'lamp') => void;
}

export const ModelSelectorBar: React.FC<ModelSelectorBarProps> = ({
  currentModel,
  onSelectModel,
}) => {
  const models = [
    { id: 'chair', label: 'Sculptural Chair', icon: Armchair, category: 'Seating' },
    { id: 'sofa', label: 'Modular Sofa', icon: Sofa, category: 'Lounger' },
    { id: 'desk', label: 'Executive Table', icon: Utensils, category: 'Table' },
    { id: 'lamp', label: 'Table Luminaire', icon: Lamp, category: 'Lighting' },
  ] as const;

  return (
    <div className="glass-panel p-2.5 rounded-3xl border border-[#D4C4AE]/60 flex flex-wrap items-center justify-center gap-3 shadow-md bg-white/95 backdrop-blur-2xl text-[#1C1917]">
      <span className="text-[10px] font-mono uppercase tracking-widest text-[#A37B34] font-semibold px-3 py-1 hidden sm:inline-block">
        3D FURNITURE MODEL:
      </span>
      {models.map((m) => {
        const Icon = m.icon;
        const isActive = currentModel === m.id;
        return (
          <button
            key={m.id}
            onClick={() => onSelectModel(m.id)}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-3 border ${
              isActive
                ? 'bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white border-transparent shadow-md scale-105 ring-2 ring-[#A37B34]/30'
                : 'text-[#57534E] bg-[#F3EFE6] border-[#D4C4AE]/50 hover:border-[#A37B34]/40 hover:text-[#1C1917] hover:bg-white'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#A37B34]'}`} />
            <span>{m.label}</span>
          </button>
        );
      })}
    </div>
  );
};
