"use client";
import { useEffect } from "react";
import Lenis from "lenis";


export default function LenisInit() {
  useEffect(() => {
    let lenis;

    const initializeLenis = () => {
      if (window.innerWidth >= 768) {
        lenis = new Lenis();

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      }
    };

    initializeLenis();

    const handleResize = () => {
      if (lenis && window.innerWidth < 1024) {
        lenis.destroy();
        lenis = null;
      } else if (!lenis && window.innerWidth >= 1024) {
        initializeLenis();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (lenis) lenis.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return null;
}
