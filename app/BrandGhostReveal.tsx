"use client";

import { useEffect } from "react";

export default function BrandGhostReveal() {
  useEffect(() => {
    const target = document.querySelector<HTMLElement>("[data-brand-ghost]");

    if (!target) {
      return;
    }

    let ticking = false;

    const updateParallax = () => {
      const rect = target.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const clamped = Math.min(Math.max(progress, 0), 1);
      const drift = (clamped - 0.5) * 48;
      const logoDrift = drift * 1.2;
      const auraDrift = drift * 0.7;

      target.style.setProperty("--brand-parallax", `${drift.toFixed(2)}px`);
      target.style.setProperty("--brand-logo-parallax", `${logoDrift.toFixed(2)}px`);
      target.style.setProperty("--brand-aura-parallax", `${auraDrift.toFixed(2)}px`);

      ticking = false;
    };

    const requestParallaxUpdate = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateParallax);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        target.classList.toggle("brandGhostVisible", entry.isIntersecting);

        if (entry.isIntersecting) {
          requestParallaxUpdate();
        }
      },
      {
        threshold: 0.45,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    observer.observe(target);
    requestParallaxUpdate();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);
    };
  }, []);

  return null;
}
