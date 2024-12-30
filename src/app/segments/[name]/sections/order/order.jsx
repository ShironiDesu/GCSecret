import Button from "@/components/ui/Button";
import React from "react";
import "./order.scss";
import FadeUp_block from "@/components/ui/FadeUp-block";

export default function Order() {
  return (
    <div className="container">
      <div className="order">
        <FadeUp_block>
        <h2>
          Закажите систему которая отображает индивидуальность вашего бизнеса
        </h2>

        </FadeUp_block>
        <FadeUp_block delay={.2}>
        <p> 
          На комплексные решения располагаются{" "}
          <span className="gold_text">скидки до 40%</span>
        </p>

        </FadeUp_block>
        <Button popup="contactUs">Индивидуальное решение</Button>
      </div>
    </div>
  );
}
