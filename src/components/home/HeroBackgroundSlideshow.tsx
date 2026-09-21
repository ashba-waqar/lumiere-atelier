import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export interface InteriorSlide {
  id: string;
  title: string;
  location: string;
  image: string;
}

const SLIDES: InteriorSlide[] = [
  {
    id: 'sofa-lounge',
    title: 'Haute Bouclé Sofa & Lounge Furniture',
    location: 'Bespoke Atelier Collection',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'sculptural-chair',
    title: 'Sculptural Armchair & Coffee Table',
    location: 'Milan Atelier Setting',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'velvet-living',
    title: 'Contemporary Velvet Furniture Suite',
    location: 'Haute Living Room',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'designer-armchairs',
    title: 'Designer Lounge Chairs & Timber Table',
    location: 'Architectural Salon',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'credenza-living',
    title: 'Fluted Timber Credenza & Lounge Setting',
    location: 'Master Craftsman Atelier',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80',
  }
];

export const HeroBackgroundSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-auto">
      {/* Background Images Crossfade */}
      {SLIDES.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out filter brightness-90 contrast-105 ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        );
      })}

      {/* Dark Luxury Gradient Overlay for Maximum Interior Image Visibility & Contrast */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#1C1917]/75 via-[#1C1917]/55 to-[#1C1917]/85 backdrop-blur-[1px]" />

      {/* Subtle Ambient Mocha Gold Glow Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#9E7E66]/25 rounded-full blur-[140px] pointer-events-none z-20" />

      {/* Controls & Slide Counter Pill Bar */}
      <div className="absolute bottom-6 left-6 sm:left-12 z-30 flex items-center gap-4">
        {/* Play/Pause & Nav Arrows */}
        <div className="bg-[#FAF6EE]/95 border border-[#CBB09C]/60 backdrop-blur-xl p-1.5 rounded-full flex items-center gap-1 shadow-xl">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#2C221A] hover:bg-[#9E7E66] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#9E7E66] hover:bg-[#9E7E66] hover:text-white transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#2C221A] hover:bg-[#9E7E66] hover:text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Indicators & Caption */}
        <div className="hidden sm:flex items-center gap-3 bg-[#FAF6EE]/95 border border-[#CBB09C]/60 backdrop-blur-xl px-4 py-2 rounded-full shadow-xl text-xs">
          <span className="font-mono text-[#9E7E66] font-bold">
            0{currentIndex + 1} / 0{SLIDES.length}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#9E7E66]/40" />
          <span className="text-[#2C221A] font-semibold tracking-wide font-serif-luxury truncate max-w-[220px]">
            {SLIDES[currentIndex].title}
          </span>
        </div>

        {/* Dots pagination */}
        <div className="flex items-center gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === currentIndex
                  ? 'w-6 bg-[#9E7E66]'
                  : 'w-2 bg-[#FAF6EE]/80 hover:bg-[#9E7E66] border border-[#CBB09C]/60 shadow-sm'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
