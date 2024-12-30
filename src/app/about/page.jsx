import React from "react";
import "./page.scss";
import HomeScreen from "./sections/homeScreen/HomeScreen";
import WorkScreen from "./sections/workScreen/WorkScreen";
import ProudSection from "./sections/proudSection/ProudSection";
export const metadata = {
  title: "Gamechanger - О нас",
  description: "Специалисты которые увеличат доходы вашего бизнеса",
};
export default function About() {
  return (
    <main id="about-main">
      <div className="container">
        <HomeScreen/>
        <ProudSection/>
        <WorkScreen/>
      </div>
    </main>
  );
}
