"use client";

import { useEffect } from "react";

export default function HeaderScrollState() {
  useEffect(() => {
    function updateHeaderState() {
      document.documentElement.classList.toggle("pageScrolled", window.scrollY > 24);
    }

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  return null;
}
