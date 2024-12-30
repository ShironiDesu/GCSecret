import React from "react";
import "./section3.scss";
import ButtonText from "@/components/ui/Button-text";
import Section3_Swiper from "./swiper-server";
import FadeUp_block from "@/components/ui/FadeUp-block";
export default function Section3() {
  return (
    <div className="section3" id="section3">
      <div className="container">
        {/* <FadeUp_block>
          <h2 className="section3__before-title">
            Мы автоматизируем предприятия любого <br /> масштаба и сферы деятельности.
          </h2>
        </FadeUp_block> */}
        <FadeUp_block>
          <p className="section3__subtitle">
            100% <span className="gold_text">наших клиентов</span> советуют наши услуги!
          </p>
        </FadeUp_block>
        <FadeUp_block>
          <div>
            <Section3_Swiper />
          </div>
        </FadeUp_block>

        <FadeUp_block>
          <div className="section3__footer">
            <div className="section3__footer__btns">
              <ButtonText popup="video-popup" videoSrc="/video/reviews/ASC.mp4">
                Отзывы
              </ButtonText>
              <ButtonText popup="contactUs">Заказать консультацию</ButtonText>
            </div>
          </div>
        </FadeUp_block>
      </div>
    </div>
  );
}
