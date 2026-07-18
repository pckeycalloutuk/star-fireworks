"use client";

import { useEffect, useRef } from "react";

/** Lightweight canvas spark/ember effect. Disabled for reduced motion. */
export function Particles({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vy: number; vx: number; r: number; a: number; hue: number };
    let particles: P[] = [];

    // Deterministic-ish pseudo random (no Math.random dependency in tight loop needs)
    const rand = () => Math.random();

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.floor((w * h) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: rand() * w,
        y: rand() * h,
        vy: -(0.15 + rand() * 0.5),
        vx: (rand() - 0.5) * 0.3,
        r: 0.6 + rand() * 1.8,
        a: 0.2 + rand() * 0.6,
        hue: rand() > 0.5 ? 42 : 14,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.y += p.vy;
        p.x += p.vx;
        p.a -= 0.0015;
        if (p.y < -10 || p.a <= 0) {
          p.y = h + 10;
          p.x = rand() * w;
          p.a = 0.2 + rand() * 0.6;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, ${p.a})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 60%, ${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
