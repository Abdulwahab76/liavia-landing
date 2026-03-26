"use client";

import { useEffect, useRef } from "react";

const COUNT = 1200;

const PALETTES = [
  [199, 147, 40],
  [173, 120, 28],
  [140, 95, 15],
  [210, 170, 80],
  [255, 245, 220],
  [240, 220, 170],
  [160, 110, 50],
  [120, 75, 30],
  [190, 140, 70],
];

export default function SectionDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setSize();

    const dots = Array.from({ length: COUNT }, () => {
      const w = canvas.width;
      const h = canvas.height;

      const cx = w * 0.5;
      const cy = h * 0.5;

      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * (w * 0.4);

      return {
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius * 0.7,
        size: 1 + Math.random() * 1.5,
        alpha: 0.5 + Math.random() * 0.5,
        color: PALETTES[Math.floor(Math.random() * PALETTES.length)],
      };
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const d of dots) {
        const [r, g, b] = d.color;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${d.alpha})`;
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", setSize);

    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
