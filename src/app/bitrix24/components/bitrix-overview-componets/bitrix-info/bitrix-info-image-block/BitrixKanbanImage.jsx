"use client";
import React from "react";
import "./BitrixKanbanImage.scss";
export default function BitrixKanbanImage({ image }) {

  return (
    <div className="bitrix-overview__image__kanban bitrix-background">
      {/* <Image objectFit='contain' className='test'  fill  src={image.imageSrc} alt={image.alt} /> */}
      {/* <img className='tasks-image' src={image.imageSrc[0]} alt={image.alt}  />
        <img className='mobile-image' src={image.imageSrc[1]} alt={image.alt}  /> */}
      {/* <img className='test-kanban ' src={image.imageSrc} alt={image.alt} /> */}
      <div
        className="test-kanban"
        style={{ backgroundImage: `url(${image.imageSrc})` }}
      ></div>
    </div>
  );
}
