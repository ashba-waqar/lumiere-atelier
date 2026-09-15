import * as THREE from 'three';
import { createPbrMaterial } from './materialPbrFactory';

export interface ModelPartMaterials {
  seatMatId: string;
  frameMatId: string;
  accentMatId: string;
}

/**
 * Creates a clean, realistic Sculptural Lounge Chair 3D Group.
 */
export function createLoungeChairModel(mats: ModelPartMaterials): THREE.Group {
  const group = new THREE.Group();
  group.name = 'lounge-chair';

  const seatMat = createPbrMaterial(mats.seatMatId);
  const frameMat = createPbrMaterial(mats.frameMatId);
  const accentMat = createPbrMaterial(mats.accentMatId);

  // 1. Solid Wood Base Sub-Frame
  const subFrameGeo = new THREE.BoxGeometry(1.6, 0.12, 1.6);
  const subFrameMesh = new THREE.Mesh(subFrameGeo, frameMat);
  subFrameMesh.position.set(0, 0.5, 0);
  subFrameMesh.castShadow = true;
  subFrameMesh.receiveShadow = true;
  subFrameMesh.userData = { part: 'frame' };
  group.add(subFrameMesh);

  // 2. Thick Plush Seat Cushion
  const seatGeo = new THREE.BoxGeometry(1.5, 0.35, 1.5);
  const seatMesh = new THREE.Mesh(seatGeo, seatMat);
  seatMesh.position.set(0, 0.73, 0);
  seatMesh.castShadow = true;
  seatMesh.receiveShadow = true;
  seatMesh.userData = { part: 'seat' };
  group.add(seatMesh);

  // Upper Comfort Pad
  const topPadGeo = new THREE.BoxGeometry(1.4, 0.18, 1.4);
  const topPadMesh = new THREE.Mesh(topPadGeo, seatMat);
  topPadMesh.position.set(0, 0.98, 0);
  topPadMesh.castShadow = true;
  topPadMesh.receiveShadow = true;
  topPadMesh.userData = { part: 'seat' };
  group.add(topPadMesh);

  // 3. Sleek Angled Backrest Cushion (Positioned BEHIND the seat, no wrapping walls!)
  const backRestGeo = new THREE.BoxGeometry(1.5, 1.0, 0.28);
  const backRestMesh = new THREE.Mesh(backRestGeo, seatMat);
  backRestMesh.position.set(0, 1.55, -0.65);
  backRestMesh.rotation.x = -0.15; // Slightly reclined
  backRestMesh.castShadow = true;
  backRestMesh.receiveShadow = true;
  backRestMesh.userData = { part: 'seat' };
  group.add(backRestMesh);

  // Lumbar Support Pillow
  const lumbarGeo = new THREE.BoxGeometry(1.2, 0.4, 0.18);
  const lumbarMesh = new THREE.Mesh(lumbarGeo, seatMat);
  lumbarMesh.position.set(0, 1.25, -0.52);
  lumbarMesh.rotation.x = -0.15;
  lumbarMesh.castShadow = true;
  lumbarMesh.userData = { part: 'seat' };
  group.add(lumbarMesh);

  // 4. Left & Right Armrest Cushions
  const armGeo = new THREE.BoxGeometry(0.28, 0.65, 1.4);
  const armLeft = new THREE.Mesh(armGeo, seatMat);
  armLeft.position.set(-0.85, 1.2, 0.05);
  armLeft.castShadow = true;
  armLeft.userData = { part: 'seat' };
  group.add(armLeft);

  const armRight = new THREE.Mesh(armGeo, seatMat);
  armRight.position.set(0.85, 1.2, 0.05);
  armRight.castShadow = true;
  armRight.userData = { part: 'seat' };
  group.add(armRight);

  // 5. Tapered Wooden Legs with Brass Ferrule Caps
  const legGeo = new THREE.CylinderGeometry(0.06, 0.035, 0.7, 16);
  const legCoords = [
    [-0.7, 0.35, -0.65],
    [0.7, 0.35, -0.65],
    [-0.7, 0.35, 0.65],
    [0.7, 0.35, 0.65],
  ];

  legCoords.forEach(([x, y, z]) => {
    const legMesh = new THREE.Mesh(legGeo, frameMat);
    legMesh.position.set(x, y, z);
    legMesh.rotation.z = (x > 0 ? -0.1 : 0.1);
    legMesh.rotation.x = (z > 0 ? 0.1 : -0.1);
    legMesh.castShadow = true;
    legMesh.receiveShadow = true;
    legMesh.userData = { part: 'frame' };
    group.add(legMesh);

    // Brass Foot Cap
    const capGeo = new THREE.CylinderGeometry(0.042, 0.035, 0.15, 16);
    const capMesh = new THREE.Mesh(capGeo, accentMat);
    capMesh.position.set(x * 1.05, 0.075, z * 1.05);
    capMesh.castShadow = true;
    capMesh.userData = { part: 'accent' };
    group.add(capMesh);
  });

  // Metal Armrest Joiner Brackets
  const bracketGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.3, 12);
  [-0.85, 0.85].forEach((x) => {
    const bMesh = new THREE.Mesh(bracketGeo, accentMat);
    bMesh.position.set(x, 0.9, 0.65);
    bMesh.rotation.z = Math.PI / 2;
    bMesh.castShadow = true;
    bMesh.userData = { part: 'accent' };
    group.add(bMesh);
  });

  return group;
}

