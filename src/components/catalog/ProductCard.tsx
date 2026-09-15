import React from 'react';
import type { ProductItem } from '../../data/catalogData';
import { Eye, Box, ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  onQuickInspect: (product: ProductItem) => void;
  onLaunch3dStudio: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickInspect,
  onLaunch3dStudio,
}) => {
  return (
    <div className="group relative rounded-3xl overflow-hidden glass-card border border-[#D4C4AE]/50 bg-white/90 hover:border-[#A37B34]/60 p-5 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-sm hover:shadow-md">
      
      {/* Top Image & Micro-Interactions */}
      <div>
        <div className="relative h-64 rounded-2xl overflow-hidden mb-5 bg-[#F3EFE6]">
          <img
            src={product.mainImage}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <span className="text-[10px] font-mono tracking-widest uppercase bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[#A37B34] border border-[#A37B34]/40 font-semibold shadow-sm">
              {product.code}
            </span>

            <span className="text-xs font-mono font-bold text-[#1C1917] bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4C4AE]/60 shadow-sm">
              {product.price}
            </span>
          </div>

          {/* Center Actions on Hover */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/35 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => onQuickInspect(product)}
              className="px-4 py-2 rounded-full glass-panel border border-white/40 bg-white/80 text-[#1C1917] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all flex items-center gap-1.5 shadow-md"
            >
              <Eye className="w-3.5 h-3.5 text-[#A37B34]" />
              <span>Quick Inspect</span>
            </button>

            <button
              onClick={() => onLaunch3dStudio(product)}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 shadow-lg transition-all flex items-center gap-1.5"
            >
              <Box className="w-3.5 h-3.5" />
              <span>3D Studio</span>
            </button>
          </div>

          {/* Bottom Room Type Pill */}
          <div className="absolute bottom-3 left-3 z-10 text-[10px] uppercase font-mono tracking-wider text-[#1C1917] bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#D4C4AE]/60 font-medium shadow-sm">
            {product.roomType}
          </div>
        </div>

        {/* Title & Category */}
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#A37B34] font-semibold block">
            {product.category} • {product.primaryMaterial}
          </span>
          <h3 className="text-xl font-serif-luxury font-semibold text-[#1C1917] group-hover:text-[#A37B34] transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-[#57534E] font-light line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>
      </div>

      {/* Direct 3D Studio Launcher Button */}
      <div className="mt-6 pt-4 border-t border-[#E5DDCB] space-y-2">
        <button
          onClick={() => onLaunch3dStudio(product)}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#A37B34]/15 via-[#A37B34]/10 to-[#C5A059]/15 border border-[#A37B34]/40 text-[#A37B34] text-xs font-semibold uppercase tracking-wider hover:bg-[#A37B34] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-xs"
        >
          <Box className="w-4 h-4 text-[#A37B34] group-hover/btn:text-white" />
          <span>Customize in 360° 3D Studio</span>
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>

    </div>
  );
};
