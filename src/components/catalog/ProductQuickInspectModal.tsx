import React, { useState } from 'react';
import type { ProductItem } from '../../data/catalogData';
import { X, Box, ShieldCheck, PhoneCall } from 'lucide-react';

interface ProductQuickInspectModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onLaunch3dStudio: (product: ProductItem) => void;
  onOpenConsultation: () => void;
}

export const ProductQuickInspectModal: React.FC<ProductQuickInspectModalProps> = ({
  product,
  onClose,
  onLaunch3dStudio,
  onOpenConsultation,
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.mainImage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-5xl glass-panel rounded-3xl border border-[#D4C4AE]/60 bg-white/95 text-[#1C1917] overflow-hidden shadow-2xl my-auto">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E5DDCB] flex items-center justify-between bg-[#F3EFE6]/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-[#A37B34] bg-[#A37B34]/15 px-3 py-1 rounded-full border border-[#A37B34]/40 font-semibold">
              {product.code}
            </span>
            <div>
              <h2 className="text-xl font-serif-luxury font-bold text-[#1C1917]">
                {product.name}
              </h2>
              <span className="text-xs text-[#57534E] font-light">
                {product.category} • {product.roomType}
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

        {/* Modal Body: Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[80vh] overflow-y-auto">
          
          {/* Left: Gallery Viewport */}
          <div className="lg:col-span-7 p-6 border-b lg:border-b-0 lg:border-r border-[#E5DDCB] space-y-4 flex flex-col justify-between">
            <div className="relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#D4C4AE]/50 bg-[#F3EFE6]">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <span className="absolute top-4 right-4 font-mono text-sm font-bold text-[#1C1917] bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4C4AE]/60 shadow-md">
                {product.price}
              </span>
            </div>

            {/* Thumbnail Switcher */}
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {product.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border transition-all shrink-0 ${
                    activeImage === img
                      ? 'border-[#A37B34] ring-2 ring-[#A37B34]/40 scale-105 shadow-sm'
                      : 'border-[#D4C4AE]/50 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Technical Specs & Launch 3D Studio */}
          <div className="lg:col-span-5 p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A37B34] font-semibold">
                  PRODUCT OVERVIEW
                </span>
                <p className="text-sm text-[#44403C] font-light mt-1 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specs Parameters */}
              <div className="space-y-2 bg-[#F3EFE6] p-4 rounded-2xl border border-[#D4C4AE]/60 text-xs">
                <h4 className="font-semibold uppercase tracking-wider text-[#1C1917] mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#A37B34]" />
                  Architectural Parameters
                </h4>

                <div className="flex justify-between border-b border-[#E5DDCB] pb-1.5">
                  <span className="text-[#57534E]">Dimensions:</span>
                  <span className="font-mono text-[#1C1917] font-medium">{product.dimensions}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5DDCB] pb-1.5">
                  <span className="text-[#57534E]">Weight:</span>
                  <span className="font-mono text-[#1C1917] font-medium">{product.weight}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5DDCB] pb-1.5">
                  <span className="text-[#57534E]">Primary Material:</span>
                  <span className="text-[#1C1917] font-medium">{product.primaryMaterial}</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-[#57534E]">Quality Guarantee:</span>
                  <span className="text-[#A37B34] font-medium">{product.warranty}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-[#E5DDCB]">
              <button
                onClick={() => {
                  onClose();
                  onLaunch3dStudio(product);
                }}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white text-xs font-bold uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                <Box className="w-4 h-4" />
                <span>Customize in 360° 3D Studio</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-2xl bg-white border border-[#A37B34]/50 text-[#A37B34] text-xs font-semibold uppercase tracking-wider hover:bg-[#A37B34]/10 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Request Private Concierge Quote</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
