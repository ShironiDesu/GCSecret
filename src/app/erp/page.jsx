import "./page.scss";
import Card from "./components/card/card";
import React from "react";
import Segments_swiper from "./components/swiper/swiper";
import Image from "next/image";
import ButtonText from "@/components/ui/Button-text";
import Tarif_swiper from "./components/swiper/swiper2";

const data = [
  {
    title: "Складской учет",
    price: "180,000 ₸",
    days: "Внедрение 1 день",
    subtitle: "",
    list: [
      "Управление сырьем, полуфабрикатами, компонентами, изделиями, товарами и упаковкой",
      "Перемещение между складами",
      "Калькуляция ингредиентов с учетом коэффициента потерь при распаковке",
      "Создание упаковочных комплектов",
    ],
  },
  {
    title: "Полная калькуляция",
    price: "100,000 ₸",
    days: "Внедрение 1 день",
    subtitle: "",
    list: [
      "Расчет для сырья, полуфабрикатов, компонентов, изделий, товаров и упаковки",
      "Учет коэффициентов уварки/ужарки",
      "Автоматический расчет затрат на зарплату",
      "Автоматический учет электроэнергии на основании используемого оборудования",
      "Калькуляция производственных процессов",
    ],
  },
  {
    title: "Планирование производства",
    price: "150,000 ₸",
    days: "Внедрение 1 день",
    subtitle: "",
    list: [
      "Генерация производственного плана для всех цехов",
      "Автоматический расчет потребности в сырье для всех этапов производства",
      "Планирование загрузки печей, миксеров, котлов",
    ],
  },
  {
    title: "Документация",
    price: "Отчет 5,000 ₸ / BI-отчет 15,000 ₸",
    days: "Внедрение 1 день",
    subtitle: "",
    list: [
      "Полная отчетность по всем перемещениям в производстве",
      "Автоматическая генерация всех производственных бланков",
      "Ежедневный расчет рентабельности каждого цеха",
    ],
  },
  {
    title: "Закуп",
    price: "30,000 ₸",
    days: "Внедрение 1 день",
    subtitle: "",
    list: [
      "Система отслеживает актуальные остатки на складах",
      "Генерация закупок на основе предстоящих заявок с учетом остатков",
      "Создание закупочных листов для всех заявок и отдельных оптовых заказов",
      "Расчет потребностей в сырье, упаковке, наклейках",
    ],
  },
  {
    title: "Внутренний учет",
    price: "30,000 ₸",
    days: "Внедрение 1 день",
    subtitle: "",
    list: [
      "Ведение учета материальных ценностей",
      "Учет инвентаря",
      "Ведение внутренней бухгалтерии",
      "Учет всех производственных процессов",
    ],
  },
];

const tarifi = [
  { price: "500 000", workers_number: "15" },
  { price: "1 000 000", workers_number: "30" },
  { price: "2 000 000", workers_number: "50" },
  { price: "5 000 000", workers_number: "100" },
];

let item1 = {
  title: "Складской учет",
  subtitle: "",
  list: [
    "Управление сырьем, полуфабрикатами, компонентами, изделиями, товарами и упаковкой",
    "Перемещение между складами",
    "Калькуляция ингредиентов с учетом коэффициента потерь при распаковке",
    "Создание упаковочных комплектов",
  ],
};

let item2 = {
  title: "Полная калькуляция",
  subtitle: "",
  list: [
    "Расчет для сырья, полуфабрикатов, компонентов, изделий, товаров и упаковки",
    "Учет коэффициентов уварки/ужарки",
    "Автоматический расчет затрат на зарплату",
    "Автоматический учет электроэнергии на основании используемого оборудования",
    "Калькуляция производственных процессов",
  ],
};

let item3 = {
  title: "Планирование производства",
  subtitle: "",
  list: [
    "Генерация производственного плана для всех цехов",
    "Автоматический расчет потребности в сырье для всех этапов производства",
    "Планирование загрузки печей, миксеров, котлов",
  ],
};

let item4 = {
  title: "Документация",
  subtitle: "",
  list: [
    "Полная отчетность по всем перемещениям в производстве",
    "Автоматическая генерация всех производственных бланков",
    "Ежедневный расчет рентабельности каждого цеха",
  ],
};

let item5 = {
  title: "Закуп",
  subtitle: "",
  list: [
    "Система отслеживает актуальные остатки на складах",
    "Генерация закупок на основе предстоящих заявок с учетом остатков",
    "Создание закупочных листов для всех заявок и отдельных оптовых заказов",
    "Расчет потребностей в сырье, упаковке, наклейках",
  ],
};

let item6 = {
  title: "Внутренний учет",
  subtitle: "",
  list: [
    "Ведение учета материальных ценностей",
    "Учет инвентаря",
    "Ведение внутренней бухгалтерии",
    "Учет всех производственных процессов",
  ],
};

let tarif1 = { price: "500 000", workers_number: "15" };
let tarif2 = { price: "1 000 000", workers_number: "30" };
let tarif3 = { price: "2 000 000", workers_number: "50" };
let tarif4 = { price: "5 000 000", workers_number: "100" };

export const metadata = {
  title: "Gamechanger - ERP",
  description: "Мы создаем системы, которые делают ваш бизнес проще и результативнее",
};

