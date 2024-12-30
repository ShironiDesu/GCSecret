import React from "react";
import "./bitrix24.scss";
import TitleSection from "./sections/Home/HomeScreen";
import BitrixOverviewScreen from "./sections/Bitrix-Overview/BitrixOverviewScreen";
import Navigation from "./components/bitrix-overview-componets/navigation/Navigation";
export const metadata = {
  title: "Gamechanger - Что такое Bitrix24",
  description: "Битрикс24 - Новый уровень для Вашего бизнеса",
};

export default function Bitrix24() {
  return (
    <main className="main">
      <div className="container">
        <TitleSection />
        <BitrixOverviewScreen />
        <Navigation />
      </div>
    </main>
  );
}
