"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./AnimatedBackground.scss";
import usePreloader from "../hooks/use-preloader-store";

export default function AnimatedBackground() {
  const video = useRef(null);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const { isPlaying } = usePreloader();
  const [theme, setTheme] = useState("blue");
  // const [videoLoaded, setVideoLoaded] = useState(false);
  const blueThemePages = ["/bitrix24", "/"];

  const videos = {
    blue: {
      pc: "https://dl.dropbox.com/scl/fi/h7ky51iaam5ijvs8f58lx/bg-blue-pc.mp4?rlkey=3m5qvojky79l3jqe94pkeml6m&st=2uxo8pk8&dl=0",
      mobile:
        "https://dl.dropbox.com/scl/fi/jdfxn4cawdm6o9q14jt9d/bg-blue-mobile-low.mp4?rlkey=r9jmk02zxoawyy3yl5mvcs3zp&st=ga99ed7o&dl=0",
    },
    green: {
      pc: "https://dl.dropbox.com/scl/fi/g2y6o817vbm99nqqgoohc/bg-green-pc.mp4?rlkey=0w4kijt0rf6qa0z8jmsgdvf8f&st=gxxa00lw&dl=0",

      mobile:
        "https://dl.dropbox.com/scl/fi/zcwu3xxkakg94qmsta1wn/bg-green-mobile-low.mp4?rlkey=o8xh1j70pymdsdjwfjokwdqtx&st=luu7cey2&dl=0",
    },
  };

  const checkTheme = () => {
    if (blueThemePages.includes(pathname)) {
      setTheme("blue");
    } else {
      setTheme("green");
    }
  };

  const checkWindowWidth = () => {
    setIsMobile(window.innerWidth < 960);
  };

  useEffect(() => {
    checkTheme();
  }, [pathname]);

  useEffect(() => {
    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);

    return () => window.removeEventListener("resize", checkWindowWidth);
  }, []);

  const handleVideoLoad = () => {
    // setVideoLoaded(true);
  };

  useEffect(() => {
    if (isPlaying) {
      video.current.play();
    } else {
      video.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="animated-background">
      <Image
        src={`/images/bg-${theme}-${isMobile ? "mobile" : "pc"}.jpg`}
        fill
        className="main-bg"
        alt="Background image"
        priority
        unoptimized
      />

      <video
        key={`${theme}-${isMobile}`}
        className="animated-background__video"
        autoPlay
        playsInline
        muted
        loop
        onLoadedData={handleVideoLoad}
        ref={video}
      >
        <source src={isMobile ? videos[theme].mobile : videos[theme].pc} type="video/mp4" />
      </video>
    </div>
  );
}
