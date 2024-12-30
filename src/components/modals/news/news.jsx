"use client";
import React, { useEffect, useRef, useState } from "react";
import "./news.scss";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation";

export default function News() {
  const path = usePathname();
  const news = useRef(null);
  const main = useRef(null);

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  // Получение параметров query вручную
  const getQueryParam = (param) => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }
    return null;
  };

  // Проверка видимости компонента
  useEffect(() => {
    const segment = getQueryParam("name");
    const isVisible = path === "/" || (path === "/segments" && segment === "retail");
    setShow(isVisible);
  }, [path]);

  // Плавное открытие блока
  const openBlock = () => {
    main.current.style.maxHeight = main.current.scrollHeight + 42 + "px";
    setTimeout(() => {
      setOpen(true);
    }, 200);
  };

  // Закрытие новостного блока
  const close = () => {
    if (news.current) {
      news.current.classList.remove("active");
    }
    setShow(false);
  };

  // Автоматическое появление блока через 10 секунд
  useEffect(() => {
    if (show) {
      news?.current.classList.add("active");
      const timer = setTimeout(() => {
        openBlock();
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <article className="news" id="news" ref={news}>
      <div className="news__header">
        <span className="news__close" onClick={close}>
          <Image src="/icons/cross.svg" width={20} height={20} alt="close modal" />
        </span>
        <h2 className="news__header__title">Зимняя акция!</h2>
        <p className="news__header__description">Скидка на настройку и обслуживание</p>
        <span className="news__gift">
          <Image
            src="/images/Gift.png"
            alt="Gift from GC"
            width={180}
            height={180}
            loading="lazy"
            unoptimized
          />
        </span>
      </div>
      <div className="news__main" ref={main}>
        <p className="news__main__title">
          Заключите договор на январь 2025 года и получите скидку от{" "}
          <b>
            <span className="gold_text"> 10% до 30%</span>
          </b>{" "}
          на настройку и обслуживание системы.
        </p>
        <p className="news__main__subtitle">
          <b>
            Успейте забронировать время! <br /> Начните новый год с автоматизации!
          </b>
        </p>
        <a
          href="https://wa.me/77752214996?text=Добрый+день%2C+меня+интересует+новогодняя+акция"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Получить скидку!
        </a>
      </div>
    </article>
  );
}
