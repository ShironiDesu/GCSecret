import React from "react";
import "./trustedBy.scss";
import Button from "@/components/ui/Button";
import TrustedBy_Swiper from "./swiper";
import Image from "next/image";
import FadeUp_block from "@/components/ui/FadeUp-block";
import Link from "next/link";

const data = [
  {
    img: "/images/logotypes-bitrix/rosseti.png",
    title: "Крупнейшая энергетическая компания в России.",
    description:
      "Создание CRM и внутреннего портала для управления взаимодействием с клиентами и сотрудниками.",
  },
  {
    img: "/images/logotypes-bitrix/obi.png",
    title: "Международная сеть магазинов DIY (товары для дома и ремонта).",
    description:
      "Разработка портала для общения и обучения сотрудников, способствующего повышению квалификации и эффективности работы.",
  },
  {
    img: "/images/logotypes-bitrix/sibur.png",
    title: "Лидер нефтехимической промышленности.",
    description: "Внедрение портала для улучшения внутренних коммуникаций и управления проектами.",
  },
  {
    img: "/images/logotypes-bitrix/rosgosstrax.png",
    title: "Крупнейшая страховая компания России.",
    description:
      "Создание корпоративного портала, обеспечивающего эффективное взаимодействие между подразделениями.",
  },
  {
    img: "/images/logotypes-bitrix/bankopen.png",
    title: "Один из крупнейших банков в России.",
    description:
      "Разработка портала для сотрудников, направленного на улучшение внутренних процессов и коммуникаций.",
  },
  {
    img: "/images/logotypes-bitrix/gpn.png",
    title:
      "Крупная нефтегазовая компания, занимающаяся добычей, переработкой и продажей нефтепродуктов.",
    description:
      "Создание личного кабинета контрагента для упрощения взаимодействия с партнерами и клиентами.",
  },
  {
    img: "/images/logotypes-bitrix/nlmk.png",
    title: "Ведущий производитель стали и проката в России, с международным присутствием.",
    description:
      "Внедрение крупнейшего интранет-портала для 53 000 сотрудников, обеспечивающего эффективное управление и коммуникацию.",
  },
  {
    img: "/images/logotypes-bitrix/tatneft.png",
    title: "Одна из крупнейших нефтяных компаний России.",
    description:
      "Разработка корпоративного портала для улучшения внутренних процессов и взаимодействия между сотрудниками.",
  },
  {
    img: "/images/logotypes-bitrix/mfc.png",
    title:
      "Государственное учреждение, предоставляющее услуги 'одного окна' для граждан и бизнеса.",
    description:
      "Создание корпоративного портала для оптимизации работы и взаимодействия с гражданами.",
  },
  {
    img: "/images/logotypes-bitrix/dns.png",
    title: "Крупная российская сеть магазинов электроники и бытовой техники.",
    description: "Разработка HRM-портала для коммуникации и обучения 14 000 сотрудников.",
  },
  {
    img: "/images/logotypes-bitrix/fsk.png",
    title:
      "Крупный девелоперский холдинг, специализирующийся на строительстве жилой и коммерческой недвижимости.",
    description: "Автоматизация онбординга сотрудников на базе корпоративного портала.",
  },
  {
    img: "/images/logotypes-bitrix/electrolux.png",
    title: "Международная компания Electrolux, производителя бытовой техники.",
    description: "Создание сервисного контакт-центра для улучшения обслуживания клиентов.",
  },
  {
    img: "/images/logotypes-bitrix/merkator.png",
    title: "Ведущая компания в области производства коммунальной техники и оборудования.",
    description: "Внедрение CRM и корпоративного портала для оптимизации бизнес-процессов.",
  },
  {
    img: "/images/logotypes-bitrix/penopleks.png",
    title: "Крупный производитель теплоизоляционных материалов.",
    description: "Разработка CRM для автоматизации работы с клиентами и управления продажами.",
  },
  {
    img: "/images/logotypes-bitrix/vibor.png",
    title: "Крупный производитель тротуарной плитки и бетонных изделий.",
    description: "Внедрение CRM для автоматизации работы с клиентами и увеличения продаж.",
  },
];

export default function TrustedBy() {
  return (
    <div className="trustedBy" id="TrustedBy">
      <div className="container">
        <FadeUp_block>
          <h2>
            <span className="gold_text">Битрикс24</span> - это <br /> выбор лидеров
          </h2>
        </FadeUp_block>
        <FadeUp_block>
          <div className="trustedBy__navigation">
            <div className="swiper-button-prev trustedBy__prev" style={{ rotate: "180deg" }}>
              <Image src="/icons/arrow-right-white.svg" width={26} height={21} alt="prev slide" />
            </div>
            <div className="swiper-button-next trustedBy__next">
              <Image src="/icons/arrow-right-white.svg" width={26} height={21} alt="next slide" />
            </div>
          </div>
        </FadeUp_block>
        <TrustedBy_Swiper data={data} />

        <FadeUp_block>
          <p className="trustedBy__description">
            Создание самописных систем с аналогичными возможностями требует бюджета от 100 000$ и
            занимает несколько месяцев разработки.
          </p>
        </FadeUp_block>
      </div>
    </div>
  );
}
