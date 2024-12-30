import Image from "next/image";
import React from "react";
import Segments_swiper from "../../components/swiper/swiper";
import "./card.scss";
import FadeUp_block from "@/components/ui/FadeUp-block";

export default function Card({ data, cardId, swiperId, autoHeight, title }) {
  return (
    <div className="container">
      <div className="card" id={cardId}>
        <div className="card__header">
          <FadeUp_block trigger={`#${cardId}`}>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
          </FadeUp_block>
          <FadeUp_block trigger={`#${cardId}`}>
            <p className="card__min-price">от 9,600{""}₸</p>
          </FadeUp_block>
          <FadeUp_block trigger={`#${cardId}`}>
            <div className="card__navigation">
              <button className={`swiper-button swiper-button-prev-${swiperId}`}>
                <Image
                  src="/icons/arrow-right-white.svg"
                  alt="prev slide"
                  width={21}
                  height={26}
                  style={{ rotate: "180deg" }}
                  loading="lazy"
                />
              </button>
              <button className={`swiper-button swiper-button-next-${swiperId}`}>
                <Image
                  src="/icons/arrow-right-white.svg"
                  alt="prev slide"
                  width={21}
                  height={26}
                  loading="lazy"
                />
              </button>
            </div>
          </FadeUp_block>
        </div>
        <Segments_swiper
          className="card__swiper"
          id={swiperId}
          data={data}
          autoHeight={autoHeight}
        />
      </div>
    </div>
  );
}
