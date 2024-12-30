"use client";

import React, { useEffect, useRef } from "react";
import "./preloader.scss";
import { usePathname } from "next/navigation";
import usePreloader from "../hooks/use-preloader-store";

export default function Preloader() {
  const isLoading = usePreloader((state) => state.isLoading);
  const setLoading = usePreloader((state) => state.setLoading);
  const pathname = usePathname();
  const animation = useRef(null);

  const isBlueTheme = ["/bitrix24", "/"].includes(pathname);

  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setTimeout(() => {
        animation.current.style.animation = "none";
      }, 2000);
    } else {
      window.addEventListener("load", setLoading(false));
      animation.current.style.animation = "fill 1s ease-in infinite alternate";
    }

    return () => {
      window.removeEventListener("load", setLoading);
    };
  }, [setLoading]);

  useEffect(() => {
    if (isLoading) {
      animation.current.style.animation = "fill 1s ease-in infinite alternate";
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1000);
      const stopAnim = setTimeout(() => {
        animation.current.style.animation = "none";
      }, 2000);
      return () => (clearTimeout(timeout), clearTimeout(stopAnim));
    }
  }, [isLoading, setLoading]);

  useEffect(() => {
    if (isBlueTheme) {
      document.documentElement.style.setProperty("--main", "#2ec7f6");
    } else {
      document.documentElement.style.setProperty("--main", "#d3c879");
    }
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pathname, setLoading]);

  return (
    <div className={`preloader ${isLoading ? "active" : ""}`}>
      <span className="loader" ref={animation}></span>
    </div>
  );
}
