"use client";
import React, { useEffect, useState } from "react";
import "./hero.scss";
import ButtonText from "@/components/ui/Button-text";
import FadeUp_block from "@/components/ui/FadeUp-block";
import Image from "next/image";
import ButtonRounded from "@/components/ui/ButtonRounded";

export default function Hero() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);
  return (
    <div className="hero" id="hero">
      <div className="container">
        <FadeUp_block>
          <h1>
            Внедрение{" "}
            <span className="blue__text">
              Битрикс24 -<br />
            </span>
            <span className="h1__minitext">
              {" "}
              Автоматизация вашего&nbsp;бизнеса.
            </span>
          </h1>
        </FadeUp_block>

        <FadeUp_block delay={0.1}>
          <p className="hero__subtitle">
            Быстрое и безболезненное внедрение <br /> от интегратора{" "}
            <span className="blue__text">#1 </span>
          </p>
        </FadeUp_block>

        <div className="hero__btns">
          <ButtonRounded popup="cases" className="btn">
            Посмотреть кейсы
          </ButtonRounded>
          <a
            href="https://wa.me/77752214996?text=Меня+интересует+демо-версия+Битрикс24"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <ButtonRounded className="btn">
              Быстрое внедрение
              <Image
                className="button-img"
                src="/icons/arrow-top-right-white.png"
                layout="fixed"
                width={24}
                height={30}
                alt="arrow top right white png"
              />
            </ButtonRounded>
          </a>
        </div>

        <FadeUp_block delay={0.5} start={"top bottom"}>
          <p className="hero__description">
            TOO Gamechanger — объединение экспертов с многолетним опытом в
            автоматизации <br />
            бизнес-процессов на международном рынке.{" "}
            <span className="hero__description__gray">
              {" "}
              Мы создаем системы, которые обеспечивают
              <br /> полный контроль, прозрачность и оптимальное соотношение
              цены и качества.
            </span>
          </p>
        </FadeUp_block>
      </div>
    </div>
  );
}
