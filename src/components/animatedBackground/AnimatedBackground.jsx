"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./AnimatedBackground.scss";
import usePreloader from "../hooks/use-preloader-store";

export default function AnimatedBackground() {
  const containerRef = useRef(null);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const { isPlaying } = usePreloader();
  const timelineRef = useRef(null);
  const [blueTheme, setBlueTheme] = useState(true);
  const [imagesPath, setImagesPath] = useState("/images/animatedBg-blue");

  const checkTheme = () => {
    if (pathname === "/bitrix24" || pathname === "/") {
      setBlueTheme(true);
      setImagesPath("/images/animatedBg-blue");
    } else {
      setBlueTheme(false);
      setImagesPath("/images/animatedBg");
    }
  };

  useEffect(() => {
    checkTheme();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    checkTheme();
  }, [pathname]);

  // Генерация путей изображений
  const images = useMemo(() => {
    const imgArray = Array.from(
      { length: 10 },
      (_, i) => `${imagesPath}/bg-${i + 1}.${blueTheme ? "png" : "jpg"}`
    );
    imgArray.push(`${imagesPath}/bg-1.${blueTheme ? "png" : "jpg"}`);
    return imgArray;
  }, [imagesPath, blueTheme]);

  // Инициализация GSAP анимации
  useEffect(() => {
    if (isMobile) return; // Отключаем GSAP для мобильных устройств

    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".bg-image");
      gsap.set(images, { opacity: 0 });
      const tl = gsap.timeline({ repeat: -1 });
      images.forEach((image, index) => {
        const delay = index === 0 ? 0 : "-=3"; // Начинаем следующее изображение через 3 секунды
        tl.to(
          image,
          {
            opacity: 1,
            duration: 5,
          },
          delay
        );
      });
      timelineRef.current = tl;
    }, containerRef);

    return () => ctx.revert();
  }, [images, isMobile]);

  useEffect(() => {
    if (timelineRef.current) {
      if (isPlaying) {
        timelineRef.current.play(); // Продолжить анимацию
      } else {
        timelineRef.current.pause(); // Поставить на паузу
      }
    }
  }, [isPlaying]);

  return (
    <div className="animated-background" ref={containerRef}>
      <Image
        src={`${imagesPath}/bg-1.${blueTheme ? "png" : "jpg"}`}
        fill
        className="main-bg"
        alt="Background image"
        priority
        unoptimized
      />

      {!isMobile &&
        images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Background image ${index + 1}`}
            fill
            className="bg-image"
            priority={index === 0}
          />
        ))}
    </div>
  );
}
