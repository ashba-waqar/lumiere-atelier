import React, { useState, useMemo } from 'react';
import type { ProductItem } from '../data/catalogData';
import { CATALOG_PRODUCTS } from '../data/catalogData';
import { ProductCard } from '../components/catalog/ProductCard';
import { ProductQuickInspectModal } from '../components/catalog/ProductQuickInspectModal';
import { Footer } from '../components/Footer';
import { Search, Sparkles } from 'lucide-react';

interface CatalogPageProps {
  onLaunch3dStudio: (product: ProductItem) => void;
  onOpenConsultation: () => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  onLaunch3dStudio,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRoom, setSelectedRoom] = useState<string>('All Rooms');
  const [selectedMaterialFilter, setSelectedMaterialFilter] = useState<string>('All Materials');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [inspectedProduct, setInspectedProduct] = useState<ProductItem | null>(null);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return CATALOG_PRODUCTS.filter((prod) => {
      const matchesCategory =
        selectedCategory === 'All' || prod.category === selectedCategory;

      const matchesRoom =
        selectedRoom === 'All Rooms' || prod.roomType === selectedRoom;

      const matchesMaterial =
        selectedMaterialFilter === 'All Materials' ||
        prod.primaryMaterial.toLowerCase().includes(selectedMaterialFilter.toLowerCase());

      const matchesSearch =
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.primaryMaterial.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesRoom && matchesMaterial && matchesSearch;
    });
  }, [selectedCategory, selectedRoom, selectedMaterialFilter, searchQuery]);

  return (
    <div className="min-h-screen pt-28 pb-20">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5DDCB]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-gold border border-[#A37B34]/30 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#A37B34]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A37B34] font-semibold">
                2026 HAUTE ATELIER CATALOG
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif-luxury font-light text-[#1C1917]">
              Architectural Furniture Collection
            </h1>
            <p className="max-w-xl text-xs sm:text-sm text-[#57534E] font-light leading-relaxed">
              Explore our complete collection of handcrafted seating, monolithic dining tables, architectural lighting, and fluted casegoods.
            </p>
          </div>
        </div>
      </div>

      {/* Multi-Tier Filter Toolbar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-10 space-y-6">
        
        {/* Category & Room Type Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#F3EFE6] p-1.5 rounded-2xl border border-[#D4C4AE]/60 shadow-inner">
            {['All', 'Seating', 'Tables', 'Lighting', 'Casegoods'].map((cat) => (
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

          {/* Room Type Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#F3EFE6] p-1.5 rounded-2xl border border-[#D4C4AE]/60 shadow-inner">
            {['All Rooms', 'Living Room', 'Dining Room', 'Executive Office', 'Bedroom'].map((room) => (
              <button
                key={room}
                onClick={() => setSelectedRoom(room)}
                className={`px-4 py-1.5 rounded-xl text-xs font-medium tracking-wider transition-all ${
                  selectedRoom === room
                    ? 'bg-white text-[#1C1917] font-semibold border border-[#D4C4AE]/60 shadow-sm'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                {room}
              </button>
            ))}
          </div>

        </div>

        {/* Search & Material Filter Pills */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#78716C]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalog by name, code, material..."
              className="w-full bg-white border border-[#D4C4AE]/60 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#A37B34] shadow-sm"
            />
          </div>

          {/* Material Pills Filter */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {['All Materials', 'Bouclé', 'Leather', 'Walnut', 'Oak', 'Brass'].map((matFilter) => (
              <button
                key={matFilter}
                onClick={() => setSelectedMaterialFilter(matFilter)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                  selectedMaterialFilter === matFilter
                    ? 'bg-[#A37B34]/15 text-[#A37B34] border-[#A37B34]/50 font-semibold shadow-sm'
                    : 'bg-white text-[#57534E] border-[#D4C4AE]/50 hover:border-[#A37B34]/40'
                }`}
              >
                {matFilter}
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Main Product Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 min-h-[400px]">
        {filteredProducts.length === 0 ? (
          <div className="glass-panel p-12 rounded-3xl text-center space-y-3">
            <p className="text-base text-[#E5DDCB]/70">No furniture pieces match your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedRoom('All Rooms');
                setSelectedMaterialFilter('All Materials');
                setSearchQuery('');
              }}
              className="text-xs text-[#C5A059] underline hover:text-[#E2C284]"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onQuickInspect={(p) => setInspectedProduct(p)}
                onLaunch3dStudio={(p) => onLaunch3dStudio(p)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Quick Inspect Modal */}
      <ProductQuickInspectModal
        product={inspectedProduct}
        onClose={() => setInspectedProduct(null)}
        onLaunch3dStudio={onLaunch3dStudio}
        onOpenConsultation={onOpenConsultation}
      />

      <Footer />

    </div>
  );
};
