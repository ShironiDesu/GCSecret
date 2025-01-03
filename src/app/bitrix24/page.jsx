import React from "react";
import "./bitrix24.scss";
import TitleSection from "./sections/Home/HomeScreen";
import BitrixOverviewScreen from "./sections/Bitrix-Overview/BitrixOverviewScreen";
import Navigation from "./components/bitrix-overview-componets/navigation/Navigation";
import Section2 from "../home/sections/section2/section2";
import TrustedBy from "../home/sections/section2-trusted-by/trustedBy";
export const metadata = {
  title: "Gamechanger - Что такое Bitrix24",
  description: "Битрикс24 - Новый уровень для Вашего бизнеса",
};

export default function Bitrix24() {
  return (
    <main className="main">
      <div className="container">
        <TitleSection />
        <Section2 />
        <TrustedBy />
        <BitrixOverviewScreen />
        <Navigation />
      </div>
    </main>
  );
}
