export interface Material {
  id: string;
  name: string;
  category: 'Fabrics & Upholstery' | 'Woods & Timber' | 'Metals & Finishes';
  tagline: string;
  description: string;
  code: string;
  origin: string;
  thumbnail: string;
  macroImage: string;
  // Lighting simulation color shifts
  lightingShifts: {
    warm3000K: string;
    daylight4000K: string;
    cool5000K: string;
  };
  // Technical Specifications
  specs: {
    martindaleRubs?: number; // Fabrics
    jankaHardness?: number; // Woods (lbf)
    pvdCoating?: string; // Metals
    composition?: string;
    weight?: string;
    fscCertified?: boolean;
    durabilityRating: 'Heavy Domestic' | 'Contract / Commercial' | 'Bespoke Architectural' | 'Master Craftsman';
    softnessScore?: number; // 1-10
    scratchResistance?: string; // Metals
    flameRetardancy?: string;
    stainResistanceScore?: number; // 1-10
    ecoFriendly: boolean;
  };
  careInstructions: string[];
  recommendedApplications: string[];
}

export const MATERIALS_DATA: Material[] = [
  // FABRICS & UPHOLSTERY
  {
    id: 'boucle-creme',
    name: 'Textured Alpaca Bouclé',
    category: 'Fabrics & Upholstery',
    tagline: 'Tactile organic looped weave with cloud-like depth and warm ivory luster.',
    description: 'Woven in Biella, Italy using ethically harvested baby alpaca and long-staple organic cotton. Features a heavy multi-dimensional loop tension that resists pilling while offering unmatched tactile warmth.',
    code: 'FAB-BOC-809',
    origin: 'Biella, Italy',
    thumbnail: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    macroImage: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1600&q=90',
    lightingShifts: {
      warm3000K: 'sepia(20%) saturate(120%) brightness(102%)',
      daylight4000K: 'none',
      cool5000K: 'hue-rotate(10deg) saturate(90%) brightness(98%)'
    },
    specs: {
      martindaleRubs: 85000,
      composition: '65% Baby Alpaca, 25% Organic Cotton, 10% Recycled Viscose',
      weight: '720 g/m²',
      durabilityRating: 'Contract / Commercial',
      softnessScore: 9.6,
      flameRetardancy: 'CAL 117-2013 & BS 5852 Crib 5',
      stainResistanceScore: 8.5,
      ecoFriendly: true,
      fscCertified: false
    },
    careInstructions: [
      'Vacuum gently using low-suction upholstery attachment.',
      'Professional dry clean only with fluorocarbon-free solvents.',
      'Promptly blot spills with un-dyed absorbent linen cloth.'
    ],
    recommendedApplications: ['Sculptural Armchairs', 'Deep Modular Loungers', 'Ottomans', 'Headboards']
  },
  {
    id: 'velvet-night-emerald',
    name: 'Velvet Touch Microfiber',
    category: 'Fabrics & Upholstery',
    tagline: 'Deep abyssal emerald sheen with liquid drape and stain-repelling technology.',
    description: 'Engineered high-density cotton velvet woven with hydrophobic nanocoating. Provides an ultra-plush nap that shifts tone under architectural spotlighting without crushing or footprinting.',
    code: 'FAB-VLV-412',
    origin: 'Lyon, France',
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    macroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=90',
    lightingShifts: {
      warm3000K: 'hue-rotate(-15deg) saturate(130%)',
      daylight4000K: 'none',
      cool5000K: 'hue-rotate(15deg) brightness(105%)'
    },
    specs: {
      martindaleRubs: 110000,
      composition: '90% Combed Egyptian Cotton, 10% Performance Micro-fiber',
      weight: '640 g/m²',
      durabilityRating: 'Contract / Commercial',
      softnessScore: 9.8,
      flameRetardancy: 'Passes IMO FTP Code Part 8',
      stainResistanceScore: 9.4,
      ecoFriendly: true,
      fscCertified: false
    },
    careInstructions: [
      'Steam lightly in direction of pile to restore plush luster.',
      'Avoid harsh mechanical brushing.',
      'Water-repellent nanocoating permits wet damp-cloth spot cleaning.'
    ],
    recommendedApplications: ['Statement Dining Chairs', 'Bespoke Executive Sofas', 'Wall Panels']
  },
  {
    id: 'aniline-leather-cognac',
    name: 'Aniline Italian Saddle Leather',
    category: 'Fabrics & Upholstery',
    tagline: 'Uncoated full-grain hide revealing rich organic character and timeless patina.',
    description: 'Sourced from high-altitude Alpine pastures and vegetable-tanned in Tuscany using chestnut bark extracts. Retains natural neck wrinkles, subtle pore structures, and develops a rich burnished amber luster over decades.',
    code: 'LEA-ANL-003',
    origin: 'Tuscany, Italy',
    thumbnail: 'https://images.unsplash.com/photo-1550581190-9c1c08221570?auto=format&fit=crop&w=800&q=80',
    macroImage: 'https://images.unsplash.com/photo-1550581190-9c1c08221570?auto=format&fit=crop&w=1600&q=90',
    lightingShifts: {
      warm3000K: 'saturate(140%) brightness(105%)',
      daylight4000K: 'none',
      cool5000K: 'saturate(85%) contrast(110%)'
    },
    specs: {
      composition: '100% Full Grain European Bull Hide (Vegetable Tanned)',
      weight: '1.4 - 1.6mm thickness',
      durabilityRating: 'Master Craftsman',
      softnessScore: 8.8,
      flameRetardancy: 'FAR 25.853 Aviation Standard Approved',
      stainResistanceScore: 7.2,
      ecoFriendly: true,
      fscCertified: false
    },
    careInstructions: [
      'Condition twice annually with natural beeswax saddle balsam.',
      'Keep away from direct heat sources to preserve collagen elasticity.',
      'Patina development is an intended luxury characteristic.'
    ],
    recommendedApplications: ['Executive Desk Seating', 'Architectural Lounge Chairs', 'Tailored Bench Pads']
  },

  // WOODS & TIMBER
  {
    id: 'american-dark-walnut',
    name: 'American Dark Walnut',
    category: 'Woods & Timber',
    tagline: 'Deep chocolate grain with dramatic figure swirls and satin organic wax finish.',
    description: 'Sustainably harvested from FSC-certified forests in Pennsylvania. Hand-selected heartwood cured in low-heat solar kilns to stabilize moisture content to 7% before hand-planing and oiling.',
    code: 'WOD-WAL-101',
    origin: 'Pennsylvania, USA',
    thumbnail: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=800&q=80',
    macroImage: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1600&q=90',
    lightingShifts: {
      warm3000K: 'contrast(115%) sepia(30%)',
      daylight4000K: 'none',
      cool5000K: 'contrast(125%) brightness(95%)'
    },
    specs: {
      jankaHardness: 1010,
      fscCertified: true,
      composition: 'Solid Eastern Black Walnut (Juglans nigra)',
      durabilityRating: 'Heavy Domestic',
      ecoFriendly: true,
      stainResistanceScore: 8.8
    },
    careInstructions: [
      'Wipe along grain with micro-fiber cloth lightly dampened with lukewarm water.',
      'Re-apply organic linseed-beeswax butter every 6-12 months.',
      'Use coasters and felt pads under metallic or hot objects.'
    ],
    recommendedApplications: ['Dining Tables', 'Sculptural Sideboards', 'Credenzas', 'Solid Wood Joinery']
  },
  {
    id: 'bleached-solid-oak',
    name: 'Bleached Solid Nordic Oak',
    category: 'Woods & Timber',
    tagline: 'Pale cerused timber featuring prominent open grain and matte lime-wash effect.',
    description: 'Responsibly timbered in Småland, Sweden. Processed with traditional lime-bleaching techniques to highlight cathedrals and rays while neutralizing yellow tannins for a serene Scandinavian aesthetic.',
    code: 'WOD-OAK-204',
    origin: 'Småland, Sweden',
    thumbnail: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    macroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=90',
    lightingShifts: {
      warm3000K: 'sepia(15%) brightness(102%)',
      daylight4000K: 'none',
      cool5000K: 'hue-rotate(-10deg) saturate(90%)'
    },
    specs: {
      jankaHardness: 1360,
      fscCertified: true,
      composition: '100% Solid European White Oak (Quercus robur)',
      durabilityRating: 'Contract / Commercial',
      ecoFriendly: true,
      stainResistanceScore: 9.0
    },
    careInstructions: [
      'Clean with neutral pH timber soap.',
      'Avoid ammonia or silicon-based commercial polishes.',
      'Matte poly-wax coating protects against liquid ring stains.'
    ],
    recommendedApplications: ['Architectural Coffee Tables', 'Minimalist Bed Frames', 'Fluted Wall Systems']
  },

  // METALS & FINISHES
  {
    id: 'brushed-champagne-brass',
    name: 'Brushed Champagne Brass',
    category: 'Metals & Finishes',
    tagline: 'Warm satin brushed finish with PVD anti-fingerprint protective vapor barrier.',
    description: 'Forged solid brass billet hand-brushed with fine scotch-brite wheels to create long linear satin striations. Encapsulated in physical vapor deposition (PVD) titanium coating to permanently lock color and prevent tarnish.',
    code: 'MET-BRS-770',
    origin: 'Pforzheim, Germany',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    macroImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=90',
    lightingShifts: {
      warm3000K: 'saturate(150%) brightness(110%)',
      daylight4000K: 'none',
      cool5000K: 'saturate(80%) brightness(105%)'
    },
    specs: {
      pvdCoating: 'Titanium Zirconium Nitride PVD (3.5 Microns)',
      scratchResistance: '9H Mohs Hardness Rating',
      composition: 'CZ121 Lead-Free Architectural Brass Alloy',
      durabilityRating: 'Bespoke Architectural',
      ecoFriendly: true,
      fscCertified: false,
      stainResistanceScore: 9.9
    },
    careInstructions: [
      'Dust with soft microfiber dust cloth.',
      'No metal polishes or abrasive pads required; PVD layer never oxidizes.',
      'Resistant to saltwater, alcohol, and skin oil acids.'
    ],
    recommendedApplications: ['Lighting Sconces & Chandeliers', 'Table Base Hardware', 'Drawer Pulls & Inlays']
  },
  {
    id: 'anodized-matte-aluminum',
    name: 'Matte Anodized Aluminum',
    category: 'Metals & Finishes',
    tagline: 'Velvety dark graphite anodization with high precision CNC milled edge bevels.',
    description: 'Aerospace grade 6061-T6 aluminum extrusion glass-bead blasted to a uniform matte texture before 25-micron anodic oxidation. Impervious to oxidation, moisture, and UV light degradation.',
    code: 'MET-ALU-902',
    origin: 'Zurich, Switzerland',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    macroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=90',
    lightingShifts: {
      warm3000K: 'contrast(105%) sepia(20%)',
      daylight4000K: 'none',
      cool5000K: 'contrast(120%) brightness(108%)'
    },
    specs: {
      pvdCoating: 'Type III Hardcoat Anodization (Mil-A-8625)',
      scratchResistance: 'High Impact & Scratch Resistant',
      composition: '6061-T6 Aluminum Magnesium-Silicon Alloy',
      durabilityRating: 'Contract / Commercial',
      ecoFriendly: true,
      fscCertified: false,
      stainResistanceScore: 10.0
    },
    careInstructions: [
      'Clean with mild soapy water or isopropyl alcohol solution.',
      'Suitable for indoor and extreme outdoor climate installations.'
    ],
    recommendedApplications: ['Structural Framework', 'Floating Shelf Brackets', 'Architectural Paneling']
  }
];
