"use client";
import React from "react";
import "./MainTitle.scss";
export default function MainTitle() {
  return (
    <h1 className="home__title ">
      Битрикс24 <br />
      Новый уровень <br className="home__title__for-br" /> для{" "}
      <span className="blue-gradient">
        <br className="home__title__buisness-br" />
        Вашего бизнеса
      </span>
    </h1>
  );
}
