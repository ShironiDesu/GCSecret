"use client";
import React from "react";
import { useModal } from "@/components/hooks/use-modal-store";
import Popup from "@/components/ui/Popup";
import "./segmentsPopup.scss";
import Image from "next/image";
import PreloadLink from "@/components/ui/Link";
export default function SegmentsPopup() {
  const { closePopup } = useModal();

  const segments = [
    {
      link: "/segments/carService",
      icon: "/icons/segments_popup/car.svg",
      name: "Автосервис",
    },
    {
      link: "/segments/rent",
      icon: "/icons/segments_popup/key.svg",
      name: "Аренда",
    },
    {
      link: "/segments/marketing",
      icon: "/icons/segments_popup/digital-marketing.svg",
      name: "Маркетинг",
    },
    {
      link: "/segments/medicine",
      icon: "/icons/segments_popup/drugs.svg",
      name: "Медицина",
    },
    {
      link: "/segments/education",
      icon: "/icons/segments_popup/mortarboard.svg",
      name: "Образование",
    },
    {
      link: "/segments/wholesale",
      icon: "/icons/segments_popup/department.svg",
      name: "Отдел продаж",
    },
    {
      link: "/segments/realEstateSales",
      icon: "/icons/segments_popup/property.svg",
      name: "Продажа недвижимости",
    },
    {
      link: "/segments/production",
      icon: "/icons/segments_popup/manufacture.svg",
      name: "Производство",
    },
    {
      link: "/segments/retail",
      icon: "/icons/segments_popup/shopping-bag.svg",
      name: "Розничная торговля",
    },
    {
      link: "/segments/construction",
      icon: "/icons/segments_popup/worker.svg",
      name: "Строительство",
    },
    {
      link: "/segments/management",
      icon: "/icons/segments_popup/planning.svg",
      name: "Управление",
    },
    {
      link: "/segments/hr",
      icon: "/icons/segments_popup/management.svg",
      name: "HR",
    },
  ];
  

  return (
    <Popup className="segments" popupName="segments">
      <div className="segments__header">
        <button className="close_popup" onClick={closePopup}>
          <Image
            src="/icons/close-btn.svg"
            width={64}
            height={64}
            alt="close btn"
            loading="lazy"
          />
        </button>
        <h2>
          Выберите свою нишу и получите <br />{" "}
          <span className="gold_text"> выгодное предложение</span>
        </h2>
        <p className="segments__subtitle">
          Инструменты для бизнеса от 100&nbsp;000₸
        </p>
      </div>
      <ul className="segments__main">
        {segments.map((item, index) => (
          <li key={index}>
            <PreloadLink href={item.link} onClick={closePopup} animationOff={true}>
              {item.name}
              <Image
                src={item.icon}
                width={48}
                height={48}
                alt={item.name}
                loading="lazy"
              />
            </PreloadLink>
          </li>
        ))}
      </ul>
    </Popup>
  );
}
