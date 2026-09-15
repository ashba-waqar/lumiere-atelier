import React, { useState, useRef } from 'react';
import { ThreeCanvasStudio } from '../components/studio/ThreeCanvasStudio';
import { ModelSelectorBar } from '../components/studio/ModelSelectorBar';
import { MaterialInspectorPanel } from '../components/studio/MaterialInspectorPanel';
import { LightingEnvironmentControl } from '../components/studio/LightingEnvironmentControl';
import { StudioSpecDrawer } from '../components/studio/StudioSpecDrawer';
import { Footer } from '../components/Footer';
import type { ModelPartMaterials } from '../components/studio/3dModels';
import { Sparkles, Compass } from 'lucide-react';

interface StudioPageProps {
  onOpenConsultation: () => void;
}

export const StudioPage: React.FC<StudioPageProps> = ({ onOpenConsultation }) => {
  const [modelType, setModelType] = useState<'chair' | 'sofa' | 'desk' | 'lamp'>('chair');
  const [lightingEnvironment, setLightingEnvironment] = useState<'daylight' | 'warm' | 'spotlight'>('daylight');
  const [autoRotate, setAutoRotate] = useState<boolean>(false);

  // Configured Model Materials
  const [partMaterials, setPartMaterials] = useState<ModelPartMaterials>({
    seatMatId: 'boucle-creme',
    frameMatId: 'american-dark-walnut',
    accentMatId: 'brushed-champagne-brass',
  });

  const exportSnapshotFnRef = useRef<(() => void) | null>(null);

  const handleUpdatePartMaterial = (part: 'seat' | 'frame' | 'accent', materialId: string) => {
    if (part === 'seat') setPartMaterials({ ...partMaterials, seatMatId: materialId });
    if (part === 'frame') setPartMaterials({ ...partMaterials, frameMatId: materialId });
    if (part === 'accent') setPartMaterials({ ...partMaterials, accentMatId: materialId });
  };

  return (
    <div className="min-h-screen pt-28 pb-12 flex flex-col justify-between">
      
      {/* Studio Header Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5DDCB] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-gold border border-[#A37B34]/30 shadow-sm mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#A37B34]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A37B34] font-semibold">
                360° 3D STUDIO CONFIGURATOR
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif-luxury font-light text-[#1C1917]">
              Real-Time Architectural Studio
            </h1>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#57534E] font-medium">
            <Compass className="w-4 h-4 text-[#A37B34]" />
            <span>Drag mouse to orbit 360° • Pinch/Scroll to zoom view</span>
          </div>
        </div>
      </div>

      {/* Prominent Model Selector Bar Above Stage */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full mb-6 flex justify-center">
        <ModelSelectorBar
          currentModel={modelType}
          onSelectModel={setModelType}
        />
      </div>

      {/* Main 3D Studio Stage */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full flex-1 mb-12">
        <div className="relative h-[620px] sm:h-[680px] rounded-3xl overflow-hidden glass-panel border border-[#D4C4AE]/60 shadow-xl bg-[#F4EFE6]">
          
          {/* 3D WebGL Canvas */}
          <ThreeCanvasStudio
            modelType={modelType}
            partMaterials={partMaterials}
            lightingEnvironment={lightingEnvironment}
            autoRotate={autoRotate}
            onCanvasReady={(exportFn) => {
              exportSnapshotFnRef.current = exportFn;
            }}
          />

          {/* Right Material Inspector Panel */}
          <div className="absolute top-6 right-6 bottom-20 z-20 w-80 max-w-[calc(100vw-3rem)] pointer-events-auto hidden md:block">
            <MaterialInspectorPanel
              partMaterials={partMaterials}
              onUpdatePartMaterial={handleUpdatePartMaterial}
            />
          </div>

          {/* Bottom Left Spec Drawer */}
          <div className="absolute bottom-6 left-6 z-20 w-80 max-w-[calc(100vw-3rem)] pointer-events-auto hidden sm:block">
            <StudioSpecDrawer
              modelType={modelType}
              partMaterials={partMaterials}
              onRequestQuote={onOpenConsultation}
            />
          </div>

          {/* Bottom Center Lighting Controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
            <LightingEnvironmentControl
              lightingEnvironment={lightingEnvironment}
              onChangeLighting={setLightingEnvironment}
              autoRotate={autoRotate}
              onToggleAutoRotate={() => setAutoRotate(!autoRotate)}
              onExportSnapshot={() => {
                if (exportSnapshotFnRef.current) {
                  exportSnapshotFnRef.current();
                }
              }}
            />
          </div>

        </div>

        {/* Mobile Inspector Drawer Section (Visible on small screens) */}
        <div className="mt-8 grid grid-cols-1 md:hidden gap-6">
          <MaterialInspectorPanel
            partMaterials={partMaterials}
            onUpdatePartMaterial={handleUpdatePartMaterial}
          />
          <StudioSpecDrawer
            modelType={modelType}
            partMaterials={partMaterials}
            onRequestQuote={onOpenConsultation}
          />
        </div>

      </div>

      <Footer />
    </div>
  );
};
