import React from "react";
import "./section2.scss";
import Button from "@/components/ui/Button";
import FadeUp_block from "@/components/ui/FadeUp-block";
import Section2_Swiper from "./swiper";

const data = [
  {
    icon: "/icons/crm.svg",
    img: "/images/bitrix-1c/срм.png",
    title: "Продажи",
    description:
      "<span class='gold_text'>Самые эффективные продажи</span> производятся через CRM Битрикс24. Максимальный комфорт для быстрой работы с разгруженной головой. Шаблонные сообщения, умные сценарии, встроенный ИИ который анализирует ваши звонки. И много других полезных фишек",
    list: [
      "Увеличение производительности каждого сотрудника",
      "Полный контроль над коммуникацией с клиентами",
      "Значительная экономия заработных плат",
      "Увеличение прибыли до 25% в течение 3 месяцев, без увеличения штата",
    ],
  },
  {
    icon: "/icons/project.svg",
    img: "/images/bitrix-1c/Задачи-проекты.png",
    title: "Управление",
    description:
      "Полный контроль над предприятием через удобный таск-треккер. Битрикс24 имеет самый широкий функционал в задачах среди всех систем. Работайте с проектами, делегируйте, контролируйте, <span class='gold_text'>знайте все что происходит</span> не находясь рядом.",
    list: [
      "Цифровая система управления разгружает руководство и коллектив",
      "С Битрикс24 ресурсы используются максимально эффективно",
      "Вероятность своевременного выполнения задач возрастает до 95%",
      "Работаете через удобные форматы: список, календарь, Канбан, Гант",
      "Минимальное время на освоение",
    ],
  },
  {
    icon: "/icons/meeting.svg",
    img: "/images/bitrix-1c/Совместная-работа.png",
    title: "Работа в коллективе",
    description:
      "Создавайте беседы внутри сделок или внутренние чаты с коллегами прямо в диалогах с клиентами. Проводите видеозвонки с участием <span class='gold_text'>до 100 сотрудников,</span> делитесь экраном, совместно редактируйте документы и ставьте задачи прямо из сообщений.",
    list: [
      "Более 20 инструментов для совместной работы",
      "Взаимодействие между сотрудниками улучшается на 15% уже в первом месяце",
      "Рабочие обсуждения происходят там, где нужно, а не через личные каналы",
      "Ускорение передачи данных без потери информации",
    ],
  },
  {
    icon: "/icons/integrated-system.svg",
    img: "/images/bitrix-1c/1c.png",
    title: "Интеграция с 1С",
    description:
      "Если синхронизировать документы, операции, контрагенты, складские остатки и статусы мы объединяем возможности двух <span class='gold_text'>лидирующих систем СНГ,</span> создавая мощный инструмент автоматизации. Битрикс24 и 1С это максимальный уровень эффективности!",
    list: [
      "Скорость работы увеличивается в разы",
      "Большая экономия ручного ввода данных",
      "Объединение 1С и Битрикс24 дает стабильность, которая заменяет «незаменимых» сотрудников",
    ],
  },
  {
    icon: "/icons/process.svg",
    img: "/images/bitrix-1c/Бизнес-процесс.png",
    title: "Автоматизация бизнес-процессов",
    description:
      "Данные мгновенно передаются между отделами без задержек, упущений и потерь информации. Это не <span class='gold_text'>просто удобство</span> - это ускорение всех процессов компании. Гибкость Битрикс24 позволяет оцифровать процессы любой сложности.",
    list: [
      "Исключает необходимость уточнения данных",
      "Увеличение эффективности каждого отдела и взаимодействия между ними",
      "Минимизирует риск упущения в работе",
      "Своевременное утверждение и постоянный доступ к аналитике ускоряет принятие важных решений",
    ],
  },

  {
    icon: "/icons/documents.svg",
    img: "/images/bitrix-1c/автоген-документов.png",
    title: "Автоматический документооборот",
    description:
      "Счета, накладные, договоры, коммерческие предложения, гарантийные талоны и любые внутренние документы <span className='gold_text'>генерируются за секунды</span>, без ручного ввода данных.",
    question: "Не прерывайте вашу работу для получения документов!",
    list: [
      "Позволяет получать необходимые документы без привлечения юристов и бухгалтерии",
      "Экономит несколько часов рабочего времени для каждого специалиста, занимающегося документами",
      "Минимизирует ошибки при вводе данных",
      "Ускоряет процессы в отделах продаж, обслуживания, HR и на складе",
    ],
  },
  {
    icon: "/icons/analythic.svg",
    img: "/images/bitrix-1c/Аналитика.jpg",
    title: "Аналитика",
    description:
      "Битрикс24 - избавляет сотрудников от создания ручных отчетов, а руководство от их ожидания. <span class='gold_text'>Зачем ждать отчеты?</span> Если можно получить актуальные результаты которые не подлежат фальсификации за 2 клика.",
    question: "Принимайте решение быстрее, основываясь на аналитике!",
    list: [
      "Значительная экономия времени на подготовку отчетности",
      "Постоянный доступ к отчетам без ожидания",
      "Принятие более правильных и обоснованных решений",
      "Сведение к минимуму риска фальсификации данных в отчетах",
    ],
  },
];


export default function Section2() {
  return (
    <div className="section2" id="section2">
      <div className="container">
        <FadeUp_block>
          <h2>
            Битрикс24 - это CRM <br /> и <span className="gold_text"> более 100</span> полезных
            инструментов для бизнеса
          </h2>
        </FadeUp_block>
        <Section2_Swiper data={data} />
        <FadeUp_block>
          <div className="trustedBy__footer">
            <p>
              Узнайте о возможностях Битрикс24 для вашего бизнеса в дружеской и информативной беседе
            </p>
            <Button popup="calendar">Узнать подробнее</Button>
          </div>
        </FadeUp_block>
      </div>
    </div>
  );
}
