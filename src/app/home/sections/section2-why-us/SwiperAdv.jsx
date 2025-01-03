"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay  } from "swiper/modules";
import "swiper/css";
import "./whyUs.scss"

export default function SwiperAdv({ advArr }) {
  const settings = {
    className: "swiper",
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    speed: 1000,
    autoplay: { // Исправлено
      delay: 4000,
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      350: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
    },
    modules: [Autoplay], // Добавлено
  };

  return (
    <Swiper {...settings}>
      {advArr.map((adv, key) => (
        <SwiperSlide key={key} className="swiper-slide">
          <h3>{adv.title}</h3>
          <p className='why-us__big-paragraph' dangerouslySetInnerHTML={{ __html: adv.desc }}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
