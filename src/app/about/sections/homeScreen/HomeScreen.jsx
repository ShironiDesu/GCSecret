"use client";
import React, { useEffect, useState } from "react";
import ButtonText from "@/components/ui/Button-text";
import "./homeScreen.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
export default function HomeScreen() {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  useGSAP(() => {
    gsap.utils.toArray(".home-screen__card").forEach((el, i) => {
      let h3 = el.querySelector("h3");
      let h4 = el.querySelector("h4");
      let p = el.querySelectorAll("p");
      let ul = el.querySelector("ul");
      let isLast = i === 5 ? true : false;

      gsap.to([h3, h4, ul, p], {
        scrollTrigger: {
          trigger: el,
          start: "top 45%",
          end: isLast ? "" : "top top",
          toggleActions: "play reverse play reverse",
          onEnter: () => {
            el.classList.add("active");
          },
          onLeaveBack: () => {
            el.classList.remove("active");
          },
        },
      });
    });
  });

  const [pageLoaded, setPageLoaded] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const handlePageLoad = () => {
    setPageLoaded(true);
    setTimeout(() => {
      setShowIframe(true);
    }, 5000);
  };

  useEffect(() => {
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return (
    <>
      <div className="home-screen__hero">
        <div className="home-screen__hero-wrapper">
          <h1 className="home-screen__title">Gamechanger</h1>
          <p className="home-screen__subtitle">Мы меняем правила игры!</p>
        </div>

        <div className="home-screen__logo-wrapper">
          {!showIframe && (
            <Image
              src="/images/Logo-preloader.png"
              width={300}
              height={300}
              alt="Gamechanger logo"
            />
          )}
          {pageLoaded && (
            <iframe
              title="Gamecahgner logo"
              className={`iframe-logo ${
                showIframe ? "iframe-logo--ready" : "iframe-logo--loading"
              }`}
              src="https://lottie.host/embed/b2185b70-541f-47a6-bce9-7ca16be2eada/8CsA29m1fz.lottie"
            ></iframe>
          )}
        </div>
      </div>
      <div className="home-screen">
        <div className="home-screen__main">
          <div className="home-screen__sticky-container">
            <p className="home-screen__path">
              Путь <span className="gold_text">основателя</span>{" "}
            </p>
            <div className="home-screen__buttons">
              <ButtonText className={"home-screen__button"} popup="certificates">
                Сертификаты
              </ButtonText>
              <ButtonText className={"home-screen__button"} popup="contactUs">
                Заказать звонок
              </ButtonText>
            </div>
          </div>
          <div className="home-screen__wrapper">
            <div className="home-screen__sticky-wrapper">
              <div className="home-screen__sticky-circle--wrapper">
                <div className="home-screen__sticky-circle"></div>
              </div>
              <div className="home-screen__sticky-line"></div>
            </div>

            <ul className="home-screen__list">
              <li className="home-screen__card">
                <h3>Первое прикосновение к автоматизации</h3>
                <p>
                  Мое первое знакомство с автоматизацией произошло, когда мне было 16 лет. В то
                  время я занимался уборкой офисов в Германии. В одном из налоговых офисов Баварии
                  мне предложили дополнительную подработку — ввод данных. Я заметил множество
                  недочетов в системе и сортировке документов, предложил свои улучшения, и меня
                  пригласили стать штатным сотрудником. Всего за год выработка клиентов в этом офисе
                  выросла на 35%. Это был первый опыт оптимизации,{" "}
                  <span className="gold_text">который стал началом большого пути.</span>
                </p>
              </li>

              <div className="space"></div>

              <li className="home-screen__card">
                <h3>Предыстория</h3>
                <p>
                  В дальнейшем я работал в разных компаниях, занимая управленческие должности в
                  самых разных отраслях. Тогда я еще не осознавал, что оптимизация процессов станет
                  моей страстью. Я просто любил улучшать всё, к чему прикасался, оставляя свой след
                  в каждой компании. Так я набрал уникальный опыт, который сформировал мое понимание
                  ключевых вещей:
                </p>
                <ul>
                  <li>
                    {" "}
                    <p>
                      В любой компании, независимо от уровня, возраста или масштаба, всегда есть что
                      улучшить.
                    </p>{" "}
                  </li>
                  <li>
                    <p>
                      Те компании, которые внедряют сильные системы управления - всегда оказываются
                      в выигрыше.{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      Люди часто сопротивляются изменениям, даже если они заведомо принесут им
                      пользу.{" "}
                    </p>
                  </li>
                </ul>
                <h4>И самое главное:</h4>
                <p className="less-size">
                  Любая система, будь она цифровой или физической, работает только тогда, когда
                  руководство замотивированно к внедрению, обучению и адаптации сотрудников. Без
                  вовлеченности управленцев любая идея останется нереализованной.
                </p>
              </li>

              <div className="space"></div>

              <li className="home-screen__card">
                <h3>Точка переворота</h3>
                <p>
                  Переехав в Казахстан, я был впечатлен этой страной и запустил несколько успешных
                  проектов. Ключевым моментом стало внедрение системы управления в семейную
                  компанию. Этот процесс оказался настолько сложным и стрессовым, что я понял:
                  необходимо создать компанию, которая будет помогать другим проходить этот путь
                  легче и с уверенностью.
                </p>
              </li>

              <div className="space"></div>

              <li className="home-screen__card">
                <h3>Изучение возможностей </h3>
                <p>
                  Я собрал команду талантливых людей, и мы вместе начали изучать возможности
                  различных систем для автоматизации наших собственных производственных,
                  логистических и продажных процессов. Именно тогда мы открыли для себя Битрикс24.
                  За три месяца мы внедрили систему, которая покрыла все наши потребности, обеспечив
                  полную автоматизацию и прозрачность процессов. Это был настоящий прорыв.
                </p>
              </li>

              <div className="space"></div>

              <li className="home-screen__card">
                <h3>Улучшение показателей </h3>
                <p>
                  Результаты нашей работы были настолько заметны, что к нам начали обращаться
                  знакомые предприниматели с просьбами помочь им в автоматизации. Их показатели
                  также значительно выросли, и их отзывы вдохновили меня запустить проект
                  Gamechanger, который должен менять правила игры в автоматизации на рынке
                  Казахстана.
                </p>
              </li>

              <div className="space"></div>

              <li className="home-screen__card">
                <h3>Сентябрь 2023 год</h3>
                <p>
                  Так появилась компания Gamechanger ТОО — платформа для автоматизации и поддержки
                  предприятий любого масштаба. Мы заложили простые, но принципиальные правила:
                </p>
                <ul>
                  <li>Мы не продаем тем, кому это не нужно.</li>

                  <li>Наш сервис всегда на самом высоком уровне.</li>

                  <li>Мы добиваемся реальных результатов, принося ощутимую пользу.</li>

                  <li>Каждый клиент должен быть доволен.</li>
                </ul>
              </li>

              <div className="space"></div>

              <li className="home-screen__card">
                <h3>Gamechanger сейчас</h3>
                <p>
                  С тех пор мы успешно реализовали более 70 проектов по всему Казахстану, стали
                  золотыми партнерами Битрикс24, запустили собственное производство сайтов и ботов,
                  а также существенно расширили базу партнеров. Каждый проект для нас — это не
                  просто работа, а задача, требующая внимания и тщательности, как для собственного
                  бизнеса. Наши клиенты получают поддержку, заботу и благодарность.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