/**
 * Creates a clean Modular Sectional Sofa 3D Group.
 */
export function createModularSofaModel(mats: ModelPartMaterials): THREE.Group {
  const group = new THREE.Group();
  group.name = 'modular-sofa';

  const seatMat = createPbrMaterial(mats.seatMatId);
  const frameMat = createPbrMaterial(mats.frameMatId);
  const accentMat = createPbrMaterial(mats.accentMatId);

  // 1. Plinth Timber Base Platform
  const baseGeo = new THREE.BoxGeometry(3.8, 0.2, 2.0);
  const baseMesh = new THREE.Mesh(baseGeo, frameMat);
  baseMesh.position.y = 0.1;
  baseMesh.castShadow = true;
  baseMesh.receiveShadow = true;
  baseMesh.userData = { part: 'frame' };
  group.add(baseMesh);

  // 2. Triple Section Deep Cushions
  const cushionGeo = new THREE.BoxGeometry(1.2, 0.4, 1.8);
  [-1.25, 0, 1.25].forEach((x) => {
    const cMesh = new THREE.Mesh(cushionGeo, seatMat);
    cMesh.position.set(x, 0.4, 0.05);
    cMesh.castShadow = true;
    cMesh.receiveShadow = true;
    cMesh.userData = { part: 'seat' };
    group.add(cMesh);
  });

  // 3. Backrest Modules
  const backGeo = new THREE.BoxGeometry(3.8, 0.8, 0.4);
  const backMesh = new THREE.Mesh(backGeo, seatMat);
  backMesh.position.set(0, 0.95, -0.65);
  backMesh.castShadow = true;
  backMesh.userData = { part: 'seat' };
  group.add(backMesh);

  // Throw Pillows
  const pillowGeo = new THREE.BoxGeometry(0.7, 0.5, 0.2);
  [-1.1, 0.1, 1.1].forEach((x, i) => {
    const pMesh = new THREE.Mesh(pillowGeo, seatMat);
    pMesh.position.set(x, 0.95, -0.4);
    pMesh.rotation.z = (i % 2 === 0 ? 0.08 : -0.08);
    pMesh.castShadow = true;
    pMesh.userData = { part: 'seat' };
    group.add(pMesh);
  });

  // Armrests
  const armGeo = new THREE.BoxGeometry(0.4, 0.65, 1.8);
  const armL = new THREE.Mesh(armGeo, seatMat);
  armL.position.set(-1.7, 0.75, 0.05);
  armL.castShadow = true;
  group.add(armL);

  const armR = new THREE.Mesh(armGeo, seatMat);
  armR.position.set(1.7, 0.75, 0.05);
  armR.castShadow = true;
  group.add(armR);

  // 4. Brass Corner Brackets
  const bracketGeo = new THREE.BoxGeometry(0.1, 0.2, 0.1);
  [
    [-1.85, 0.1, -0.95],
    [1.85, 0.1, -0.95],
    [-1.85, 0.1, 0.95],
    [1.85, 0.1, 0.95],
  ].forEach(([x, y, z]) => {
    const bMesh = new THREE.Mesh(bracketGeo, accentMat);
    bMesh.position.set(x, y, z);
    bMesh.castShadow = true;
    bMesh.userData = { part: 'accent' };
    group.add(bMesh);
  });

  return group;
}

/**
 * Creates an Executive Table / Desk 3D Group.
 */
