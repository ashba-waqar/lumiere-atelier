import * as THREE from 'three';
import type { Material } from '../../data/materialsData';

// Canvas Procedural Texture Generators
function createBoucleBumpTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 512, 512);

  // Draw rich loop bumps
  for (let i = 0; i < 1800; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const r = 2 + Math.random() * 6;
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.7, '#909090');
    grad.addColorStop(1, '#505050');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(8, 8);
  return texture;
}

function createLeatherBumpTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 512, 512);

  ctx.strokeStyle = '#353535';
  ctx.lineWidth = 1.2;
  for (let i = 0; i < 400; i++) {
    ctx.beginPath();
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    ctx.moveTo(x, y);
    ctx.lineTo(x + (Math.random() - 0.5) * 20, y + (Math.random() - 0.5) * 20);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(10, 10);
  return texture;
}

function createWoodGrainBumpTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 512, 512);

  ctx.strokeStyle = '#b0b0b0';
  ctx.lineWidth = 2;
  for (let i = 0; i < 512; i += 6) {
    const wave = Math.sin(i * 0.04) * 15;
    ctx.beginPath();
    ctx.moveTo(0, i + wave);
    ctx.bezierCurveTo(150, i - wave, 300, i + wave * 1.5, 512, i - wave);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 8);
  return texture;
}

function createBrushedMetalBumpTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 512, 512);

  ctx.strokeStyle = '#c0c0c0';
  ctx.lineWidth = 1;
  for (let i = 0; i < 300; i++) {
    const x = Math.random() * 512;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + (Math.random() - 0.5) * 3, 512);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(6, 1);
  return texture;
}

// Global Texture Cache
const boucleTexture = createBoucleBumpTexture();
const leatherTexture = createLeatherBumpTexture();
const woodTexture = createWoodGrainBumpTexture();
const metalTexture = createBrushedMetalBumpTexture();

/**
 * Creates a vibrant, well-lit PBR Three.js MeshPhysicalMaterial based on material ID.
 */
export function createPbrMaterial(materialId: string, customMaterial?: Material): THREE.MeshPhysicalMaterial {
  switch (materialId) {
    case 'boucle-creme':
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#F0E6D6'), // Warm ivory cream
        roughness: 0.85,
        metalness: 0.0,
        bumpMap: boucleTexture,
        bumpScale: 0.04,
        sheen: 0.8,
        sheenColor: new THREE.Color('#FFFFFF'),
        clearcoat: 0.05,
      });

    case 'velvet-night-emerald':
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#0D4F3A'), // Deep rich emerald
        roughness: 0.75,
        metalness: 0.05,
        sheen: 1.0,
        sheenColor: new THREE.Color('#46F3B9'),
        sheenRoughness: 0.25,
        clearcoat: 0.1,
      });

    case 'aniline-leather-cognac':
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#A85A2A'), // Rich cognac amber
        roughness: 0.35,
        metalness: 0.05,
        bumpMap: leatherTexture,
        bumpScale: 0.015,
        clearcoat: 0.35,
        clearcoatRoughness: 0.2,
      });

    case 'american-dark-walnut':
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#5A3825'), // Warm rich walnut wood
        roughness: 0.45,
        metalness: 0.0,
        bumpMap: woodTexture,
        bumpScale: 0.02,
        clearcoat: 0.25,
        clearcoatRoughness: 0.15,
      });

    case 'bleached-solid-oak':
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#E2D5BE'), // Nordic pale oak
        roughness: 0.55,
        metalness: 0.0,
        bumpMap: woodTexture,
        bumpScale: 0.02,
        clearcoat: 0.1,
      });

    case 'brushed-champagne-brass':
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#E5BE53'), // Radiant champagne gold
        roughness: 0.2,
        metalness: 0.95,
        bumpMap: metalTexture,
        bumpScale: 0.01,
        clearcoat: 0.5,
        clearcoatRoughness: 0.1,
      });

    case 'anodized-matte-aluminum':
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#4A4E58'), // Sleek anodized slate steel
        roughness: 0.35,
        metalness: 0.88,
        bumpMap: metalTexture,
        bumpScale: 0.008,
      });

    default:
      if (customMaterial) {
        if (customMaterial.category === 'Fabrics & Upholstery') {
          return new THREE.MeshPhysicalMaterial({
            color: new THREE.Color('#E5D8C5'),
            roughness: 0.8,
            bumpMap: boucleTexture,
            bumpScale: 0.03,
          });
        } else if (customMaterial.category === 'Woods & Timber') {
          return new THREE.MeshPhysicalMaterial({
            color: new THREE.Color('#6B4834'),
            roughness: 0.5,
            bumpMap: woodTexture,
            bumpScale: 0.02,
          });
        } else {
          return new THREE.MeshPhysicalMaterial({
            color: new THREE.Color('#D4AF37'),
            roughness: 0.25,
            metalness: 0.9,
            bumpMap: metalTexture,
            bumpScale: 0.01,
          });
        }
      }

      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#C5A059'),
        roughness: 0.3,
        metalness: 0.7,
      });
  }
}
