"use client";
import React, { useEffect, useState } from "react";
import { useModal } from "@/components/hooks/use-modal-store";
import Form from "@/components/form/Form";
import Popup from "@/components/ui/Popup";
import "./contact.scss";
import Image from "next/image";

export default function ContactUs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { closePopup } = useModal();
  return (
    <Popup className="contactUs" popupName="contactUs">
      <div className="contactUs__wrapper">
        <button className="close_popup" onClick={closePopup}>
          <Image src="/icons/close-btn.svg" width={64} height={64} alt="close btn" loading="lazy" />
        </button>
        <h2>Свяжитесь с нами</h2>
        <Form />
      </div>

      {/* {isMobile ? (
        <iframe
          title="Gamecahgner logo"
          className="contactUs__logo"
          src="https://lottie.host/embed/b2185b70-541f-47a6-bce9-7ca16be2eada/8CsA29m1fz.lottie"
        ></iframe>
      ) : (
      )} */}
      <Image
        src="/images/Romb.png"
        className="contactUs__logo"
        width={200}
        height={200}
        alt="Gamechanger logo"
        unoptimized
      />
    </Popup>
  );
}
