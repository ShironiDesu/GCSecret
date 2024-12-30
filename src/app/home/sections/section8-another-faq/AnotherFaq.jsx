"use client";
import React, { useState, useRef } from "react";
import "./AnotherFaq.scss";
import FadeUp_block from "@/components/ui/FadeUp-block";

export default function AnotherFaq() {
  const data = [
    {
      question: "Как я узнаю, что моей компании подойдет или необходим Битрикс24?",
      answer: 
        `Это просто: если ваша компания работает с клиентами, выставляет документы или формирует отчеты и стремится к росту, то эта система принесет вам значительные преимущества.
        <br/>
        <br/>
        Также задайте себе следующие вопросы: <br/> <br/>

        &nbsp; &#8226; Часто ли мои сотрудники забывают поручения? <br/>
        &nbsp; &#8226; Часто ли мои сотрудники несвоевременно выполняют задачи? <br/>
        &nbsp; &#8226; Нужно ли мне уточнять статусы выполненной работы? <br/>
        &nbsp; &#8226; Долго ли я жду получения отчетов?
        <br/>
        <br/>
        Если ответы на эти вопросы «да», то Битрикс24 точно вам подойдет.`,
    },
    {
      question: `Что будет, если мои сотрудники будут сопротивляться использованию новой системы?`,
      answer: `Сопротивление, скорее всего, будет – это нормально. Человеческий мозг склонен к привыканию. Однако у нас большой опыт работы с подобными случаями, и мы разработали систему обучения и мотивации, которая позволяет нам эффективно работать с вашей командой.`,
    },
    {
      question: `Бывают ли случаи, когда не удается внедрить систему?`,
      answer: 
        `Да, в нашей практике были случаи, когда внедрение системы не удавалось. Если руководство не мотивирует сотрудников использовать систему и не пользуется ею само, то  система будет работать только в течение месяца нашего обслуживания, когда наши специалисты следят за выполнением задач.
        <br/>
        Мы научились распознавать такие случаи и теперь отказываемся от их реализации.`,
    },
    {
      question: `Могу ли я самостоятельно установить и настроить систему?`,
      answer: `Да, Вы можете самостоятельно приобрести любую программу, такую как 1С, Bitrix24, AmoCRM. Однако их эффективность зависит от точных настроек, которые должны соответствовать Вашим бизнес-процессам. Для этого необходима команда профессионалов, которые понимают, как настроить систему под нужды Вашего бизнеса.`,
    },
  ];

  const [activeCards, setActiveCards] = useState([]);

  const toggleCard = (index) => {
    setActiveCards((prevState) =>
      prevState.includes(index) ? prevState.filter((i) => i !== index) : [...prevState, index]
    );
  };

  return (
    <div className="another-faq" id="another-faq">
      <div className="container">
        <FadeUp_block>
          <h2>
            <span className="blue_text">Вопросы</span> которые у Вас могут возникнуть
          </h2>
        </FadeUp_block>
        <ul className="another-faq__list">
          {data.map((item, index) => (
            <FAQCard
              key={index}
              item={item}
              index={index}
              isActive={activeCards.includes(index)}
              onToggle={() => toggleCard(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function FAQCard({ item, isActive, index, onToggle }) {
  const contentRef = useRef(null);

  return (
    <FadeUp_block delay={index / 10} trigger={".another-faq__list"}>
      <li className="another-faq__card" onClick={onToggle}>
        <div className="another-faq__header">
          <span className={`another-faq__icon ${isActive ? "active" : ""}`}></span>
          <h3>{item.question}</h3>
        </div>

        <div
          ref={contentRef}
          className="another-faq__main"
          style={{
            maxHeight: isActive ? `${contentRef.current.scrollHeight}px` : "0",
          }}
        >
          <p dangerouslySetInnerHTML={{ __html: item.answer }}/>
          <br />
        </div>
      </li>
    </FadeUp_block>
  );
}
