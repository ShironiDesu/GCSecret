import React from "react";
import "./homePage.scss";
import Hero from "./sections/hero/hero";
import Section2 from "./sections/section2/section2";
import WhyUs from "./sections/section2-why-us/whyUs";
import Section3 from "./sections/section3/section3";
import Section4 from "./sections/section4/section4";
import Section5 from "./sections/section5/section5";
import Section6 from "./sections/section6/section6";
import Section7 from "./sections/section7/section7";
import Section8 from "./sections/section8/section8";
import TrustedBy from "./sections/section2-trusted-by/trustedBy";
import PriceList from "./sections/section2-price-list/priceList";
import Implementation from "./sections/section2-imp/implementation";

import Calculator from "./sections/calculator/calculator";

import FinancialAdvantages from "./sections/section3-financial-advantages/FinancialAdvantages";
import AnotherFaq from "./sections/section8-another-faq/AnotherFaq";
import ChangeWorld from "./sections/change-world/ChangeWorld";

export const metadata = {
  title: "Интеграция и внедрение Битрикс24 в Казахстане – Gamechanger",
  description:
    "Эффективная интеграция и внедрение Битрикс24 для бизнеса. Обучение, поддержка 24/7, доработки под ваши задачи. Узнайте, как автоматизировать процессы и улучшить производительность с Gamechanger.",
  openGraph: {
    title: "Интеграция и внедрение Битрикс24 в Казахстане – Gamechanger",
    description:
      "Эффективная интеграция и внедрение Битрикс24 для бизнеса. Обучение, поддержка 24/7, доработки под ваши задачи. Узнайте, как автоматизировать процессы и улучшить производительность с Gamechanger.",
    images: [
      {
        url: "/favicon/social-bg.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};
export default function Home() {
  return (
    <main id="homepage__main">
      <Hero />
      <Section2 />
      <TrustedBy />
      <Calculator />

      <WhyUs />
      <FinancialAdvantages />

      {/* <PriceList /> */}
      <Implementation />
      <Section3 />
      <ChangeWorld />
      <Section4 />
      {/* <Section7 /> */}
      <Section5 />

      {/* <Section8 /> */}
      <AnotherFaq />
      <Section6 />
    </main>
  );
}
