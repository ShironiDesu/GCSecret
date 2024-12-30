import "./page.scss";
import React from "react";
import Form from "@/components/form/Form";
import Logo from "@/components/Logo/Logo";
import ButtonText from "@/components/ui/Button-text";

export const metadata = {
  title: "GC - Управление платежами",
  description: "Мы создаем системы, которые делают ваш бизнес проще и результативнее",
};

export default function EMS() {
  return (
    <main>
      <div className="erp-container">
        <div className="erp-text">
          <p className="title-white">
            <span className="root-color">Система управления платежами:</span> полный контроль над
            своевременным поступлением средств.
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
          <img src="/images/apms-main.png"></img>
        </div>
      </div>
      <div>
        <p className="title-swiper">
          Когда стоит задуматься о внедрении системы управления платежами:{" "}
        </p>
        <div>
          <div className="erp-cards-2">
            <div className="cards-1-4">
              <div className="card2-holder">
                <img width="52px" src="/images/sad-speed.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Важно автоматизировать выставление счетов и контроль оплат.{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-customer.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Вам нужно сократить ошибки в расчетах и снизить человеческий фактор.{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-folder.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Вы хотите отслеживать статус платежей и своевременно напоминать клиентам об
                  оплате.{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-team.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Требуется прозрачность и упрощение взаимодействия с бухгалтерией.{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="title-swiper">Почему компании иногда избегают внедрения? </p>
        <div>
          <div className="erp-cards-2">
            <div className="cards-1-4">
              <div className="card2-holder">
                <img width="52px" src="/images/sad-hourglass.png" />
                <span className="card2-text" style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Кажется, что внедрение займет слишком много времени.{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-question.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Считают, что текущая система справляется, зачем менять?{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-money.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Опасаются дополнительных затрат.{" "}
                </span>
              </div>

              <div className="card2-holder">
                <img width="52px" src="/images/sad-feedback.png" />
                <span style={{ paddingBottom: "10px", paddingTop: "20px" }}>
                  Есть недоверие к новым технологиям или негативный опыт работы с интеграторами.{" "}
                </span>
              </div>
            </div>
          </div>
          <p className="cards-text">
            На самом деле, каждая компания, которая регулярно работает с финансами, выставляет счета
            и контролирует оплату, только выигрывает от внедрения такой системы. Она упрощает
            процессы, повышает прозрачность и снижает нагрузку на сотрудников.
          </p>
        </div>
      </div>

      <div className="huge-title">
        <object type="image/svg+xml" data="/icons/apms-huge-text.svg"></object>

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
          <p className="title-white">Сколько времени займет внедрение? </p>
          <br />
          <br />
          <blockquote className="border-gradient-quote-2">
            <p>
              Всего от <span className="root-color">2 до 4 дней</span>, и ваша финансовая структура
              будет автоматизирована
            </p>
          </blockquote>
          <br />
          <p className="erp-text-main">
            Мы внедряем шаблоны для автоматического выставления счетов, настроим контроль платежей и
            создадим оповещения для ваших клиентов.
          </p>
        </div>
        <div className="erp-image">
          {/*<object type="image/svg+xml" data="/icons/erp-circles.svg"></object>*/}
          <img src="/images/sad-pc-cog.png"></img>
        </div>
      </div>

      <div className="erp-container extra-padding">
        <div className="erp-text">
          <p className="title-white">Как выглядит работа в системе управления платежами? </p>
          <br />
          <br />
          <blockquote className="border-gradient-quote-2">
            <p>
              Это <span className="root-color">полный контроль без лишних усилий</span>.
            </p>
          </blockquote>
          <br />
          <p className="erp-text-main">
            Система автоматически формирует счета, отправляет их клиентам, напоминает об оплате,
            фиксирует поступления и предупреждает о просрочках. В любой момент вы можете увидеть
            финансовый статус компании, распределение расходов и поступлений. Благодаря прозрачной
            системе отчеты формируются мгновенно, без необходимости вручную собирать данные. Это
            экономит время и позволяет сосредоточиться на стратегических задачах.
          </p>
        </div>
        <div className="erp-image">
          {/*<object type="image/svg+xml" data="/icons/erp-circles.svg"></object>*/}
          <img src="/images/pc-stats-sad.png"></img>
        </div>
      </div>

      <div className="erp-container extra-padding">
        <div className="erp-text">
          <p className="title-white">Зачем читать, если можно увидеть в действии?</p>
          <br />
          <br />
          <blockquote className="border-gradient-quote-2">
            <p>
              Закажите <span className="root-color">бесплатную демонстрацию системы</span> и вы
              убедитесь в ее возможностях
            </p>
          </blockquote>
          <br />
          <p className="erp-text-main">
            Наши специалисты покажут, как система управления платежами поможет вам наладить
            финансовую дисциплину и сэкономить ресурсы.
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
