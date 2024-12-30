"use client";
import React, { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
// swiper
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// others
import Image from "next/image";
import "./swiper.scss";
import ButtonText from "@/components/ui/Button-text";
import FadeUp_block from "@/components/ui/FadeUp-block";

export default function Segments_swiper({ id, data, autoHeight }) {
  const router = useSearchParams();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current?.swiper.slideTo(0);
    }
  }, [router]);
  const changeBulletWrapper = (e) => {
    const style = document.createElement("style");
    style.textContent = `
      #swiper-pagination-${id}::after {
    left: calc(32px * ${e.activeIndex});

      }
    `;
    document.head.appendChild(style);
  };

  const settings = {
    modules: [Navigation, Pagination],
    className: "segments-swiper",
    id,
    slidesPerView: 1,
    spaceBetween: 16,
    autoHeight: autoHeight,
    speed: "500",
    navigation: {
      nextEl: `.swiper-button-next-${id}`,
      prevEl: `.swiper-button-prev-${id}`,
    },
    pagination: { el: ".swiper-pagination", clickable: false },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      525: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
    },
    onSlideChange: changeBulletWrapper,
  };

  return (
    <Swiper {...settings} ref={swiperRef}>
      {data.map((item, index) => (
        <SwiperSlide key={index}>
            <h3>{item.title}</h3>
          <FadeUp_block trigger={`#${id}`} delay={0.2}>
            <p className="segments-swiper__subtitle">{item.subtitle}</p>
          </FadeUp_block>
          <ul>
            {item.list.map((listItem, listItemIndex) => (
              <FadeUp_block key={listItemIndex} trigger={`#${id}`} delay={0.2 + listItemIndex / 20}>
                <li>
                  <Image
                    src={id === "bitrix-swiper" ? "/icons/select.svg" : "/icons/select-gold.svg"}
                    width={16}
                    height={16}
                    alt="select icon svg"
                    loading="lazy"
                  />

                  <p>{listItem}</p>
                </li>
              </FadeUp_block>
            ))}
          </ul>
          {id === "bitrix-swiper" ? (
            <div className="segments-swiper__footer">
              <FadeUp_block trigger={`#${id}`} delay={.4}>
              <div className="segments-swiper__price-wrapper">
                <span className="segments-swiper__price">{item.price[0]}</span>
                <div className="segments-swiper__price--line"></div>
                <span className="segments-swiper__price">{item.price[1]}</span>
              </div>

              </FadeUp_block>

              <ButtonText className="segments-swiper__order-btn" popup="contactUs">
                Заказать
              </ButtonText>
            </div>
          ) : (
            <div
              className={`segments-swiper__footer ${
                item.price.includes("отчет") && "segments-swiper__footer--bitrix"
              }`}
            >
              <FadeUp_block trigger={`#${id}`} delay={.8}>
                <p className="segments-swiper__days">{item.days}</p>
              </FadeUp_block>
              <FadeUp_block trigger={`#${id}`} delay={0.8}>
                <span
                  className="segments-swiper__price"
                  dangerouslySetInnerHTML={{ __html: item.price }}
                />
              </FadeUp_block>
              <ButtonText className="segments-swiper__order-btn" popup="contactUs">
                Заказать
              </ButtonText>
            </div>
          )}
        </SwiperSlide>
      ))}

      <FadeUp_block trigger={`#${id}`}>
        <div className="swiper-pagination" id={`swiper-pagination-${id}`}></div>
      </FadeUp_block>
    </Swiper>
  );
}
