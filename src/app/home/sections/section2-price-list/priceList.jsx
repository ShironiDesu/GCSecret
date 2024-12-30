import React from "react";
import "./priceList.scss";
import Button from "@/components/ui/Button";
import Image from "next/image";
import FadeUp_block from "@/components/ui/FadeUp-block";
import Link from "next/link";

export default function PriceList() {
  return (
    <div className="price-list" id="priceList">
      <div className="container">
        <FadeUp_block>
          <h2>
            Битрикс24 позволяет получить <br /> <span className="gold_text">готовые решения</span> за
            лояльные цены <br /> в течении 1 недели
          </h2>
        </FadeUp_block>

        <div className="section2__buttons-wrapper">
          <FadeUp_block>
            <Link href="/apms" className="section2__button">
              <div>
                Управление <span className="gold_text">платежами</span>
              </div>
              <span className="section2__price">100,000 ₸</span>
              <Image
                src="/icons/arrow-right-white.svg"
                alt="arrow-right icon svg"
                width={21}
                height={26}
                loading="lazy"
              />
            </Link>
          </FadeUp_block>
          <FadeUp_block>
            <Link href="/sad" className="section2__button">
              <div>
                Управление <span className="gold_text">продажами</span>
              </div>
              <span className="section2__price">150,000 ₸</span>
              <Image
                src="/icons/arrow-right-white.svg"
                alt="arrow-right icon svg"
                width={21}
                height={26}
                loading="lazy"
              />
            </Link>
          </FadeUp_block>
          <FadeUp_block>
            <Link href="/ems" popup="contactUs" className="section2__button">
              <div>
                Управление <span className="gold_text">предприятием</span>
              </div>
              <span className="section2__price">250,000 ₸</span>
              <Image
                src="/icons/arrow-right-white.svg"
                alt="arrow-right icon svg"
                width={21}
                height={26}
                loading="lazy"
              />
            </Link>
          </FadeUp_block>

          <Button popup="segments" className="section2__button">
            <div>
              Посмотреть <span className="gold_text">пакеты</span>
            </div>
            <span className="section2__price">Выберите свою нишу</span>
            <Image
              src="/icons/arrow-right-white.svg"
              alt="arrow-right icon svg"
              width={21}
              height={26}
              loading="lazy"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
