import "./page.scss";
import React from "react";
import Form from "@/components/form/Form";
import Logo from "@/components/Logo/Logo";
import ButtonText from "@/components/ui/Button-text";

export const metadata = {
  title: "GC - Управление предприятием",
  description: "Мы создаем системы, которые делают ваш бизнес проще и результативнее",
};

export default function EMS() {
  return (
    <main>
      <div className="erp-container">
        <div className="erp-text">
          <p className="title-white">
            Система управления предприятием:{" "}
            <span className="root-color">ваш ключ к эффективности</span>
          </p>
          <br />
          <br />
          <p className="erp-text-main">
            Автоматизированная система управления позволяет компании работать слаженно, прозрачно и
            эффективно.
          </p>
          <br /><br />
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
          <img src="/images/ems-main.png"></img>
        </div>
      </div>
      <div>
        <p className="title-swiper">Когда стоит задуматься о внедрении системы управления:</p>
        <div>
          <div className="erp-cards-2">
            <div className="cards-1-4">
              <div className="card2-holder">
                <img width="52px" src="/images/sad-speed.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  У вас теряется информация между отделами.{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-customer.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Дедлайны постоянно срываются из-за плохой координации.
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-folder.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Вы хотите ускорить процесс согласования задач и решений.{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-team.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Вам важно контролировать выполнение поручений и производительность сотрудников.{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="title-swiper">
          Почему компании иногда избегают внедрения системы управления?{" "}
        </p>
        <div>
          <div className="erp-cards-2">
            <div className="cards-1-4">
              <div className="card2-holder">
                <img width="52px" src="/images/sad-hourglass.png" />
                <span className="card2-text" style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Слишком загружены текущими задачами.{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-question.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Не до конца понимают, зачем это нужно.{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-money.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Считают, что и так все работает, зачем менять процессы?{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-feedback.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Опасаются сложностей внедрения или плохого опыта работы с подрядчиками.{" "}
                </span>
              </div>
            </div>
          </div>
          <p className="cards-text">
            На практике каждая компания, которая сталкивается с проблемами координации,
            распределения задач или управления проектами, получает значительное преимущество от
            внедрения системы управления. Это актуально для бизнеса любого масштаба и в любой
            отрасли.
          </p>
        </div>
      </div>

      <div className="huge-title">
        <object type="image/svg+xml" data="/icons/ems-huge-text.svg"></object>
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
              От <span className="root-color">2 до 6 дней</span>, чтобы настроить систему под ваши
              задачи и интегрировать с существующими процессами.{" "}
            </p>
          </blockquote>
          <br />
          <p className="erp-text-main">
            После внедрения мы обучим сотрудников работе в системе, настроим автоматические
            сценарии, шаблоны задач и удобный планировщик. Каждое подразделение будет четко понимать
            свои цели и приоритеты.
          </p>
        </div>
        <div className="erp-image">
          {/*<object type="image/svg+xml" data="/icons/erp-circles.svg"></object>*/}
          <img src="/images/sad-pc-cog.png"></img>
        </div>
      </div>

      <div className="erp-container extra-padding">
        <div className="erp-text">
          <p className="title-white">Как выглядит работа в системе управления? </p>
          <br />
          <br />
          <blockquote className="border-gradient-quote-2">
            <p>
              Это <span className="root-color">своевременное и прозрачное</span> выполнение задач.
            </p>
          </blockquote>
          <br />
          <p className="erp-text-main">
            Система показывает реальную картину работы компании. Все данные доступны в режиме
            реального времени, а сотрудники получают четкие инструкции и для работы. Вам больше не
            нужно следить за каждым этапом вручную — система напоминает о сроках, проверяет
            выполнение и создает отчеты. Это не только экономит время, но и улучшает результаты.
          </p>
        </div>
        <div className="erp-image">
          {/*<object type="image/svg+xml" data="/icons/erp-circles.svg"></object>*/}
          <img src="/images/pc-stats-sad.png"></img>
        </div>
      </div>

      <div className="erp-container extra-padding">
        <div className="erp-text">
          <p className="title-white">Зачем читать, если можно попробовать?</p>
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
            Наши специалисты помогут вам разобраться в функционале, ответят на все вопросы и
            покажут, как система может стать вашим незаменимым помощником.
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
