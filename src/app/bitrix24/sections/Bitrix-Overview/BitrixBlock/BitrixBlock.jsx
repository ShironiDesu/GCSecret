"use client";
import BitrixKanbanImage from "@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-image-block/BitrixKanbanImage";
import BitrixInfoListBlock from "@/app/bitrix24/components/bitrix-overview-componets/bitrix-info/bitrix-info-list-block/BitrixInfoListBlock";
import React, { useRef, useEffect } from "react";
import "./BitrixBlock.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function BitrixBlock({ data, id }) {
  const listRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Отменяем наблюдение после анимации
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // 10% элемента в зоне видимости
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (listRef.current) {
      observer.observe(listRef.current);
    }
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bitrix-block__container" id={id}>
      <div ref={listRef} className="bitrix-info-list">
        <BitrixInfoListBlock title={data.title} data={data} type={data.blueInfo} />
      </div>
      <div ref={imgRef} className="bitrix-kanban-image">
        <BitrixKanbanImage image={data.images} />
      </div>
    </div>
  );
}
