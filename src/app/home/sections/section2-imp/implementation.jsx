import React from "react";
import "./implementation.scss";
import Button from "@/components/ui/Button";
import Image from "next/image";
import FadeUp_block from "@/components/ui/FadeUp-block";
import Link from "next/link";

const data = [
  "Прямое сотрудничество с ведущими партнерами  без посредников и переплат",
  "Быстрая разработка с полной конфиденциальностью",
  "18 лет опыта в структурировании бизнес-процессов",
  "Лучшие цены на рынке Казахстана",
  "Множество полезных инсайтов и функциональных решений",
  "Бесплатное обслуживание и обучение вашей команды",
];

export default function Implementation() {
  return (
    <div className="implementation" id="implementation">
      <div className="container">
        <FadeUp_block>
          <h2>
            Внедрение с <span className="gold_text">Gamechanger</span> <br /> даёт гарантию <br />{" "}
            на результат
          </h2>
        </FadeUp_block>
        <ul>
          {data.map((item) => (
            <li key={item}>
              <Image src="/icons/select.svg" width={32} height={32} alt={item} />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
