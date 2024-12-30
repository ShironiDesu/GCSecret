"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import FadeUp_block from "@/components/ui/FadeUp-block";

export default function Section2_Swiper({ data }) {
  const settings = {
    modules: [Navigation, Pagination],
    className: "swiper",
    slidesPerView: 1,
    autoHeight: true,
    navigation: true,
    pagination: { clickable: true },
  };


  return (
    <Swiper {...settings}>
      {data.map((item, key) => (
        <SwiperSlide key={key} className="section2__card">
          <FadeUp_block>
            <Image
              className="section2__card__img"
              src={item.icon}
              width={64}
              height={64}
              alt={item.title}
            />
          </FadeUp_block>
          <FadeUp_block>
            <h3>{item.title}</h3>
          </FadeUp_block>

          <FadeUp_block>
            <p
              className="section2__card__subtitle"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
          </FadeUp_block>
          <ul className="section2__list">
            {item.list.map((item, index) => (
              <li   key={index}>
                <Image src="/icons/select.svg" alt={item} width={24} height={24}/>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <FadeUp_block>
            <Image
              className="section2__main-img"
              src={item.img}
              width={1100}
              height={630}
              alt={item.title}
            />
            {/* <video controls muted preload="none" poster="/images/video-preloader.jpg">
              <source src={item.video} type="video/mp4" />
            </video> */}
          </FadeUp_block>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
