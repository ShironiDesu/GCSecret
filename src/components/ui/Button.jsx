"use client";
import { useRef } from "react";
import { useModal } from "../hooks/use-modal-store";
import FadeUp_block from "./FadeUp-block";
export default function Button({
  children,
  className,
  onClick,
  active,
  disabled,
  popup,
  videoSrc,
  animationOff
}) {
  const { openPopup } = useModal();
  const ref = useRef(null);
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    // if (videoSrc) {
    //   return openVideoPopup(popup, videoSrc);
    // }
    if (popup) {
      openPopup(popup, videoSrc);
    }
  };

  return (
    <FadeUp_block animationOff={animationOff}>
      <button
        className={`button ${className ? className : ""} ${active ? "active" : ""}`}
        onClick={handleClick}
        disabled={disabled}
        ref={ref}
      >
        {children}
      </button>
    </FadeUp_block>
  );
}
