"use client";
import React from "react";
import "./TitleInfo.scss";
export default function TitleInfo() {
  return (
    <div className="home__info">
      <div className="home__info__round"></div>
      <p className="home__info__text">
        Система включающая <span className="blue-gradient">ERP</span> и
        <span className="blue-gradient"> CRM</span>, а также самый широкий
        спектр инструментов для организации, управления и автоматизации
        предприятий.
      </p>
    </div>
  );
}
