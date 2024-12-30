"use client";
import React from "react";
import "./Navigation.scss";
export default function Navigation() {
  return (
    <div className="nav">
      <ul className="nav-sidebar">
        <li className="bitrix-background nav-sidebar__item">
          <a href="#bitrix-block__1">Инструменты для управления</a>
        </li>
        <li className="bitrix-background nav-sidebar__item">
          <a href="#bitrix-block__5">Контакт центр</a>
        </li>
        <li className="bitrix-background nav-sidebar__item">
          <a href="#bitrix-block__8">Документоборот</a>
        </li>
        <li className="bitrix-background nav-sidebar__item">
          <a href="#bitrix-block__9">Совместная работа</a>
        </li>
        <li className="bitrix-background nav-sidebar__item">
          <a href="#bitrix-block__12">Инструменты для команды</a>
        </li>
        <li className="bitrix-background nav-sidebar__item">
          <a href="#bitrix-block__16">База знаний</a>
        </li>
        <li className="bitrix-background nav-sidebar__item">
          <a href="#bitrix-block__17">Аналитика</a>
        </li>
        <li className="bitrix-background nav-sidebar__item">
          <a href="#bitrix-block__18">Встроенный ИИ</a>
        </li>
        <li className="bitrix-background nav-sidebar__item">
          <a href="#bitrix-block__19">Складской учет</a>
        </li>
        <li className="bitrix-background nav-sidebar__item">
          <a href="#bitrix-block__20">Маркетинг</a>
        </li>
        <li className="bitrix-background nav-sidebar__item">
          <a href="#footer">Связаться с нами</a>
        </li>
      </ul>
    </div>
  );
}
