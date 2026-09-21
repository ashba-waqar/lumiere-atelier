import React, { useState, useMemo } from 'react';
import type { Material } from '../data/materialsData';
import { MATERIALS_DATA } from '../data/materialsData';
import { MaterialCard } from '../components/materials/MaterialCard';
import { MacroTextureModal } from '../components/materials/MacroTextureModal';
import { MaterialComparisonDrawer } from '../components/materials/MaterialComparisonDrawer';
import { Footer } from '../components/Footer';
import { Search, LayoutGrid, Table, Check, Mail } from 'lucide-react';

interface MaterialLibraryPageProps {
  savedSwatches: Material[];
  onToggleSaveSwatch: (material: Material) => void;
}

export const MaterialLibraryPage: React.FC<MaterialLibraryPageProps> = ({
  savedSwatches,
  onToggleSaveSwatch,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedMaterialForModal, setSelectedMaterialForModal] = useState<Material | null>(null);
  
  // Spec Filters
  const [onlyFSC, setOnlyFSC] = useState<boolean>(false);
  const [onlyHighDurability, setOnlyHighDurability] = useState<boolean>(false);

  // Comparison State
  const [comparedMaterials, setComparedMaterials] = useState<Material[]>([]);
  const [showCompareDrawer, setShowCompareDrawer] = useState<boolean>(true);

  // Swatch Box Request Modal
  const [showSwatchBoxModal, setShowSwatchBoxModal] = useState<boolean>(false);
  const [swatchBoxSubmitted, setSwatchBoxSubmitted] = useState<boolean>(false);

  // Filtered Materials
  const filteredMaterials = useMemo(() => {
    return MATERIALS_DATA.filter((mat) => {
      const matchesCategory =
        selectedCategory === 'All' || mat.category === selectedCategory;

      const matchesSearch =
        mat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mat.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mat.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mat.origin.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFSC = !onlyFSC || mat.specs.fscCertified === true;
      const matchesDurability =
        !onlyHighDurability ||
        (mat.specs.martindaleRubs && mat.specs.martindaleRubs >= 80000) ||
        (mat.specs.jankaHardness && mat.specs.jankaHardness >= 1000) ||
        Boolean(mat.specs.pvdCoating);

      return matchesCategory && matchesSearch && matchesFSC && matchesDurability;
    });
  }, [selectedCategory, searchQuery, onlyFSC, onlyHighDurability]);

  const toggleCompare = (mat: Material) => {
    if (comparedMaterials.some((m) => m.id === mat.id)) {
      setComparedMaterials(comparedMaterials.filter((m) => m.id !== mat.id));
    } else {
      if (comparedMaterials.length >= 3) {
        alert('You can compare up to 3 materials side-by-side.');
        return;
      }
      setComparedMaterials([...comparedMaterials, mat]);
      setShowCompareDrawer(true);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5DDCB]">
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-serif-luxury font-light text-[#1C1917]">
              Interactive Material & Fabric Library
            </h1>
            <p className="max-w-xl text-xs sm:text-sm text-[#57534E] font-light leading-relaxed">
              Explore rare upholstery weaves, FSC® certified hard timber grains, and PVD anodized luxury metals with real-time macro texture zoom & technical specs.
            </p>
          </div>

          {/* Request Swatch Box CTA */}
          <button
            onClick={() => setShowSwatchBoxModal(true)}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white text-xs font-bold uppercase tracking-widest shadow-xl hover:scale-105 transition-transform flex items-center gap-2 self-start md:self-auto"
          >
            <Mail className="w-4 h-4" />
            <span>Request Physical Swatch Box</span>
          </button>
        </div>
      </div>

      {/* Toolbar: Category Tabs & Search & Filters */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-10 space-y-6">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 bg-[#F3EFE6] p-1.5 rounded-2xl border border-[#D4C4AE]/60 shadow-inner">
            {['All', 'Fabrics & Upholstery', 'Woods & Timber', 'Metals & Finishes'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-medium tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white font-semibold shadow-md'
                    : 'text-[#57534E] hover:text-[#1C1917] hover:bg-white/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-[#F3EFE6] p-1 rounded-xl border border-[#D4C4AE]/60 shadow-inner">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg text-xs transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#A37B34] text-white shadow-sm'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-lg text-xs transition-all ${
                viewMode === 'table'
                  ? 'bg-[#A37B34] text-white shadow-sm'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
              title="Specs Table View"
            >
              <Table className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search & Spec Filter Pills */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#78716C]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by weave, code, wood grain, specs..."
              className="w-full bg-white border border-[#D4C4AE]/60 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#A37B34] shadow-sm"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setOnlyFSC(!onlyFSC)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                onlyFSC
                  ? 'bg-emerald-500/15 text-emerald-800 border-emerald-500/40 font-semibold shadow-sm'
                  : 'bg-white text-[#57534E] border-[#D4C4AE]/50 hover:border-[#A37B34]/40'
              }`}
            >
              {onlyFSC ? '✓ FSC® Certified Only' : '+ FSC® Certified'}
            </button>

            <button
              onClick={() => setOnlyHighDurability(!onlyHighDurability)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                onlyHighDurability
                  ? 'bg-[#A37B34]/15 text-[#A37B34] border-[#A37B34]/40 font-semibold shadow-sm'
                  : 'bg-white text-[#57534E] border-[#D4C4AE]/50 hover:border-[#A37B34]/40'
              }`}
            >
              {onlyHighDurability ? '✓ High Durability (>80k)' : '+ High Durability'}
            </button>
          </div>

        </div>

      </div>

      {/* Main Material Display (Grid or Table View) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 min-h-[400px]">
        {filteredMaterials.length === 0 ? (
          <div className="glass-panel p-12 rounded-3xl text-center space-y-3 bg-white/80 border border-[#D4C4AE]/60">
            <p className="text-base text-[#57534E]">No materials match your current search and filter criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setOnlyFSC(false);
                setOnlyHighDurability(false);
              }}
              className="text-xs text-[#A37B34] underline font-semibold hover:text-[#785A1D]"
            >
              Reset all filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map((mat) => (
              <MaterialCard
                key={mat.id}
                material={mat}
                onInspect={(material) => setSelectedMaterialForModal(material)}
                isSaved={savedSwatches.some((s) => s.id === mat.id)}
                onToggleSave={onToggleSaveSwatch}
                isCompared={comparedMaterials.some((m) => m.id === mat.id)}
                onToggleCompare={toggleCompare}
              />
            ))}
          </div>
        ) : (
          /* Table View */
          <div className="glass-panel rounded-3xl overflow-hidden border border-[#D4C4AE]/60 bg-white/95 shadow-sm overflow-x-auto">
            <table className="w-full text-left text-xs text-[#1C1917]">
              <thead className="bg-[#F3EFE6] text-[11px] uppercase tracking-wider text-[#A37B34] border-b border-[#E5DDCB] font-mono font-semibold">
                <tr>
                  <th className="p-4">Material</th>
                  <th className="p-4">Code</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Origin</th>
                  <th className="p-4">Durability Metric</th>
                  <th className="p-4">FSC / Eco</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DDCB]">
                {filteredMaterials.map((mat) => (
                  <tr key={mat.id} className="hover:bg-[#F3EFE6]/50 transition-colors">
                    <td className="p-4 flex items-center gap-3">
                      <img src={mat.thumbnail} alt={mat.name} className="w-10 h-10 rounded-lg object-cover" />
                      <div>
                        <span className="font-serif-luxury font-semibold text-[#1C1917] block text-sm">{mat.name}</span>
                        <span className="text-[10px] text-[#57534E]">{mat.tagline}</span>
                      </div>
                    </td>
                    <td className="p-4 font-mono text-[#A37B34] font-semibold">{mat.code}</td>
                    <td className="p-4">{mat.category}</td>
                    <td className="p-4">{mat.origin}</td>
                    <td className="p-4 font-mono">
                      {mat.specs.martindaleRubs
                        ? `${(mat.specs.martindaleRubs / 1000).toFixed(0)}k Rubs`
                        : mat.specs.jankaHardness
                        ? `${mat.specs.jankaHardness} Janka`
                        : 'PVD Titanium'}
                    </td>
                    <td className="p-4">
                      {mat.specs.fscCertified ? (
                        <span className="text-emerald-700 font-bold">FSC® Certified</span>
                      ) : (
                        <span>Eco Crafted</span>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => setSelectedMaterialForModal(mat)}
                        className="px-3 py-1.5 rounded-lg bg-[#A37B34]/15 text-[#A37B34] border border-[#A37B34]/30 hover:bg-[#A37B34] hover:text-white transition-colors font-semibold"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Macro Texture Modal */}
      <MacroTextureModal
        material={selectedMaterialForModal}
        onClose={() => setSelectedMaterialForModal(null)}
        onOrderSwatch={(mat) => onToggleSaveSwatch(mat)}
      />

      {/* Side-by-side Spec Comparison Drawer */}
      {showCompareDrawer && (
        <MaterialComparisonDrawer
          comparedMaterials={comparedMaterials}
          onRemoveFromCompare={(mat) => setComparedMaterials(comparedMaterials.filter((m) => m.id !== mat.id))}
          onClearAll={() => setComparedMaterials([])}
          onClose={() => setShowCompareDrawer(false)}
        />
      )}

      {/* Request Physical Swatch Box Modal */}
      {showSwatchBoxModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
          <div className="glass-panel p-8 rounded-3xl max-w-lg w-full border border-[#D4C4AE]/60 bg-white/95 text-[#1C1917] space-y-6 relative shadow-2xl">
            <button
              onClick={() => setShowSwatchBoxModal(false)}
              className="absolute top-4 right-4 text-[#78716C] hover:text-[#1C1917] p-1 rounded-full hover:bg-[#F3EFE6] transition-colors"
            >
              ✕
            </button>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A37B34] font-semibold">ATELIER SAMPLE BOX</span>
              <h3 className="text-2xl font-serif-luxury font-bold text-[#1C1917] mt-1">
                Order Physical Swatch Presentation Box
              </h3>
              <p className="text-xs text-[#57534E] mt-1 font-light">
                Delivered in a custom matte alabaster wooden box with 4" x 4" physical tactile swatches.
              </p>
            </div>

            {swatchBoxSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-[#1C1917]">Sample Request Confirmed</h4>
                <p className="text-xs text-emerald-800">Our concierge team will dispatch your box via Express Courier in 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSwatchBoxSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-xs text-[#57534E] font-medium block mb-1">Architect / Studio Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Studio Studio / Architect Firm"
                    className="w-full bg-white border border-[#D4C4AE]/60 rounded-xl px-4 py-2.5 text-xs text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#A37B34] shadow-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#57534E] font-medium block mb-1">Delivery Address</label>
                  <input
                    type="text"
                    required
                    placeholder="Street Address, City, Country"
                    className="w-full bg-white border border-[#D4C4AE]/60 rounded-xl px-4 py-2.5 text-xs text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#A37B34] shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white text-xs font-bold uppercase tracking-widest hover:opacity-95 transition-opacity shadow-md"
                >
                  Dispatch Swatch Presentation Box
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-24">
        <Footer />
      </div>

    </div>
  );
};
