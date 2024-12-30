"use client";
import React, { useEffect, useRef, useState } from "react";
import "./header.scss";
import Button from "../ui/Button";
import Image from "next/image";
import PreloadLink from "../ui/Link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const [active, setActive] = useState(false);
  const header = useRef(null);

  const handleBurger = () => {
    setActive(!active);
  };

  const closeMobileHeader = () => {
    setActive(false);
  };

  useEffect(() => {
    const element = header.current;

    gsap.from(element, {
      y: -100,
      delay: 1.5,
      duration: 0.7,
    });
  }, []);

  return (
    <header className={`header  ${active ? "active" : ""}`}>
      <div className="container" ref={header}>
        <PreloadLink href={"/"} className="header__home" onClick={closeMobileHeader}>
          Gamechanger
        </PreloadLink>

        <Button className="header__calendar" onClick={closeMobileHeader} popup="calendar">
          Связаться с руководством
        </Button>
        <button className={`header__burger ${active ? "active" : ""}`} onClick={handleBurger}>
          <div className="header__burger__wrapper">
            <span className="header__burger--top"></span>
            <span className="header__burger--center"></span>
            <span className="header__burger--bottom"></span>
            <Image src={"/icons/cross.svg"} width={100} height={100} alt="close" loading="lazy" />
          </div>
        </button>
        <ul className="header__list">
          <li>
            <Button
              popup="segments"
              onClick={() => {
                setTimeout(() => {
                  closeMobileHeader();
                }, 500);
              }}
            >
              Выбрать нишу
            </Button>
          </li>

          <li>
            <Button
              popup="cases"
              onClick={() => {
                setTimeout(() => {
                  closeMobileHeader();
                }, 500);
              }}
            >
              Кейсы
            </Button>
          </li>

          <li>
            <PreloadLink href={"/about"} onClick={closeMobileHeader}>
              О нас
            </PreloadLink>
          </li>

          <li>
            <PreloadLink href={"/bitrix24"} onClick={closeMobileHeader}>
              Обзор Битрикс24
            </PreloadLink>
          </li>
          <li>
            <Button
              onClick={closeMobileHeader}
              popup="video-popup"
              videoSrc="/video/reviews/ASC.mp4"
            >
              Отзывы
            </Button>
          </li>
          <li>
            <a
              href="https://wa.me/77752214996?text=Здравствуйте%2C+хочу+уточнить+детали"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="header__whatsapp"
              onClick={closeMobileHeader}
            >
              Написать нам
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
