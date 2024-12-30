import React from "react";
import "./section7.scss";
import Button from "@/components/ui/Button";
import FadeUp_block from "@/components/ui/FadeUp-block";
export default function Section7() {
  return (
    <div className="section7" id="section7">
      <div className="container">
        <div className="section7__wrapper">
          <FadeUp_block>
          <h2>
            Не знаете подходит ли Битрикс24 вашей компании?{" "} <br />
            <span className="gold_text">У нас есть решение!</span>
          </h2>

          </FadeUp_block>
          <FadeUp_block>
          <p className="section7__subtitle">
            Мы <span className="gold_text">бесплатно</span> настроим для вас
            полноценную систему на профессиональном тарифе и предоставим
            возможность поработать с ней целую неделю с полным сопровождением.
          </p>

          </FadeUp_block>
          <FadeUp_block>

          <p className="section7__text">
            Это предложение без обязательств, которое поможет вам понять,
            насколько система подходит именно вам.
          </p>
          </FadeUp_block>

          <div className="section7__footer">
          <FadeUp_block>
            <p>
              После вы сможете принять обоснованное решение <br />—{" "}
              <span className="gold_text">приобрести систему</span> или
              отказаться.
            </p>

          </FadeUp_block>

          <Button popup="contactUs">Испытать систему</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
