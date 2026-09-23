import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createLoungeChairModel, createModularSofaModel, createExecutiveDeskModel, createTableLampModel } from './3dModels';
import type { ModelPartMaterials } from './3dModels';
import { createPbrMaterial } from './materialPbrFactory';

interface ThreeCanvasStudioProps {
  modelType: 'chair' | 'sofa' | 'desk' | 'lamp';
  partMaterials: ModelPartMaterials;
  lightingEnvironment: 'daylight' | 'warm' | 'spotlight';
  autoRotate: boolean;
  onCanvasReady?: (exportSnapshotFn: () => void) => void;
}

export const ThreeCanvasStudio: React.FC<ThreeCanvasStudioProps> = ({
  modelType,
  partMaterials,
  lightingEnvironment,
  autoRotate,
  onCanvasReady,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const activeModelGroupRef = useRef<THREE.Group | null>(null);
  const mainDirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const hemiLightRef = useRef<THREE.HemisphereLight | null>(null);
  const fillLightRef = useRef<THREE.DirectionalLight | null>(null);

  // Initialize Scene, Camera, Renderer, Controls
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#121216');
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(3.8, 2.8, 4.8);
    cameraRef.current = camera;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35; // Bright tone mapping
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.02; // Prevent camera going below floor
    controls.minDistance = 2.0;
    controls.maxDistance = 12.0;
    controls.target.set(0, 1.0, 0);
    controlsRef.current = controls;

    // 5. Studio Ground Reflection Floor Plane
    const floorGeo = new THREE.PlaneGeometry(24, 24);
    const floorMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1A1A22'),
      roughness: 0.65,
      metalness: 0.15,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    // Subtle Metallic Studio Floor Grid
    const grid = new THREE.GridHelper(24, 48, 0xC5A059, 0x3A3A48);
    grid.position.y = 0.001;
    grid.material.opacity = 0.22;
    grid.material.transparent = true;
    scene.add(grid);

    // 6. Rich Multi-Light Studio Environment
    // Hemisphere Light (Sky & Ground fill light to eliminate dark shadows under seats)
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x555566, 2.2);
    scene.add(hemiLight);
    hemiLightRef.current = hemiLight;

    // Main Key Light
    const mainDirLight = new THREE.DirectionalLight(0xfff8ee, 3.5);
    mainDirLight.position.set(6, 10, 6);
    mainDirLight.castShadow = true;
    mainDirLight.shadow.mapSize.width = 2048;
    mainDirLight.shadow.mapSize.height = 2048;
    mainDirLight.shadow.bias = -0.0001;
    mainDirLight.shadow.normalBias = 0.02;
    scene.add(mainDirLight);
    mainDirLightRef.current = mainDirLight;

    // Soft Front Fill Light
    const fillLight = new THREE.DirectionalLight(0xe8f0ff, 1.8);
    fillLight.position.set(-6, 5, -4);
    scene.add(fillLight);
    fillLightRef.current = fillLight;

    // Rim Backlight for Specular Edge Highlights
    const rimLight = new THREE.DirectionalLight(0xffeaaf, 1.4);
    rimLight.position.set(0, 8, -6);
    scene.add(rimLight);

    // Snapshot Exporter Trigger
    if (onCanvasReady) {
      onCanvasReady(() => {
        if (!rendererRef.current) return;
        rendererRef.current.render(scene, camera);
        const dataUrl = rendererRef.current.domElement.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `ALURIA_LIVINGS_3D_Studio_${modelType}.png`;
        link.href = dataUrl;
        link.click();
      });
    }

    // Resize Handler
    const handleResize = () => {
      if (!mount || !renderer || !camera) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (controlsRef.current) {
        controlsRef.current.autoRotate = autoRotate;
        controlsRef.current.autoRotateSpeed = 2.0;
        controlsRef.current.update();
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      controls.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update 3D Model when modelType changes
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Remove old model group
    if (activeModelGroupRef.current) {
      scene.remove(activeModelGroupRef.current);
    }

    // Build new model
    let newGroup: THREE.Group;
    switch (modelType) {
      case 'chair':
        newGroup = createLoungeChairModel(partMaterials);
        break;
      case 'sofa':
        newGroup = createModularSofaModel(partMaterials);
        break;
      case 'desk':
        newGroup = createExecutiveDeskModel(partMaterials);
        break;
      case 'lamp':
        newGroup = createTableLampModel(partMaterials);
        break;
    }

    scene.add(newGroup);
    activeModelGroupRef.current = newGroup;

    // Dynamically adjust camera & target based on model size
    if (controlsRef.current && cameraRef.current) {
      if (modelType === 'sofa') {
        cameraRef.current.position.set(5.2, 3.5, 5.8);
        controlsRef.current.target.set(0, 0.8, 0);
      } else if (modelType === 'desk') {
        cameraRef.current.position.set(4.8, 3.2, 5.2);
        controlsRef.current.target.set(0, 0.9, 0);
      } else if (modelType === 'lamp') {
        cameraRef.current.position.set(2.8, 2.2, 3.8);
        controlsRef.current.target.set(0, 1.3, 0);
      } else {
        // Chair
        cameraRef.current.position.set(3.8, 2.8, 4.8);
        controlsRef.current.target.set(0, 1.1, 0);
      }
    }
  }, [modelType]);

  // Real-time Material Swap on Active Model
  useEffect(() => {
    const group = activeModelGroupRef.current;
    if (!group) return;

    group.traverse((child) => {
      if (child instanceof THREE.Mesh && child.userData.part) {
        const part = child.userData.part as 'seat' | 'frame' | 'accent';
        let targetMatId = partMaterials.seatMatId;
        if (part === 'frame') targetMatId = partMaterials.frameMatId;
        if (part === 'accent') targetMatId = partMaterials.accentMatId;

        const newMat = createPbrMaterial(targetMatId);
        child.material = newMat;
      }
    });
  }, [partMaterials]);

  // Update Lighting Environment
  useEffect(() => {
    const mainLight = mainDirLightRef.current;
    const hemiLight = hemiLightRef.current;
    const fillLight = fillLightRef.current;
    const scene = sceneRef.current;
    if (!mainLight || !hemiLight || !fillLight || !scene) return;

    switch (lightingEnvironment) {
      case 'daylight':
        scene.background = new THREE.Color('#121216');
        mainLight.color.setHex(0xfff8ee);
        mainLight.intensity = 3.5;
        mainLight.position.set(6, 10, 6);
        hemiLight.color.setHex(0xffffff);
        hemiLight.groundColor.setHex(0x555566);
        hemiLight.intensity = 2.2;
        fillLight.intensity = 1.8;
        break;

      case 'warm':
        scene.background = new THREE.Color('#1A1410');
        mainLight.color.setHex(0xffcb85);
        mainLight.intensity = 3.8;
        mainLight.position.set(7, 7, 5);
        hemiLight.color.setHex(0xffd5a0);
        hemiLight.groundColor.setHex(0x664433);
        hemiLight.intensity = 2.5;
        fillLight.intensity = 2.0;
        break;

      case 'spotlight':
        scene.background = new THREE.Color('#0A0A0E');
        mainLight.color.setHex(0xe0f0ff);
        mainLight.intensity = 4.8;
        mainLight.position.set(2, 10, 3);
        hemiLight.color.setHex(0x8090a0);
        hemiLight.groundColor.setHex(0x202030);
        hemiLight.intensity = 1.4;
        fillLight.intensity = 1.0;
        break;
    }
  }, [lightingEnvironment]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full relative cursor-grab active:cursor-grabbing"
    />
  );
};
