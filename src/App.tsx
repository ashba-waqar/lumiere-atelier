import { useState } from 'react';
import { FluidMeshGradient } from './components/FluidMeshGradient';
import { FilmGrainOverlay } from './components/FilmGrainOverlay';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { MaterialLibraryPage } from './pages/MaterialLibraryPage';
import { StudioPage } from './pages/StudioPage';
import { AboutPage } from './pages/AboutPage';
import { SavedSwatchesDrawer } from './components/SavedSwatchesDrawer';
import { ConsultationModal } from './components/ConsultationModal';
import { MacroTextureModal } from './components/materials/MacroTextureModal';
import type { Material } from './data/materialsData';
import { MATERIALS_DATA } from './data/materialsData';
import type { ProductItem } from './data/catalogData';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'catalog' | 'materials' | 'studio' | 'about'>('home');
  const [savedSwatches, setSavedSwatches] = useState<Material[]>([MATERIALS_DATA[0]]);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState<boolean>(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [inspectedMaterial, setInspectedMaterial] = useState<Material | null>(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggleSaveSwatch = (material: Material) => {
    if (savedSwatches.some((s) => s.id === material.id)) {
      setSavedSwatches(savedSwatches.filter((s) => s.id !== material.id));
      showToast(`Removed ${material.name} from saved swatches.`);
    } else {
      setSavedSwatches([...savedSwatches, material]);
      showToast(`Saved ${material.name} to your saved swatches.`);
    }
  };

  // Launch Catalog Item directly in 360 3D Studio Configurator
  const handleLaunch3dStudio = (product: ProductItem) => {
    setCurrentTab('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Loaded ${product.name} inside 360° 3D Studio.`);
  };

  return (
    <div className="relative min-h-screen text-[#2C221A] bg-[#FAF6EE] selection:bg-[#CBB09C]/35 selection:text-[#2C221A] font-sans">
      
      {/* Background Shaders & Textures */}
      <FluidMeshGradient intensity={1} />
      <FilmGrainOverlay />

      {/* Navigation Header */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        savedSwatchesCount={savedSwatches.length}
        onOpenSavedDrawer={() => setIsSavedDrawerOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Page View Rendering */}
      <main className="relative z-10">
        {currentTab === 'home' && (
          <HomePage
            onGoToMaterials={() => {
              setCurrentTab('materials');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectMaterial={(material) => setInspectedMaterial(material)}
            onSelectCategory={() => {
              setCurrentTab('catalog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'catalog' && (
          <CatalogPage
            onLaunch3dStudio={handleLaunch3dStudio}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentTab === 'studio' && (
          <StudioPage
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentTab === 'materials' && (
          <MaterialLibraryPage
            savedSwatches={savedSwatches}
            onToggleSaveSwatch={handleToggleSaveSwatch}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onExploreStudio={() => {
              setCurrentTab('studio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 glass-panel-gold px-4 py-3 rounded-2xl border border-[#9E7E66]/40 text-xs text-[#2C221A] shadow-2xl flex items-center gap-2.5 animate-bounce font-medium">
          <CheckCircle2 className="w-4 h-4 text-[#9E7E66]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Saved Swatches Drawer */}
      <SavedSwatchesDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedSwatches={savedSwatches}
        onRemoveSwatch={handleToggleSaveSwatch}
        onInspectMaterial={(material) => {
          setInspectedMaterial(material);
          setIsSavedDrawerOpen(false);
        }}
        onRequestBox={() => {
          setIsSavedDrawerOpen(false);
          setCurrentTab('materials');
        }}
      />

      {/* Private Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Direct Macro Inspection Modal */}
      {inspectedMaterial && (
        <MacroTextureModal
          material={inspectedMaterial}
          onClose={() => setInspectedMaterial(null)}
          onOrderSwatch={(mat) => handleToggleSaveSwatch(mat)}
        />
      )}

    </div>
  );
}

export default App;
