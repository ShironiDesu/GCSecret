import React from "react";
import fs from "fs";
import path from "path";
import MySwiper from "./swiper"

export default function Section3_Swiper() {
  const imagesDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "logotypes"
  );
  const imagesFiles = fs.readdirSync(imagesDirectory);

  const imagesPaths = imagesFiles
    .filter((file) => /\.(png|jpe?g|gif|svg)$/.test(file))
    .map((file) => `/images/logotypes/${file}`);

  return <MySwiper imagesPaths={imagesPaths} />;
}
