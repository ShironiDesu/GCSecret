"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import FadeUp_block from "@/components/ui/FadeUp-block";

export default function TrustedBy_Swiper({ data }) {
  const settings = {
    modules: [Navigation],
    className: "swiper",
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: `.swiper-button-next`,
      prevEl: `.swiper-button-prev`,
    },
    breakpoints: {
      1440: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      769: {
        slidesPerView: 2.5,
        spaceBetween: 24,
      },
      525: {
        slidesPerView: 2.1,
        spaceBetween: 24,
      },
      426: {
        slidesPerView: 1.5,
        spaceBetween: 16,
      },
    },
  };

  return (
    <Swiper {...settings}>
      {data.map((item, key) => (
        <SwiperSlide key={key}>
          <div className="img-wrapper">
            <FadeUp_block>
              <Image src={item.img} alt={item.title} width={100} height={100} loading="lazy" />
            </FadeUp_block>
          </div>
          <FadeUp_block>
            <h3>{item.title}</h3>
          </FadeUp_block>
          <FadeUp_block>
            <p className="trustedBy__subtitle">{item.description}</p>
          </FadeUp_block>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
