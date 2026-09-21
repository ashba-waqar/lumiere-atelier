import React, { useEffect, useRef } from 'react';

interface FluidMeshGradientProps {
  intensity?: number;
}

export const FluidMeshGradient: React.FC<FluidMeshGradientProps> = ({ intensity = 1 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Liquid Mesh Nodes (Taupe & Terracotta Silk Tones)
    const nodes = [
      { x: width * 0.2, y: height * 0.3, radius: width * 0.45, color: 'rgba(230, 212, 189, 0.65)', vx: 0.25, vy: 0.18, phase: 0 },
      { x: width * 0.8, y: height * 0.2, radius: width * 0.5, color: 'rgba(203, 176, 156, 0.45)', vx: -0.2, vy: 0.22, phase: 2 },
      { x: width * 0.5, y: height * 0.75, radius: width * 0.55, color: 'rgba(250, 246, 238, 0.95)', vx: 0.15, vy: -0.15, phase: 4 },
      { x: width * 0.1, y: height * 0.8, radius: width * 0.4, color: 'rgba(158, 126, 102, 0.25)', vx: 0.18, vy: -0.25, phase: 1 },
      { x: width * 0.85, y: height * 0.85, radius: width * 0.45, color: 'rgba(244, 236, 225, 0.85)', vx: -0.12, vy: 0.12, phase: 3 },
    ];

    let t = 0;

    const render = () => {
      t += 0.008 * intensity;

      // Base Light Alabaster Canvas
      ctx.fillStyle = '#FAF6EE';
      ctx.fillRect(0, 0, width, height);

      // Render flowing nodes with soft radial gradients
      nodes.forEach((node) => {
        // Sinusoidal movement
        const currentX = node.x + Math.sin(t * node.vx + node.phase) * (width * 0.08);
        const currentY = node.y + Math.cos(t * node.vy + node.phase) * (height * 0.08);
        const currentRadius = node.radius + Math.sin(t * 0.5 + node.phase) * 40;

        const grad = ctx.createRadialGradient(
          currentX,
          currentY,
          10,
          currentX,
          currentY,
          Math.max(50, currentRadius)
        );

        grad.addColorStop(0, node.color);
        grad.addColorStop(0.5, node.color.replace(/[\d\.]+\)$/, '0.1)'));
        grad.addColorStop(1, 'rgba(250, 246, 238, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(currentX, currentY, Math.max(50, currentRadius), 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle metallic mesh weave lines
      ctx.strokeStyle = 'rgba(158, 126, 102, 0.04)';
      ctx.lineWidth = 1;

      const spacing = 120;
      for (let x = 0; x < width; x += spacing) {
        ctx.beginPath();
        const wave = Math.sin(t + x * 0.005) * 20;
        ctx.moveTo(x, 0);
        ctx.bezierCurveTo(x + wave, height * 0.33, x - wave, height * 0.66, x, height);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
    />
  );
};
