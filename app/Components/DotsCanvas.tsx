"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const COUNT = 2800;
const BASE_COLOR = [177, 127, 21]; // #B17F15
const HOVER_COLOR = [140, 100, 15]; // darker shade for hover

function blobShape(t: number): number {
  return (
    1 +
    0.22 * Math.cos(2 * t) +
    0.15 * Math.cos(3 * t + 0.5) +
    0.1 * Math.cos(5 * t - 0.3) +
    0.08 * Math.cos(7 * t + 1.2) +
    0.06 * Math.sin(4 * t + 0.8) +
    0.05 * Math.cos(9 * t - 0.9)
  );
}

interface Dot {
  ox: number;
  oy: number;
  tx: number;
  ty: number;
  x: number;
  y: number;
  size: number;
  alpha: number;
  hovered: boolean;
}

function generateDots(
  triggerEl: HTMLElement,
  canvasW: number,
  canvasH: number
): Dot[] {
  const rect = triggerEl.getBoundingClientRect();
  const scrollY = window.scrollY;

  const sectionTop = rect.top + scrollY;
  const sectionH = rect.height;
  const sectionW = rect.width;

  const cx = rect.left + sectionW * 0.75;
  const cy = sectionTop - scrollY + sectionH * 0.5;

  const scale = Math.min(sectionW * 0.5, sectionH) * 0.42;

  return Array.from({ length: COUNT }, () => {
    const t = Math.random() * Math.PI * 2;
    const maxR = blobShape(t);
    const rFrac = Math.sqrt(Math.random());
    const r = rFrac * maxR;

    const ox = cx + Math.cos(t) * r * scale * (0.95 + 0.1 * Math.random());
    const oy =
      cy + Math.sin(t) * r * scale * 0.65 * (0.95 + 0.1 * Math.random());

    return {
      ox,
      oy,
      tx: Math.random() * canvasW,
      ty: Math.random() * canvasH,
      x: ox,
      y: oy,
      size: 1.2 + Math.random() * 1.6,
      alpha: 0.45 + Math.random() * 0.55,
      hovered: false,
    };
  });
}

// external trigger registration
export let registerTrigger: (el: HTMLElement) => void = () => {};

export default function GlobalDotCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const progressRef = useRef(0);
  const rafRef = useRef<number>(0);
  const triggerElRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setSize();
    window.addEventListener("resize", setSize);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      const mouse = mouseRef.current;
      const progress = progressRef.current;

      for (const d of dotsRef.current) {
        const targetX = d.ox + (d.tx - d.ox) * progress;
        const targetY = d.oy + (d.ty - d.oy) * progress;

        const dx = mouse.x - d.x;
        const dy = mouse.y - d.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 60 && progress < 0.8) {
          const influence = 1 - dist / 60;

          d.hovered = true;

          // ✅ VERY subtle attraction (prevents empty gap)
          d.x += dx * influence * 0.03;
          d.y += dy * influence * 0.03;

          // ✅ keep natural position dominant
          d.x += (targetX - d.x) * 0.1;
          d.y += (targetY - d.y) * 0.1;
        } else {
          d.hovered = false;

          d.x += (targetX - d.x) * 0.12;
          d.y += (targetY - d.y) * 0.12;
        }

        const [r, g, b] = d.hovered ? HOVER_COLOR : BASE_COLOR;

        const size = d.hovered ? d.size * 1.4 : d.size;

        ctx.beginPath();
        ctx.arc(d.x, d.y, size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${
          d.alpha * (1 - progress * 0.3)
        })`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    registerTrigger = (el: HTMLElement) => {
      triggerElRef.current = el;

      dotsRef.current = generateDots(el, window.innerWidth, window.innerHeight);

      ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
        onUpdate: (self) => {
          progressRef.current = self.progress;
        },
      });
    };

    const onResize = () => {
      setSize();

      if (triggerElRef.current) {
        dotsRef.current = generateDots(
          triggerElRef.current,
          window.innerWidth,
          window.innerHeight
        );
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", setSize);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 20,
      }}
    />
  );
}
