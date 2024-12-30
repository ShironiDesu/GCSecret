"use client";
import React, { useState } from "react";
import "./footer.scss";
import Image from "next/image";
import Input from "../ui/Input";
import ButtonText from "../ui/Button-text";
import { usePathname } from "next/navigation";
import PreloadLink from "../ui/Link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const pathname = usePathname();

  const bitrixPageIsActive = pathname === "/bitrix24" || pathname === "/";

  const sendEmail = async () => {
    const data = {
      fields: {
        TITLE: `Подписка на рассылку с сайта GC - ${email}`,
      },
      params: { REGISTER_SONET_EVENT: "Y" },
    };
    const req = await fetch("/api/create/deal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await req.json();
    console.log(res);
  };

  const checkEmail = () => {
    if (!email.includes("@")) {
      return setValidEmail(false);
    }
    setValidEmail(true);
    sendEmail();
  };
  return (
    <footer className={`footer ${bitrixPageIsActive ? "bitrixActive" : ""} `} id="footer">
      <div className="container">
        <div className="footer__links footer__wrapper">
          <a href="#" className="footer__links--home">
            Gamechanger
          </a>

          <ButtonText animationOff={true} className="open_popup show_on_laptop" popup="segments">
            Выбрать нишу
          </ButtonText>
          <ButtonText animationOff={true} className="open_popup" popup="certificates">
            Сертификаты
          </ButtonText>
          <PreloadLink href="/bitrix24" className="show_on_laptop" animationOff={true}>
            Обзор Битрикс24
          </PreloadLink>
          <PreloadLink href="/ems" animationOff={true}>
            Система управления
          </PreloadLink>
          <PreloadLink href="/apms" animationOff={true}>
            Контроль платежей
          </PreloadLink>

          <ButtonText
            animationOff={true}
            className="open_popup show_on_laptop"
            popup="video-popup"
            videoSrc="/video/reviews/ASC.mp4"
          >
            Отзывы
          </ButtonText>
          <PreloadLink href="/sad" animationOff={true}>
            CRM
          </PreloadLink>
        </div>
        <div className="footer__info footer__wrapper">
          <p>ТОО &quot;Gamechanger&quot;</p>
          <p>БИН: 230940024402</p>
          <p>Караганда, Алалыкина 12/1</p>
          <p>+77752214996</p>
          <p>Sales@gamechanger.kz</p>
        </div>
        <div className="footer__email">
          <p>Присоединяйтесь к нашей рассылке</p>
          <Input
            animationOff={true}
            type="email"
            name="email"
            className={`footer__input ${!validEmail ? "invalid" : ""}`}
            id="email"
            text={validEmail ? "Email" : "Email введен не верно"}
            onChange={(e) => {
              setValidEmail(true), setEmail(e.target.value);
            }}
          >
            <button onClick={checkEmail}>
              <Image
                src={!bitrixPageIsActive ? "/icons/arrow-right.svg" : "/icons/arrow-right-blue.svg"}
                alt="arrow-right icon svg"
                width={16}
                height={13}
                loading="lazy"
              />
            </button>
          </Input>
        </div>
      </div>
      <p className="copy-right">Разработано и поддерживается <a href="https://gamechangerweb.kz/" target="noopener noreferrer">Gamechanger Web</a>, © 2024</p>
    </footer>
  );
}
