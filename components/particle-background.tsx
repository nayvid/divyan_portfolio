"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

type Particle = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  opacity: number;
};

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frameId = 0;

    const particleColor =
      resolvedTheme === "light" ? "147, 51, 234" : "216, 180, 254";

    function resize() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.floor((width * height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.4,
        speed: Math.random() * 0.15 + 0.03,
        drift: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.5 + 0.15,
      }));
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity})`;
        ctx.fill();
      }
      frameId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);

    if (!prefersReducedMotion) {
      frameId = requestAnimationFrame(draw);
    } else {
      draw();
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
