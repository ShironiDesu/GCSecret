"use client";
import React from "react";
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

export default function Segments_swiper({ id, data, autoHeight }) {
    const changeBulletWrapper = (e) => {
        // document.documentElement.style.setProperty(
        //   "--active-swiper-slide",
        //   `${e.activeIndex}`
        // );

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
            611: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            610: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
        },
        onSlideChange: changeBulletWrapper,
    };



    return (
        <Swiper {...settings}>
            {data.map((item, index) => (
                <SwiperSlide className="card2-holder" key={index}>

                        <span style={{paddingBottom: '10px'}}><span
                            className="card2-price">{item.price}</span>т</span>


                        <div className="card2-btn">
                            до {item.workers_number} сотрудников
                        </div>


                </SwiperSlide>
            ))}

            <div className="swiper-pagination" id={`swiper-pagination-${id}`}></div>
        </Swiper>
    );
}
