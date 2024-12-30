"use client";
import React, { useState } from "react";
// swiper
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// others
import { useModal } from "@/components/hooks/use-modal-store";
import Popup from "@/components/ui/Popup";
import "./certificates.scss";
import Image from "next/image";

export default function Certificates() {
  const { closePopup } = useModal();
  const [activeImg, setActiveImg] = useState("/images/certificates/Bitrix-sertificat-1.png");

  const images = [
    "/images/certificates/Bitrix-sertificat-1.png",
    "/images/certificates/Bitrix-sertificat-2.png",
    "/images/certificates/Bitrix-sertificat-3.png",
    "/images/certificates/Bitrix-sertificat-4.png",
    "/images/certificates/Bitrix-sertificat-5.png",
    "/images/certificates/Bitrix-sertificat-6.png",
    "/images/certificates/Bitrix-sertificat-7.png",
    "/images/certificates/Bitrix-sertificat-8.png",
    "/images/certificates/Bitrix-sertificat-9.png",
    "/images/certificates/Bitrix-sertificat-10.png",
    "/images/certificates/Bitrix-sertificat-11.png",
    "/images/certificates/Bitrix-sertificat-12.png",
    "/images/certificates/Bitrix-sertificat-13.png",
    "/images/certificates/Bitrix-sertificat-14.png",
  ];

  const changeActiveImg = (e) => {
    setActiveImg(images[e.activeIndex]);
  };

  const settings = {
    modules: [Navigation],
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 3,
    className: "segments-swiper",
    id: "certificates_swiper",
    navigation: {
      nextEl: `.certificates-next`,
      prevEl: `.certificates-prev`,
    },
    pagination: { el: ".swiper-pagination", clickable: false },
    breakpoints: {
      768: {
        slidesPerView: 6,
      },
      475: {
        slidesPerView: 5,
      },
    },
    onSlideChange: changeActiveImg,
  };
  return (
    <Popup className="certificates" popupName="certificates">
      <button className="close_popup" onClick={closePopup}>
        <Image src="/icons/cancel.svg" width={64} height={64} alt="close btn" />
      </button>

      <div className="certificates__img-wrapper">
        <img
          className="certificates__main-img"
          src={activeImg}
          alt="Сертификат подтверждающий прохождение курса от Bitrix24"
          loading="lazy"
        />
      </div>

      <Swiper {...settings}>
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt="Сертификат подтверждающий прохождение курса от Bitrix24"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="certificates-navigation">
        <button className="certificates-prev">
          <Image src="/icons/close-btn.svg" width={64} height={64} alt="close btn" loading="lazy" />
        </button>
        <button className="certificates-next">
          <Image src="/icons/close-btn.svg" width={64} height={64} alt="close btn" loading="lazy" />
        </button>
      </div>
    </Popup>
  );
}
