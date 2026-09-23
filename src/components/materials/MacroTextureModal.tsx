import React, { useState } from 'react';
import type { Material } from '../../data/materialsData';
import { X, Sun, SunMedium, Moon, ZoomIn, ZoomOut, RotateCcw, Sparkles, ShieldCheck, Award, MailCheck } from 'lucide-react';

interface MacroTextureModalProps {
  material: Material | null;
  onClose: () => void;
  onOrderSwatch: (material: Material) => void;
}

export const MacroTextureModal: React.FC<MacroTextureModalProps> = ({
  material,
  onClose,
  onOrderSwatch,
}) => {
  if (!material) return null;

  const [zoomLevel, setZoomLevel] = useState<number>(1.5);
  const [lightingMode, setLightingMode] = useState<'3000K' | '4000K' | '5000K'>('4000K');
  const [panPos, setPanPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [sampleOrdered, setSampleOrdered] = useState<boolean>(false);

  const getLightingFilter = () => {
    switch (lightingMode) {
      case '3000K':
        return material.lightingShifts.warm3000K;
      case '5000K':
        return material.lightingShifts.cool5000K;
      default:
        return material.lightingShifts.daylight4000K;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panPos.x, y: e.clientY - panPos.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanPos({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-6xl glass-panel rounded-3xl border border-[#D4C4AE]/60 bg-white/95 text-[#1C1917] overflow-hidden shadow-2xl my-auto">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#E5DDCB] flex items-center justify-between bg-[#F3EFE6]/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-[#A37B34] bg-[#A37B34]/15 px-3 py-1 rounded-full border border-[#A37B34]/40 font-semibold">
              {material.code}
            </span>
            <div>
              <h2 className="text-xl font-serif-luxury font-bold text-[#1C1917]">
                {material.name}
              </h2>
              <span className="text-xs text-[#57534E] font-light">
                {material.origin} • {material.category}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white text-[#1C1917] hover:text-[#A37B34] hover:bg-[#F3EFE6] border border-[#D4C4AE]/60 transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Split 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[80vh] overflow-y-auto">
          
          {/* Left: Interactive Macro Viewer & Lighting Simulator */}
          <div className="lg:col-span-7 p-6 border-b lg:border-b-0 lg:border-r border-[#E5DDCB] flex flex-col justify-between space-y-6">
            
            {/* Viewer Header Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 z-10">
              {/* Lighting Temperature Switcher */}
              <div className="flex items-center gap-1 bg-[#F3EFE6] p-1 rounded-full border border-[#D4C4AE]/60 shadow-inner">
                <button
                  onClick={() => setLightingMode('3000K')}
                  className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                    lightingMode === '3000K'
                      ? 'bg-[#A37B34] text-white font-semibold shadow-sm'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  <Moon className="w-3 h-3" />
                  3000K Warm
                </button>
                <button
                  onClick={() => setLightingMode('4000K')}
                  className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                    lightingMode === '4000K'
                      ? 'bg-[#A37B34] text-white font-semibold shadow-sm'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  <SunMedium className="w-3 h-3" />
                  4000K Daylight
                </button>
                <button
                  onClick={() => setLightingMode('5000K')}
                  className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                    lightingMode === '5000K'
                      ? 'bg-[#A37B34] text-white font-semibold shadow-sm'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  <Sun className="w-3 h-3" />
                  5000K Studio
                </button>
              </div>

              {/* Zoom Controls */}
              <div className="flex items-center gap-2 bg-[#F3EFE6] px-3 py-1.5 rounded-full border border-[#D4C4AE]/60 text-xs shadow-inner">
                <button
                  onClick={() => setZoomLevel((z) => Math.max(1, z - 0.5))}
                  className="hover:text-[#A37B34]"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono text-[#1C1917] font-semibold">{zoomLevel.toFixed(1)}x</span>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(4, z + 0.5))}
                  className="hover:text-[#A37B34]"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    setZoomLevel(1.5);
                    setPanPos({ x: 0, y: 0 });
                  }}
                  className="ml-2 hover:text-[#A37B34]"
                  title="Reset View"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Canvas / Interactive Pan Lens Viewport */}
            <div
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing border border-[#D4C4AE]/60 bg-[#F3EFE6] shadow-inner group"
            >
              <div
                className="w-full h-full transition-transform duration-100 ease-out"
                style={{
                  transform: `translate(${panPos.x}px, ${panPos.y}px) scale(${zoomLevel})`,
                  filter: getLightingFilter()
                }}
              >
                <img
                  src={material.macroImage}
                  alt={material.name}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>

              {/* Magnifying Lens Watermark Hint */}
              <div className="absolute bottom-4 left-4 glass-panel px-3 py-1.5 rounded-xl text-[11px] text-[#1C1917] pointer-events-none flex items-center gap-2 bg-white/90 border border-[#D4C4AE]/60 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#A37B34]" />
                <span>Drag to pan macro texture weave</span>
              </div>
            </div>

            {/* Lighting Note */}
            <p className="text-[11px] text-[#57534E] text-center font-light italic">
              Simulated under {lightingMode} color rendering spectrum (CRI 98+ architectural illumination).
            </p>

          </div>

          {/* Right: Technical Specification Breakdown */}
          <div className="lg:col-span-5 p-6 space-y-6">
            
            {/* Tagline */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A37B34] font-semibold">
                SPECIFICATION SHEET
              </span>
              <p className="text-sm text-[#44403C] font-light mt-1 leading-relaxed">
                {material.description}
              </p>
            </div>

            {/* Technical Metrics Grid */}
            <div className="space-y-3 bg-[#F3EFE6] p-4 rounded-2xl border border-[#D4C4AE]/60 text-xs">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A37B34]" />
                Technical Parameters
              </h4>

              {material.specs.martindaleRubs && (
                <div className="flex justify-between items-center text-xs border-b border-[#E5DDCB] pb-2">
                  <span className="text-[#57534E]">Martindale Rub Count</span>
                  <span className="font-mono text-[#1C1917] font-semibold">
                    {material.specs.martindaleRubs.toLocaleString()} Rubs
                  </span>
                </div>
              )}

              {material.specs.jankaHardness && (
                <div className="flex justify-between items-center text-xs border-b border-[#E5DDCB] pb-2">
                  <span className="text-[#57534E]">Janka Timber Hardness</span>
                  <span className="font-mono text-[#1C1917] font-semibold">
                    {material.specs.jankaHardness} lbf
                  </span>
                </div>
              )}

              {material.specs.pvdCoating && (
                <div className="flex justify-between items-center text-xs border-b border-[#E5DDCB] pb-2">
                  <span className="text-[#57534E]">PVD Coating Standard</span>
                  <span className="text-[#1C1917] font-medium">{material.specs.pvdCoating}</span>
                </div>
              )}

              {material.specs.composition && (
                <div className="flex justify-between items-center text-xs border-b border-[#E5DDCB] pb-2">
                  <span className="text-[#57534E]">Material Composition</span>
                  <span className="text-[#1C1917] font-medium text-right max-w-[200px]">
                    {material.specs.composition}
                  </span>
                </div>
              )}

              {material.specs.flameRetardancy && (
                <div className="flex justify-between items-center text-xs border-b border-[#E5DDCB] pb-2">
                  <span className="text-[#57534E]">Flame Retardancy</span>
                  <span className="text-[#1C1917] font-medium">{material.specs.flameRetardancy}</span>
                </div>
              )}

              <div className="flex justify-between items-center text-xs pt-1">
                <span className="text-[#57534E]">Durability Rating</span>
                <span className="text-[#A37B34] font-bold">{material.specs.durabilityRating}</span>
              </div>
            </div>

            {/* Care Instructions */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                Care Protocol
              </h4>
              <ul className="space-y-1.5 text-xs text-[#57534E] font-light">
                {material.careInstructions.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#A37B34]">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Furniture Applications */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                Recommended Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {material.recommendedApplications.map((app, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-3 py-1 rounded-full bg-white border border-[#D4C4AE]/60 text-[#1C1917] font-medium shadow-xs"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Physical Swatch Box Action */}
            <div className="pt-4 border-t border-[#E5DDCB]">
              <button
                onClick={() => {
                  setSampleOrdered(true);
                  onOrderSwatch(material);
                }}
                className={`w-full py-3.5 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  sampleOrdered
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white hover:scale-[1.02]'
                }`}
              >
                {sampleOrdered ? (
                  <>
                    <MailCheck className="w-4 h-4" />
                    <span>Swatch Added to Sample Order Box</span>
                  </>
                ) : (
                  <>
                    <Award className="w-4 h-4" />
                    <span>Order Physical Swatch Sample</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
