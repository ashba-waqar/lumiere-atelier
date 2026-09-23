import React, { useState, useEffect } from 'react';

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
    location: 'Bespoke Collection',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'sculptural-chair',
    title: 'Sculptural Armchair & Coffee Table',
    location: 'Milan Showroom Setting',
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
    location: 'Master Craftsman Workshop',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80',
  }
];

export const HeroBackgroundSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
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
    </div>
  );
};
