import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState<boolean>(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-fade-in">
      <div className="glass-panel p-8 rounded-3xl max-w-md w-full border border-[#D4C4AE]/60 bg-white/95 text-[#1C1917] shadow-2xl relative space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#78716C] hover:text-[#1C1917] p-1 rounded-full hover:bg-[#F3EFE6] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#A37B34] font-semibold">PRIVATE CONCIERGE</span>
          <h3 className="text-2xl font-serif-luxury font-bold text-[#1C1917] mt-1">
            Book Private Consultation
          </h3>
          <p className="text-xs text-[#57534E] mt-1 font-light leading-relaxed">
            Schedule a 1-on-1 virtual or in-person consultation with our senior furniture architect at our Paris, Milan, or NYC salons.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="text-base font-bold text-[#1C1917]">Consultation Requested</h4>
            <p className="text-xs text-emerald-800">Our concierge officer will call you within 2 business hours to confirm your private salon appointment.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-xs text-[#57534E] font-medium block mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Architect / Collector Name"
                className="w-full bg-white border border-[#D4C4AE]/60 rounded-xl px-4 py-2.5 text-xs text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#A37B34] shadow-sm"
              />
            </div>
            <div>
              <label className="text-xs text-[#57534E] font-medium block mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="name@studio.com"
                className="w-full bg-white border border-[#D4C4AE]/60 rounded-xl px-4 py-2.5 text-xs text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#A37B34] shadow-sm"
              />
            </div>
            <div>
              <label className="text-xs text-[#57534E] font-medium block mb-1">Preferred Salon Location</label>
              <select className="w-full bg-white border border-[#D4C4AE]/60 rounded-xl px-4 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#A37B34] shadow-sm">
                <option>Virtual Consultation (Global HD Video)</option>
                <option>Paris Salon — Place Vendôme</option>
                <option>Milan Salon — Via Montenapoleone</option>
                <option>New York Studio — Soho</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#785A1D] via-[#A37B34] to-[#C5A059] text-white text-xs font-bold uppercase tracking-widest hover:opacity-95 transition-opacity shadow-md"
            >
              Confirm Consultation Request
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
