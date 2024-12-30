import React from "react";
import "./section5.scss";
import Image from "next/image";
import FadeUp_block from "@/components/ui/FadeUp-block";
export default function Section5() {
  return (
    <div className="section5" id="section5">
      <section className="container">
        <h2>В каждое внедрение входит</h2>
        <ul className="section5__list">
          <FadeUp_block trigger={".section5__list"}>
            <li className="section5__card">
              <Image
                src="/icons/infinity.svg"
                alt="icon svg"
                width={64}
                height={64}
                loading="lazy"
              />
              <p>Неограниченное количество полей <br /> и автоматических сценариев (роботов)</p>
            </li>
          </FadeUp_block>
          <FadeUp_block delay={0.1} trigger={".section5__list"}>
            <li className="section5__card">
              <Image src="/icons/tasks.svg" alt="icon svg" width={64} height={64} loading="lazy" />
              <p>Индивидуально настроенные панели <br /> задач для каждого руководителя</p>
            </li>
          </FadeUp_block>

          <FadeUp_block delay={0.2} trigger={".section5__list"}>
            <li className="section5__card">
              <Image
                src="/icons/creativity.svg"
                alt="icon svg"
                width={64}
                height={64}
                loading="lazy"
              />

              <p>Полная кастомизация всех рабочих <br /> мест под ваши потребности</p>
            </li>
          </FadeUp_block>

          <FadeUp_block delay={0.3} trigger={".section5__list"}>
            <li className="section5__card">
              <Image
                src="/icons/customer.svg"
                alt="icon svg"
                width={64}
                height={64}
                loading="lazy"
              />

              <p>Неограниченное количество обращений в службу поддержки в период обслуживания</p>
            </li>
          </FadeUp_block>
        </ul>
      </section>
    </div>
  );
}
