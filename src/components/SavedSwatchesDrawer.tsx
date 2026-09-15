import React from 'react';
import type { Material } from '../data/materialsData';
import { X, Bookmark, Trash2, Sparkles } from 'lucide-react';

interface SavedSwatchesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedSwatches: Material[];
  onRemoveSwatch: (material: Material) => void;
  onInspectMaterial: (material: Material) => void;
  onRequestBox: () => void;
}

export const SavedSwatchesDrawer: React.FC<SavedSwatchesDrawerProps> = ({
  isOpen,
  onClose,
  savedSwatches,
  onRemoveSwatch,
  onInspectMaterial,
  onRequestBox,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md h-full bg-[#FAF7F2] border-l border-[#D4C4AE]/60 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl text-[#1C1917]">
        
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#E5DDCB]">
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-[#A37B34]" />
              <h3 className="text-lg font-serif-luxury font-bold text-[#1C1917]">
                Saved Swatches ({savedSwatches.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white text-[#1C1917] hover:text-[#A37B34] border border-[#D4C4AE]/50 shadow-sm"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Swatch List */}
          <div className="py-6 space-y-4">
            {savedSwatches.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <Bookmark className="w-8 h-8 text-[#78716C]/40 mx-auto" />
                <p className="text-xs text-[#57534E] font-light">
                  No material swatches bookmarked yet. Click the bookmark icon on any material card to save it here.
                </p>
              </div>
            ) : (
              savedSwatches.map((mat) => (
                <div
                  key={mat.id}
                  className="glass-panel p-3.5 rounded-2xl border border-[#D4C4AE]/50 bg-white/85 flex items-center justify-between gap-3 group shadow-xs"
                >
                  <div
                    onClick={() => onInspectMaterial(mat)}
                    className="flex items-center gap-3 cursor-pointer flex-1"
                  >
                    <img
                      src={mat.thumbnail}
                      alt={mat.name}
                      className="w-12 h-12 rounded-xl object-cover group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <span className="text-[9px] font-mono text-[#A37B34] font-semibold block">{mat.code}</span>
                      <h4 className="text-xs font-semibold text-[#1C1917] group-hover:text-[#A37B34] transition-colors">
                        {mat.name}
                      </h4>
                      <span className="text-[10px] text-[#57534E] font-light">{mat.category}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveSwatch(mat)}
                    className="p-2 text-[#78716C] hover:text-red-600 transition-colors"
                    title="Remove Swatch"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer Actions */}
        {savedSwatches.length > 0 && (
          <div className="pt-6 border-t border-[#E5DDCB] space-y-3">
            <button
              onClick={() => {
                onRequestBox();
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white text-xs font-bold uppercase tracking-widest hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Box with Saved Swatches</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