export function createExecutiveDeskModel(mats: ModelPartMaterials): THREE.Group {
  const group = new THREE.Group();
  group.name = 'executive-desk';

  const frameMat = createPbrMaterial(mats.frameMatId); // Main Walnut
  const seatMat = createPbrMaterial(mats.seatMatId);   // Leather Blotter
  const accentMat = createPbrMaterial(mats.accentMatId); // Brass Trim & Handles

  // 1. Thick Monolithic Table Top Slab
  const topGeo = new THREE.BoxGeometry(4.0, 0.18, 2.2);
  const topMesh = new THREE.Mesh(topGeo, frameMat);
  topMesh.position.y = 1.35;
  topMesh.castShadow = true;
  topMesh.receiveShadow = true;
  topMesh.userData = { part: 'frame' };
  group.add(topMesh);

  // 2. Leather Inlay Blotter Pad
  const blotterGeo = new THREE.BoxGeometry(2.2, 0.02, 1.3);
  const blotterMesh = new THREE.Mesh(blotterGeo, seatMat);
  blotterMesh.position.set(0, 1.45, 0);
  blotterMesh.receiveShadow = true;
  blotterMesh.userData = { part: 'seat' };
  group.add(blotterMesh);

  // 3. Fluted Wood Pedestals (Left & Right)
  const pedGeo = new THREE.BoxGeometry(0.9, 1.25, 1.8);
  const pedL = new THREE.Mesh(pedGeo, frameMat);
  pedL.position.set(-1.3, 0.625, 0);
  pedL.castShadow = true;
  pedL.receiveShadow = true;
  pedL.userData = { part: 'frame' };
  group.add(pedL);

  const pedR = new THREE.Mesh(pedGeo, frameMat);
  pedR.position.set(1.3, 0.625, 0);
  pedR.castShadow = true;
  pedR.receiveShadow = true;
  pedR.userData = { part: 'frame' };
  group.add(pedR);

  // 4. Brass Edge Trim Strip
  const trimFront = new THREE.Mesh(new THREE.BoxGeometry(4.04, 0.03, 0.03), accentMat);
  trimFront.position.set(0, 1.43, 1.11);
  trimFront.userData = { part: 'accent' };
  group.add(trimFront);

  // Drawer Handles
  const handleGeo = new THREE.BoxGeometry(0.4, 0.035, 0.05);
  [-1.3, 1.3].forEach((x) => {
    [0.9, 0.5, 0.2].forEach((y) => {
      const hMesh = new THREE.Mesh(handleGeo, accentMat);
      hMesh.position.set(x, y, 0.92);
      hMesh.castShadow = true;
      hMesh.userData = { part: 'accent' };
      group.add(hMesh);
    });
  });

  return group;
}

/**
 * Creates a Table Lamp 3D Group.
 */
export function createTableLampModel(mats: ModelPartMaterials): THREE.Group {
  const group = new THREE.Group();
  group.name = 'table-lamp';

  const frameMat = createPbrMaterial(mats.frameMatId);   // Base Marble/Wood
  const accentMat = createPbrMaterial(mats.accentMatId); // Brass Stem
  const seatMat = createPbrMaterial(mats.seatMatId);     // Glass/Fabric Shade

  // 1. Pedestal Base
  const baseGeo = new THREE.CylinderGeometry(0.45, 0.5, 0.35, 32);
  const baseMesh = new THREE.Mesh(baseGeo, frameMat);
  baseMesh.position.y = 0.175;
  baseMesh.castShadow = true;
  baseMesh.receiveShadow = true;
  baseMesh.userData = { part: 'frame' };
  group.add(baseMesh);

  // 2. Brass Stem
  const stemGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.6, 16);
  const stemMesh = new THREE.Mesh(stemGeo, accentMat);
  stemMesh.position.y = 1.15;
  stemMesh.castShadow = true;
  stemMesh.userData = { part: 'accent' };
  group.add(stemMesh);

  // 3. Diffuser Shade
  const shadeGeo = new THREE.CylinderGeometry(0.7, 0.85, 0.85, 32);
  const shadeMat = seatMat.clone();
  shadeMat.transmission = 0.6;
  shadeMat.opacity = 0.85;
  shadeMat.transparent = true;
  const shadeMesh = new THREE.Mesh(shadeGeo, shadeMat);
  shadeMesh.position.y = 2.1;
  shadeMesh.castShadow = true;
  shadeMesh.userData = { part: 'seat' };
  group.add(shadeMesh);

  // 4. Point Light Inside Shade
  const bulbLight = new THREE.PointLight(0xffdf9e, 3.5, 8);
  bulbLight.position.set(0, 2.0, 0);
  group.add(bulbLight);

  return group;
}
