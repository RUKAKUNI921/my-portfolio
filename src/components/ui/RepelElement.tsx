"use client";

import { useEffect, useRef } from "react";

const DEFAULT_RADIUS = 100;
const DEFAULT_STRENGTH = 20;

export default function RepelElement({
  children,
  className,
  radius = DEFAULT_RADIUS,
  strength = DEFAULT_STRENGTH,
}: {
  children: React.ReactNode;
  className?: string;
  radius?: number;
  strength?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shapes = Array.from(container.querySelectorAll<SVGElement>("rect, path, polygon"));
    shapes.forEach((shape) => {
      shape.style.transition = "transform 0.2s ease-out";
    });

    let frame: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        shapes.forEach((shape) => {
          const rect = shape.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const dx = centerX - e.clientX;
          const dy = centerY - e.clientY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < radius) {
            const force = (radius - distance) / radius;
            const x = (dx / distance) * strength * force;
            const y = (dy / distance) * strength * force;
            shape.style.transform = `translate(${x}px, ${y}px)`;
          } else {
            shape.style.transform = "translate(0px, 0px)";
          }
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, [radius, strength]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
