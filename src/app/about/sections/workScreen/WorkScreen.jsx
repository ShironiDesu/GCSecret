"use client";
import React from "react";
import "./workScreen.scss";
import AboutCardComponent from "@/app/about/components/workScreen/AboutCardComponent";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

export default function WorkScreen() {
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  const imageArr = [
    {
      isLeft: true,
      img: "/icons/about_card_img1.png",
      description:
        "Специалисты, которые уделяют внимание каждой детали вашей системы. Они ежедневно работают над улучшением и оперативно решают запросы, оставаясь вежливыми и внимательными.",
      title: "Отдел интеграции",
    },
    {
      isLeft: false,
      img: "/icons/about_card_img2.png",
      description:
        "Наши дизайнеры быстро и креативно реализуют ваши идеи, а программисты превращают их в работающие и стильные решения.",
      title: "Разработка сайтов",
    },
    {
      isLeft: true,
      img: "/icons/about_card_img3.png",
      description:
        "Мы обеспечиваем высокий уровень сервиса и лояльное отношение. С нами вы не почувствуете дискомфорта — только заботу. Мы всегда на связи и готовы помочь всеми возможными способами.  ",
      title: "Отдел обслуживания",
    },
    {
      isLeft: false,
      img: "/icons/about_card_img4.png",
      description:
        "Хотите создать Telegram- или WhatsApp-бота? Или вам не хватает функционала в Битрикс24? Наша команда разработчиков создаст все, что нужно именно для вашего бизнеса.  ",
      title: "Разработка ботов и виджетов",
    },
  ];

  useGSAP(() => {
    gsap.from(".work-screen__title", {
      scrollTrigger: {
        trigger: ".work-screen",
        start: "top 50%",
      },
      ease: "power2",
      opacity: 0,
      duration: 1,
    });
  })


  return (
    <div className="work-screen">
      <h3 className="work-screen__title">
        Что представляет собой <br className="dis-none" /> Gamechanger
      </h3>

      <div className="work-screen__cards">
        {imageArr.map((img) => (
          <AboutCardComponent key={img.title} image={img} />
        ))}
        <Image
          className="work-screen__background"
          src="/images/background-logo.png"
          alt="gamechanger logo"
          width={450}
          height={450}
          loading="lazy"
        />
      </div>

      <div className="work-screen__try-with">
        <h3>Испытайте IT иначе с Gamechanger.</h3>
        <p>
          Наша цель — <span className="gold">ваш результат</span>. И мы не
          остановимся, пока не достигнем его.
        </p>
      </div>
    </div>
  );
}
