import React from 'react';
import { Sun, SunMedium, Moon, Camera, Play, Pause } from 'lucide-react';

interface LightingEnvironmentControlProps {
  lightingEnvironment: 'daylight' | 'warm' | 'spotlight';
  onChangeLighting: (env: 'daylight' | 'warm' | 'spotlight') => void;
  autoRotate: boolean;
  onToggleAutoRotate: () => void;
  onExportSnapshot: () => void;
}

export const LightingEnvironmentControl: React.FC<LightingEnvironmentControlProps> = ({
  lightingEnvironment,
  onChangeLighting,
  autoRotate,
  onToggleAutoRotate,
  onExportSnapshot,
}) => {
  return (
    <div className="glass-panel p-3 rounded-2xl border border-[#D4C4AE]/60 bg-white/95 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4 shadow-xl text-[#1C1917]">
      
      {/* Lighting Presets */}
      <div className="flex items-center gap-1 bg-[#F3EFE6] p-1 rounded-xl border border-[#D4C4AE]/60 shadow-inner">
        <button
          onClick={() => onChangeLighting('daylight')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 transition-all ${
            lightingEnvironment === 'daylight'
              ? 'bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white font-semibold shadow-sm'
              : 'text-[#57534E] hover:text-[#1C1917]'
          }`}
        >
          <SunMedium className="w-3.5 h-3.5" />
          <span>4000K Daylight</span>
        </button>

        <button
          onClick={() => onChangeLighting('warm')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 transition-all ${
            lightingEnvironment === 'warm'
              ? 'bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white font-semibold shadow-sm'
              : 'text-[#57534E] hover:text-[#1C1917]'
          }`}
        >
          <Moon className="w-3.5 h-3.5" />
          <span>3000K Golden</span>
        </button>

        <button
          onClick={() => onChangeLighting('spotlight')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 transition-all ${
            lightingEnvironment === 'spotlight'
              ? 'bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white font-semibold shadow-sm'
              : 'text-[#57534E] hover:text-[#1C1917]'
          }`}
        >
          <Sun className="w-3.5 h-3.5" />
          <span>5000K Spotlight</span>
        </button>
      </div>

      {/* Camera & Studio Actions */}
      <div className="flex items-center gap-2">
        {/* Auto Rotate Toggle */}
        <button
          onClick={onToggleAutoRotate}
          className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-2 border transition-all ${
            autoRotate
              ? 'bg-[#A37B34]/15 text-[#A37B34] border-[#A37B34]/50 font-semibold shadow-xs'
              : 'bg-white text-[#57534E] border-[#D4C4AE]/50 hover:border-[#A37B34]/40'
          }`}
          title="Toggle 360 Auto Rotation"
        >
          {autoRotate ? <Pause className="w-3.5 h-3.5 text-[#A37B34]" /> : <Play className="w-3.5 h-3.5" />}
          <span>{autoRotate ? 'Rotating' : '360° Rotate'}</span>
        </button>

        {/* Snapshot Exporter */}
        <button
          onClick={onExportSnapshot}
          className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-transform flex items-center gap-2"
        >
          <Camera className="w-3.5 h-3.5" />
          <span>Export 3D Render</span>
        </button>
      </div>

    </div>
  );
};
