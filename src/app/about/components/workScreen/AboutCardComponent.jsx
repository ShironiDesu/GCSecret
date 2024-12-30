"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "./aboutCardComponent.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function AboutCardComponent({ image }) {
  gsap.registerPlugin(ScrollTrigger, useGSAP);


useGSAP(() => {
  gsap.utils.toArray(".card").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scrollTrigger: {
        trigger: ".work-screen",
        start: "top 40%",
      },
      duration: 1,
    });
  });
})


  return (
    <div className="about-card">
      <Image
        width={56}
        height={56}
        src={image.img}
        alt={image.title}
        loading="lazy"
      />
      <h3>{image.title}</h3>
      <p>{image.description}</p>
    </div>
  );
}
