"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./logo.scss";

export default function Logo({ classname }) {
  const [isMobile, setIsMobile] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePageLoad = () => {
    setPageLoaded(true);
    setTimeout(() => {
      setShowIframe(true);
    }, 5000);
  };

  useEffect(() => {
    if (!isMobile) return;
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, [isMobile]);

  return (
    <div className={classname}>
      {!showIframe && (
        <Image src="/video/Logo-preloader.png" width={400} height={400} alt="Gamechanger logo" />
      )}
      {pageLoaded && isMobile && (
        <iframe
          title="Gamecahgner logo"
          className={`iframe-logo ${showIframe ? "iframe-logo--ready" : "iframe-logo--loading"}`}
          src="https://lottie.host/embed/b2185b70-541f-47a6-bce9-7ca16be2eada/8CsA29m1fz.lottie"
        ></iframe>
      )}
    </div>
  );
}
