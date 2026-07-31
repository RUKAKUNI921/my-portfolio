"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useFadeInOnLoad<T extends HTMLElement>({
  scrollTrigger = true,
}: { scrollTrigger?: boolean } = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const media = container.querySelector<HTMLImageElement | HTMLIFrameElement>("img, iframe");
    const dots = container.querySelector<HTMLElement>("[data-dots]");
    if (!media) return;

    const animate = () => {
      const tl = gsap.timeline({
        delay: 0.2,
        scrollTrigger: scrollTrigger
          ? {
              trigger: container,
              start: "top 80%",
              // markers: true,
            }
          : undefined,
      });

      if (dots) {
        tl.to(dots, { opacity: 1, duration: 0.4, ease: "power1.out" });
      }

      tl.to(
        media,
        {
          // clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "power2.out",
          opacity: 1,
        },
        "+=0.1",
      );
    };

    if (media instanceof HTMLImageElement && media.complete) {
      animate();
    } else {
      media.addEventListener("load", animate);
      return () => media.removeEventListener("load", animate);
    }
  }, []);

  return ref;
}
