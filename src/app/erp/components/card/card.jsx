import Image from "next/image";
import React from "react";
import Segments_swiper from "../../components/swiper/swiper";
import "./card.scss";

export default function Card({ data, cardId, swiperId, autoHeight }) {
    return (
        <div className="container">
            <div className="card" id={cardId}>
                <div className="card__header">
                    <h2>
                        {cardId === "bitrix-card" ? (
                            "Лицензии"
                        ) : (
                            <>
                                Инструменты для <br /> эффективной работы
                            </>
                        )}
                    </h2>
                    <p className="card__min-price">от 9,600{""}₸</p>
                    <div className="card__navigation">
                        <button className={`swiper-button swiper-button-prev-${swiperId}`}>
                            <Image
                                src="/icons/arrow-right-white.svg"
                                alt="prev slide"
                                width={21}
                                height={26}
                                style={{'rotate': "180deg"}}
                            />
                        </button>
                        <button className={`swiper-button swiper-button-next-${swiperId}`}>
                            <Image
                                src="/icons/arrow-right-white.svg"
                                alt="prev slide"
                                width={21}
                                height={26}
                            />
                        </button>
                    </div>
                </div>
                <Segments_swiper className="card__swiper" id={swiperId} data={data} autoHeight={autoHeight} />
            </div>
        </div>
    );
}
