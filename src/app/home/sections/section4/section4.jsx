"use client";
import React, { useEffect } from "react";
import "./section4.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Section4() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.utils.toArray(".section4__card").forEach((el, i) => {
      let h3 = el.querySelector("h3");
      let p = el.querySelector("p");
      let isLast = i === 5 ? true : false;

      gsap.to([h3, p], {
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: isLast ? "" : "top 30%",
          toggleActions: "play reverse play reverse",
        },
        duration: 0.5,
      });
    });
  }, []);

  return (
    <div className="section4" id="section4">
      <div className="container">
        <h2>Как происходит внедрение?</h2>
        <p className="section4__subtitle">
          Наш авторский подход базируется на 18-летнем опыте в структурировании бизнес процессов на
          международном рынке и гарантирует успешную реализацию вашего запроса
        </p>
        <div className="section4__main">
          <h3 className="section4__sticky-text">
            Полная прозрачность <br />и отчетность работы
          </h3>
          <div className="section4__wrapper">
            <div className="section4__sticky-wrapper">
              <div className="section4__sticky-circle--wrapper">
                <div className="section4__sticky-circle"></div>
              </div>
              <div className="section4__sticky-line"></div>
            </div>
            <ul className="section4__list">
              <li className="section4__card">
                <h3>Анализ потребностей</h3>
                <p>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <Image src="/icons/clock.svg" alt="clock" width={16} height={16} />2 часа
                  </span>
                  Ваши пожелания будут внимательно выслушаны и точно задокументированы. Мы{" "}
                  <span className="gold_text">ценим ваше время</span> и исключим необходимость
                  повторять ни единого слова.
                </p>
              </li>
              <div className="space"></div>
              <li className="section4__card">
                <h3>Индивидуальное предложение</h3>
                <p>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <Image src="/icons/clock.svg" alt="clock" width={16} height={16} />
                    30 минут
                  </span>
                  Ваши потребности будут визуализированы на наглядной схеме. Наш{" "}
                  <span className="gold_text">многолетний опыт</span> позволяет добавлять к каждому
                  запросу полезные фишки и инсайды.
                </p>
              </li>
              <div className="space"></div>

              <li className="section4__card">
                <h3>Закрепление договоренностей</h3>
                <p>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <Image src="/icons/clock.svg" alt="clock" width={16} height={16} />
                    10 минут
                  </span>
                  Наш договор гарантирует полную конфиденциальность как в период сотрудничества, так
                  и после его завершения. Сроки выполнения будут четко зафиксированы и{" "}
                  <span className="gold_text">строго соблюдены.</span>
                </p>
              </li>
              <div className="space"></div>

              <li className="section4__card">
                <h3>Разработка</h3>
                <p>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <Image src="/icons/clock.svg" alt="clock" width={16} height={16} />
                    до 5 дней
                  </span>
                  Разработка будет выполнена в <span className="gold_text">кратчайшие сроки</span> и
                  полностью соответствовать техническому заданию. Уже через несколько дней ваша
                  система будет готова, включая видеоуроки для использования с компьютера и
                  мобильного приложения.
                </p>
              </li>
              <div className="space"></div>

              <li className="section4__card">
                <h3>Обучение и адаптация</h3>
                <p>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <Image src="/icons/clock.svg" alt="clock" width={16} height={16} />
                    до 2 недель
                  </span>
                  Мы берем на себя <span className="gold_text">полное обучение</span> вашей команды.
                  Наши специалисты приедут на рабочие места ваших сотрудников (офис, производство,
                  выезды) и проведут обучение на месте. В течение месяца мы обеспечиваем вашей
                  компании круглосуточную поддержку 24/7 без ожидания в очереди.
                </p>
              </li>
              <div className="space"></div>

              <li className="section4__card">
                <h3>Внедрение завершено</h3>
                <p>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <Image src="/icons/clock.svg" alt="clock" width={16} height={16} />в течении
                    месяца
                  </span>
                  
                  Система работает без сбоев и способствует{" "}
                  <span className="gold_text">постепенному улучшению</span> всех показателей вашей
                  компании. Все сотрудники обучены, и наше вмешательство потребуется только в
                  случае, если вы решите добавить новый функционал.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
