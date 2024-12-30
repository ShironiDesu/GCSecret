"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function Section3_Swiper_Client({ imagesPaths }) {
  const settings = {
    className: "swiper",
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    autoplay: { // Исправлено
      delay: 1000,
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 32,
      },
      600: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
      350: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
    modules: [Autoplay], // Добавлено
  };

  return (
    <Swiper {...settings}>
      {imagesPaths.map((path, key) => (
        <SwiperSlide key={key} className="swiper-slide">
          <Image
            src={path}
            alt="company logo"
            width={150}
            height={90}
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
