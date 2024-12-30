import "./page.scss";
import React from "react";
import Image from "next/image";
import Form from "@/components/form/Form";
import Logo from "@/components/Logo/Logo";
import ButtonText from "@/components/ui/Button-text";

export const metadata = {
  title: "GC - Управление продажами",
  description: "Мы создаем системы, которые делают ваш бизнес проще и результативнее",
};

export default function SAD() {
  return (
    <main>
      <div className="erp-container">
        <div className="erp-text">
          <p className="title-white">
            Автоматизированный отдел продаж: <span className="root-color">ваше преимущество</span>
          </p>
          <br />
          <br />
          <p className="erp-text-main">
            Автоматизация отдела продаж дает компаниям значительное конкурентное преимущество.
          </p>
          <br />
          <br />
          <ButtonText>
            <a
              href="https://wa.me/77752214996?text=Меня+интересует+демо-версия+Битрикс24"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Попробовать бесплатно
            </a>
          </ButtonText>
        </div>
        <div className="erp-image">
          {/*<object type="image/svg+xml" data="/icons/erp-circles.svg"></object>*/}
          <img src="/images/sad-cog.png"></img>
        </div>
      </div>
      <div>
        <p className="title-swiper">Когда стоит задуматься о внедрении CRM-системы:</p>
        <div>
          <div className="erp-cards-2">
            <div className="cards-1-4">
              <div className="card2-holder">
                <img width="52px" src="/images/sad-speed.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Вы хотите ускорить процесс заключения сделок.{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-customer.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  У вас есть большой пул клиентов, которые еще не стали покупателями.
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-folder.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Вам важно сохранить данные о клиентах и их заказах.{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-team.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Вы хотите, чтобы сотрудники качественно общались с клиентами.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="title-swiper">Почему компании иногда избегают CRM? </p>
        <div>
          <div className="erp-cards-2">
            <div className="cards-1-4">
              <div className="card2-holder">
                <img width="52px" src="/images/sad-hourglass.png" />
                <span className="card2-text" style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Слишком много текущей работы, нет времени на внедрение.{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-question.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Отсутствует понимание, зачем это нужно.{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-money.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Компания и так приносит прибыль — зачем что-то менять?{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-feedback.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Был негативный опыт с интеграторами.{" "}
                </span>
              </div>
            </div>
          </div>
          <p className="cards-text">
            На самом деле, каждая компания, которая активно работает с клиентами, ведет переговоры
            или обрабатывает входящие заказы, получает огромное преимущество от внедрения CRM. Не
            важно, на каком этапе развития вы находитесь или какого масштаба ваша компания.
          </p>
        </div>
      </div>

      <div className="huge-title">
        <object type="image/svg+xml" data="/icons/sad-huge-title.svg"></object>
        <ButtonText>
            <a
              href="https://wa.me/77752214996?text=Меня+интересует+демо-версия+Битрикс24"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Попробовать бесплатно
            </a>
          </ButtonText>
      </div>

      <div className="erp-container extra-padding">
        <div className="erp-text">
          <p className="title-white">Сколько времени займет внедрение?</p>
          <br />
          <br />
          <blockquote className="border-gradient-quote-2">
            <p>
              Всего <span className="root-color">2–4 дня</span>, и ваш отдел продаж станет
              автоматизированным.{" "}
            </p>
          </blockquote>
          <br />
          <p className="erp-text-main">
            Далее мы обучим всю вашу команду, настроим шаблоны сообщений, умные сценарии и
            персональные планы задач, чтобы каждый сотрудник легко ориентировался в системе и
            работал эффективнее.
          </p>
        </div>
        <div className="erp-image">
          {/*<object type="image/svg+xml" data="/icons/erp-circles.svg"></object>*/}
          <img src="/images/sad-pc-cog.png"></img>
        </div>
      </div>

      <div className="erp-container extra-padding">
        <div className="erp-text">
          <p className="title-white">Как выглядит работа в CRM? </p>
          <br />
          <br />
          <blockquote className="border-gradient-quote-2">
            <p>
              Это работа со <span className="root-color">свободной головой</span>.
            </p>
          </blockquote>
          <br />
          <p className="erp-text-main">
            В продажах приходится многое запоминать, повторять одни и те же действия, что может быть
            утомительным. CRM запоминает все за вас, берет на себя рутинные задачи и помогает
            сотрудникам быстрее справляться с работой. Это снижает напряжение и улучшает качество
            общения с клиентами, что значительно повышает конверсию.
          </p>
        </div>
        <div className="erp-image">
          {/*<object type="image/svg+xml" data="/icons/erp-circles.svg"></object>*/}
          <img src="/images/pc-stats-sad.png"></img>
        </div>
      </div>

      <div className="erp-container extra-padding">
        <div className="erp-text">
          <p className="title-white">Зачем читать, если можно почувствовать?</p>
          <br />
          <br />
          <blockquote className="border-gradient-quote-2">
            <p>
              Закажите <span className="root-color">бесплатную демонстрацию системы</span> и
              убедитесь сами в ее возможностях.
            </p>
          </blockquote>
          <br />
          <p className="erp-text-main">
            Наши сотрудники подробно расскажут о всех преимуществах, ответят на ваши вопросы и
            помогут найти решение именно для вашей компании.
          </p>
        </div>
        <div className="erp-image">
          {/*<object type="image/svg+xml" data="/icons/erp-circles.svg"></object>*/}
          <img src="/images/cog-monitor-sad.png"></img>
        </div>
      </div>

      <div className="contactUs">
        <div className="container">
          <div className="contactUs__wrapper">
            <p className="title-white">Свяжитесь с нами</p>
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
}
