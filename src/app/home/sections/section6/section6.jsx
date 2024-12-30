import React from "react";
import "./section6.scss";
import Form from "@/components/form/Form";
import FadeUp_block from "@/components/ui/FadeUp-block";
export default function Section6() {
  return (
    <div className="section6" id="section6">
      <div className="container">
        <FadeUp_block>
          <h2>
          Оставьте заявку на бесплатный анализ и демонстрацию системы!
          </h2>
        </FadeUp_block>
        <Form />
      </div>
    </div>
  );
}
