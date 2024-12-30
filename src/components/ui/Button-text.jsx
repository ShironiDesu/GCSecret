"use client";
import { useModal } from "../hooks/use-modal-store";
import FadeUp_block from "./FadeUp-block";

export default function ButtonText({
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

  const handleClick = () => {
    if (popup) {
      openPopup(popup, videoSrc);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <FadeUp_block animationOff={animationOff}>
      <button
        className={`button-text ${className} ${active ? "active" : ""}`}
        onClick={handleClick}
        disabled={disabled}
      >
        {children}
      </button>
    </FadeUp_block>
  );
}
