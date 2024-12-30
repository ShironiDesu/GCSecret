"use client";
import React from "react";
import "./proudSection.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function ProudSection() {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  useGSAP(() => {
    gsap.from(".proud-section", {
      scrollTrigger: {
        trigger: ".proud-section",
        start: "top 60%",
      },
      ease: "power2",
      opacity: 0,
      duration: 1.5,
    });
  });

  return (
    <div className="proud-section">
      <h2>
        Мы гордимся тем, что делаем. <br />
        Мы не просто внедряем системы <br />
        <span className="gold">— мы меняем компании к лучшему.</span>
      </h2>
    </div>
  );
}
