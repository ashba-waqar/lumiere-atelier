export interface ProductItem {
  id: string;
  name: string;
  code: string;
  category: 'Seating' | 'Tables' | 'Lighting' | 'Casegoods';
  roomType: 'Living Room' | 'Dining Room' | 'Executive Office' | 'Bedroom';
  primaryMaterial: string;
  price: string;
  tagline: string;
  description: string;
  dimensions: string;
  weight: string;
  warranty: string;
  mainImage: string;
  galleryImages: string[];
  modelTypeMapping: 'chair' | 'sofa' | 'desk' | 'lamp';
  defaultPartMaterials: {
    seatMatId: string;
    frameMatId: string;
    accentMatId: string;
  };
}

export const CATALOG_PRODUCTS: ProductItem[] = [
  {
    id: 'aura-boucle-chair',
    name: 'Aura Sculptural Bouclé Lounger',
    code: 'CAT-CHR-101',
    category: 'Seating',
    roomType: 'Living Room',
    primaryMaterial: 'Textured Bouclé & Dark Walnut',
    price: '$4,850',
    tagline: 'Organic curved cloud lounge chair woven in Biella baby alpaca bouclé.',
    description: 'The Aura Lounger embraces the human form with a fluid, continuous shell upholstered in Italian baby alpaca bouclé. Supported by hand-turned American dark walnut legs with PVD champagne brass foot caps.',
    dimensions: '34" W x 36" D x 32" H (86 x 91 x 81 cm)',
    weight: '38 kg (84 lbs)',
    warranty: '25-Year Structural Frame Warranty',
    mainImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1200&q=80'
    ],
    modelTypeMapping: 'chair',
    defaultPartMaterials: {
      seatMatId: 'boucle-creme',
      frameMatId: 'american-dark-walnut',
      accentMatId: 'brushed-champagne-brass',
    }
  },
  {
    id: 'monolith-walnut-table',
    name: 'Monolith Solid Walnut Dining Table',
    code: 'CAT-[#C5A059]-204',
    category: 'Tables',
    roomType: 'Dining Room',
    primaryMaterial: 'American Dark Walnut & Brass',
    price: '$9,600',
    tagline: 'Single-slab FSC dark walnut dining table featuring hand-planed bevels.',
    description: 'Crafted from a single 8-foot slab of Pennsylvania black walnut cured in low-heat solar kilns. Finished with seven coats of organic linseed oil and secured on champagne brass inlay brackets.',
    dimensions: '96" W x 42" D x 30" H (243 x 106 x 76 cm)',
    weight: '142 kg (312 lbs)',
    warranty: 'Lifetime Solid Wood Warranty',
    mainImage: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80'
    ],
    modelTypeMapping: 'desk',
    defaultPartMaterials: {
      seatMatId: 'aniline-leather-cognac',
      frameMatId: 'american-dark-walnut',
      accentMatId: 'brushed-champagne-brass',
    }
  },
  {
    id: 'lumiere-amber-pendant',
    name: 'Lumière Hand-Blown Amber Luminaire',
    code: 'CAT-LMP-308',
    category: 'Lighting',
    roomType: 'Living Room',
    primaryMaterial: 'Amber Glass & Champagne Brass',
    price: '$3,200',
    tagline: 'Mouth-blown Venetian amber glass fixture with PVD brass suspension stem.',
    description: 'Each glass shade is hand-blown by Murano glass artisans, creating unique micro-bubble striations. Casts a warm golden illumination (2700K - 3000K) over residential dining settings.',
    dimensions: '18" W x 18" D x 28" H (45 x 45 x 71 cm)',
    weight: '16 kg (35 lbs)',
    warranty: '10-Year Electrical & Glass Integrity Warranty',
    mainImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80'
    ],
    modelTypeMapping: 'lamp',
    defaultPartMaterials: {
      seatMatId: 'boucle-creme',
      frameMatId: 'american-dark-walnut',
      accentMatId: 'brushed-champagne-brass',
    }
  },
  {
    id: 'fluted-nordic-credenza',
    name: 'Fluted Nordic Oak Credenza',
    code: 'CAT-CSG-412',
    category: 'Casegoods',
    roomType: 'Executive Office',
    primaryMaterial: 'Bleached Nordic Oak & Aluminum',
    price: '$7,900',
    tagline: 'Architectural buffet featuring precision CNC fluted oak doors and soft-close hardware.',
    description: 'Timber sourced from FSC-certified Småland forests. Features half-round fluted tambour doors that slide seamlessly along hidden aluminum tracks to reveal velvet-lined interior cutlery drawers.',
    dimensions: '78" W x 20" D x 31" H (198 x 50 x 78 cm)',
    weight: '98 kg (215 lbs)',
    warranty: '15-Year Joinery Warranty',
    mainImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    modelTypeMapping: 'desk',
    defaultPartMaterials: {
      seatMatId: 'aniline-leather-cognac',
      frameMatId: 'bleached-solid-oak',
      accentMatId: 'anodized-matte-aluminum',
    }
  },
  {
    id: 'velvet-modular-sectional',
    name: 'Velvet Touch Italian Sectional',
    code: 'CAT-SOF-505',
    category: 'Seating',
    roomType: 'Living Room',
    primaryMaterial: 'Abyssal Emerald Velvet & Oak Base',
    price: '$12,400',
    tagline: 'Deep plush modular lounge sofa upholstered in hydrophobic cotton velvet.',
    description: 'Woven in Lyon, France with stain-repelling nanocoating. Features double-stitching over high-resilience goose down padding and a solid kiln-dried hardwood frame.',
    dimensions: '118" W x 44" D x 30" H (299 x 111 x 76 cm)',
    weight: '135 kg (297 lbs)',
    warranty: '25-Year Structural Frame Warranty',
    mainImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    ],
    modelTypeMapping: 'sofa',
    defaultPartMaterials: {
      seatMatId: 'velvet-night-emerald',
      frameMatId: 'bleached-solid-oak',
      accentMatId: 'brushed-champagne-brass',
    }
  },
  {
    id: 'aniline-saddle-armchair',
    name: 'Aniline Cognac Saddle Armchair',
    code: 'CAT-CHR-608',
    category: 'Seating',
    roomType: 'Executive Office',
    primaryMaterial: 'Full-Grain Tuscan Saddle Leather',
    price: '$5,950',
    tagline: 'Vegetable-tanned European bull hide developing a rich burnished patina.',
    description: 'Hand-burnished in Tuscany using chestnut extracts. Features exposed double-saddle stitching and a cold-rolled steel base finished in matte graphite anodization.',
    dimensions: '32" W x 34" D x 33" H (81 x 86 x 83 cm)',
    weight: '42 kg (92 lbs)',
    warranty: 'Lifetime Leather & Steel Warranty',
    mainImage: 'https://images.unsplash.com/photo-1550581190-9c1c08221570?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1550581190-9c1c08221570?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    ],
    modelTypeMapping: 'chair',
    defaultPartMaterials: {
      seatMatId: 'aniline-leather-cognac',
      frameMatId: 'american-dark-walnut',
      accentMatId: 'anodized-matte-aluminum',
    }
  },
  {
    id: 'champagne-brass-executive-desk',
    name: 'Champagne Brass Executive Desk',
    code: 'CAT-DSK-710',
    category: 'Tables',
    roomType: 'Executive Office',
    primaryMaterial: 'Walnut, Aniline Leather & PVD Brass',
    price: '$11,800',
    tagline: 'Monolithic executive desk with integrated leather blotter and PVD titanium brass inlay.',
    description: 'Designed for corner offices and penthouse suites. Features wireless device charging concealed beneath dark walnut timber and velvet-lined locking privacy drawers.',
    dimensions: '88" W x 38" D x 30" H (223 x 96 x 76 cm)',
    weight: '158 kg (348 lbs)',
    warranty: '20-Year Furniture Warranty',
    mainImage: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80'
    ],
    modelTypeMapping: 'desk',
    defaultPartMaterials: {
      seatMatId: 'aniline-leather-cognac',
      frameMatId: 'american-dark-walnut',
      accentMatId: 'brushed-champagne-brass',
    }
  },
  {
    id: 'sculptural-bronze-floor-lamp',
    name: 'Sculptural Bronze Studio Floor Lamp',
    code: 'CAT-LMP-814',
    category: 'Lighting',
    roomType: 'Bedroom',
    primaryMaterial: 'Solid Bronze & Frosted Opal Glass',
    price: '$2,900',
    tagline: 'Artisanal lost-wax cast bronze floor luminaire with touch-dimming sensor.',
    description: 'Forged using lost-wax casting methods in Pforzheim, Germany. Features an organic hand-sculpted stem topped with a mouth-blown frosted opal glass sphere.',
    dimensions: '14" W x 14" D x 62" H (35 x 35 x 157 cm)',
    weight: '22 kg (48 lbs)',
    warranty: '10-Year Luminaire Warranty',
    mainImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80'
    ],
    modelTypeMapping: 'lamp',
    defaultPartMaterials: {
      seatMatId: 'boucle-creme',
      frameMatId: 'american-dark-walnut',
      accentMatId: 'brushed-champagne-brass',
    }
  }
];
