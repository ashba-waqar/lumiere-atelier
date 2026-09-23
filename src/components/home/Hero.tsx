import { ArrowRight } from 'lucide-react';
import { HeroBackgroundSlideshow } from './HeroBackgroundSlideshow';

interface HeroProps {
  onExploreMaterials: () => void;
  onExploreCollection: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMaterials, onExploreCollection }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden">
      
      {/* Home Interior Background Slideshow */}
      <HeroBackgroundSlideshow />

      {/* Main Kinetic Typography Headline */}
      <div className="max-w-5xl text-center space-y-6 z-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-luxury font-extralight tracking-tight leading-[1.08] text-white drop-shadow-lg">
          Architectural Pureness.{' '}
          <span className="block font-normal italic gold-gradient-text drop-shadow-md">
            Sculpted for Generations.
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-[#E7E5E4] font-light leading-relaxed tracking-wide drop-shadow">
          Handcrafted bespoke furniture merging rare timbers, tactile textiles, and precision brass.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 z-10">
        <button
          onClick={onExploreMaterials}
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#7A5E48] via-[#9E7E66] to-[#CBB09C] text-white text-xs font-bold uppercase tracking-[0.18em] shadow-2xl hover:shadow-[#9E7E66]/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
        >
          <span>Explore Materials</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
        </button>

        <button
          onClick={onExploreCollection}
          className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel border border-white/30 bg-black/30 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-[0.18em] hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-md"
        >
          View 2026 Bento Showcase
        </button>
      </div>

    </section>
  );
};
