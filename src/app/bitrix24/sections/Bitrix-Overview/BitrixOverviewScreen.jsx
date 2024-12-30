"use client";
import React from "react";
import "./BitrixOverviewScreen.scss";
import MainTitle from "../../components/bitrix-overview-componets/main-title/MainTitle";

import useBitrixStore from "@/components/hooks/use-bitrix-store";
import BitrixBlock from "./BitrixBlock/BitrixBlock";

export default function BitrixOverviewScreen() {
  const bitrixInfo = useBitrixStore((state) => state);
  return (
    <div className="bitrix-overview__container">
      <MainTitle />
      {/* <BitrixTaskInfo /> */}
      {bitrixInfo &&
        bitrixInfo.map((item, index) => (
          <BitrixBlock
            key={index}
            data={item}
            id={`bitrix-block__${index + 1}`}
          />
        ))}
    </div>
  );
}
