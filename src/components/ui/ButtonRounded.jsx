"use client";
import { useModal } from "../hooks/use-modal-store";
import FadeUp_block from "./FadeUp-block";
import React from "react";

export default function ButtonRounded({
  children,
  className,
  onClick,
  active,
  disabled,
  popup,
  videoSrc,
  animationOff,
}) {
  const { openPopup } = useModal();

  const handleClick = () => {
    if (popup) {
      openPopup(popup, videoSrc);
    }
    if (onClick) {
      onClick();
    }
  };
  return (
    <div>
      <FadeUp_block animationOff={animationOff}>
        <button
          className={`button-rounded ${className} ${active ? "active" : ""}`}
          onClick={handleClick}
          disabled={disabled}
        >
          {children}
        </button>
      </FadeUp_block>
    </div>
  );
}
