import React from 'react';
import { Hero } from '../components/home/Hero';
import { BentoGrid } from '../components/home/BentoGrid';
import { BrandStory } from '../components/home/BrandStory';
import { FeaturedMaterialsStrip } from '../components/home/FeaturedMaterialsStrip';
import { Footer } from '../components/Footer';
import type { Material } from '../data/materialsData';
import { MATERIALS_DATA } from '../data/materialsData';

interface HomePageProps {
  onGoToMaterials: () => void;
  onSelectMaterial: (material: Material) => void;
  onSelectCategory: (category: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onGoToMaterials,
  onSelectMaterial,
  onSelectCategory,
}) => {
  return (
    <div className="min-h-screen">
      <Hero
        onExploreMaterials={onGoToMaterials}
        onExploreCollection={() => {
          const el = document.getElementById('bento-showcase');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <BentoGrid onSelectCategory={onSelectCategory} />

      <BrandStory />

      <FeaturedMaterialsStrip
        materials={MATERIALS_DATA}
        onSelectMaterial={onSelectMaterial}
        onGoToLibrary={onGoToMaterials}
      />

      <Footer />
    </div>
  );
};