export default function ERP() {
  return (
    <main>
      <div className="erp-container">
        <div className="erp-text">
          <h1>ERP-Gamechanger</h1>
          <p className="title-white">Полная автоматизация пищевых производств</p>
          <br />
          <br />
          <p className="erp-text-main">
            Эту <span className="root-color"> ERP-систему </span> разработала казахстанская
            производственная компания, сертифицированная по стандартам{" "}
            <span className="root-color">HACCP</span> и{" "}
            <span className="root-color">Halal Damu</span>, для улучшения внутренних показателей,
            автоматизации процессов и поддержания высоких стандартов.
          </p>
          <br />
          <blockquote className="semi-transparent-block-1">
            <p className="erp-quote-title">Оценка комиссии HACCP о системе GameChanger:</p>
            <blockquote className="border-gradient-quote">
              <p>
                <i>
                  &quot;Такой документации в казахстанском пищевом производстве мы еще не
                  встречали.&quot;
                </i>
              </p>
            </blockquote>
          </blockquote>
          <br />
          <p className="erp-text-main">
            <span className="root-color">ERP-Gamechanger</span>, обладая всеми возможностями
            различных редакций 1С, проста в освоении и легко адаптируется под особенности вашего
            производства.
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
          <img src="/images/erp-cicles.png"></img>
        </div>
      </div>

      <p className="title-swiper">Возможности системы</p>

      <div className="erp-cards">
        <div className="cards-2-3">
          <div className="card-holder">
            <p className="card-subtitle">{item1.subtitle}</p>
            <h3 className="card-title">{item1.title}</h3>
            <ul className="card-ul">
              {item1.list.map((listItem, listItemIndex) => (
                <li className="card-li" key={listItemIndex}>
                  <Image
                    src={"/icons/select-gold.svg"}
                    width={16}
                    height={16}
                    alt="select icon svg"
                    className="card-img"
                  />

                  <p>{listItem}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-holder">
            <p className="card-subtitle">{item2.subtitle}</p>
            <h3 className="card-title">{item2.title}</h3>
            <ul className="card-ul">
              {item2.list.map((listItem, listItemIndex) => (
                <li className="card-li" key={listItemIndex}>
                  <Image
                    src={"/icons/select-gold.svg"}
                    width={16}
                    height={16}
                    alt="select icon svg"
                    className="card-img"
                  />

                  <p>{listItem}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-holder">
            <p className="card-subtitle">{item3.subtitle}</p>
            <h3 className="card-title">{item3.title}</h3>
            <ul className="card-ul">
              {item3.list.map((listItem, listItemIndex) => (
                <li className="card-li" key={listItemIndex}>
                  <Image
                    src={"/icons/select-gold.svg"}
                    width={16}
                    height={16}
                    alt="select icon svg"
                    className="card-img"
                  />

                  <p>{listItem}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-holder">
            <p className="card-subtitle">{item4.subtitle}</p>
            <h3 className="card-title">{item4.title}</h3>
            <ul className="card-ul">
              {item4.list.map((listItem, listItemIndex) => (
                <li className="card-li" key={listItemIndex}>
                  <Image
                    src={"/icons/select-gold.svg"}
                    width={16}
                    height={16}
                    alt="select icon svg"
                    className="card-img"
                  />

                  <p>{listItem}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-holder">
            <p className="card-subtitle">{item5.subtitle}</p>
            <h3 className="card-title">{item5.title}</h3>
            <ul className="card-ul">
              {item5.list.map((listItem, listItemIndex) => (
                <li className="card-li" key={listItemIndex}>
                  <Image
                    src={"/icons/select-gold.svg"}
                    width={16}
                    height={16}
                    alt="select icon svg"
                    className="card-img"
                  />

                  <p>{listItem}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-holder">
            <p className="card-subtitle">{item6.subtitle}</p>
            <h3 className="card-title">{item6.title}</h3>
            <ul className="card-ul">
              {item6.list.map((listItem, listItemIndex) => (
                <li className="card-li" key={listItemIndex}>
                  <Image
                    src={"/icons/select-gold.svg"}
                    width={16}
                    height={16}
                    alt="select icon svg"
                    className="card-img"
                  />

                  <p>{listItem}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="swiper-mobile-only">
        <Segments_swiper
          className="card__swiper"
          id={"tools-swiper"}
          data={data}
          autoHeight={false}
        />
      </div>

      <p className="title-swiper">Тариф</p>

      <div className="erp-cards-2">
        <div className="cards-1-4">
          <div className="card2-holder">
            <span style={{ paddingBottom: "10px" }}>
              <span className="card2-price">{tarif1.price}</span>т
            </span>

            <div className="card2-btn">до {tarif1.workers_number} сотрудников</div>
          </div>

          <div className="card2-holder">
            <span style={{ paddingBottom: "10px" }}>
              <span className="card2-price">{tarif2.price}</span>т
            </span>

            <div className="card2-btn">до {tarif2.workers_number} сотрудников</div>
          </div>

          <div className="card2-holder">
            <span style={{ paddingBottom: "10px" }}>
              <span className="card2-price">{tarif3.price}</span>т
            </span>

            <div className="card2-btn">до {tarif3.workers_number} сотрудников</div>
          </div>

          <div className="card2-holder">
            <span style={{ paddingBottom: "10px" }}>
              <span className="card2-price">{tarif4.price}</span>т
            </span>

            <div className="card2-btn">до {tarif4.workers_number} сотрудников</div>
          </div>
        </div>
      </div>

      <div className="swiper-mobile-only-2">
        <Tarif_swiper className="swiper2" id={"tools-swiper2"} data={tarifi} autoHeight={false} />
      </div>

      <div className="see-more-block">
        <p className="see-more-title">
          Оплата производится единоразово и включает полную кастомизацию под ваше производство!
        </p>
        <div className="see-more-btn">Узнать подробнее</div>
      </div>
    </main>
  );
}
