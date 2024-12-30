import Image from "next/image";
import React from "react";
import "./hero.scss";
import FadeUp_block from "@/components/ui/FadeUp-block";

export default function Hero({ data }) {
  const isRetail = data === "розницы" ? true : false;

  return (
    <div className="heroSegment" id="heroSegment">
      <div className="container">
        <FadeUp_block>
          <h1>
            1С • Битрикс <br /> для <br /> {data}
          </h1>
        </FadeUp_block>
        <FadeUp_block delay={0.2}>
          {!isRetail ? (
            <p>
              Работайте на самой <br /> популярной системе в {""}
              <span className="gold_text">странах СНГ</span>
            </p>
          ) : (
            <p>
              Управляйте продажами, кассой, складом <br /> и сотрудниками{" "}
              <span className="gold_text">в мобильном приложении</span>{" "}
            </p>
          )}
        </FadeUp_block>
        <FadeUp_block delay={0.4}>
          <Image
            className="heroSegment__bitrix-logo"
            src="/video/bitrix-logo.gif"
            width={350}
            height={350}
            alt="Bitrix24 logo gif"
            loading="lazy"
            unoptimized
          />
        </FadeUp_block>
      </div>
    </div>
  );
}
