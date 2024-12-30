"use client";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useModal } from "../hooks/use-modal-store";

export default function Popup({ className, children, popupName }) {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { isOpen, name } = useModal();
  const isModalOpen = isOpen && name === popupName;

  useEffect(() => {
    if (isModalOpen) {
      setIsRendered(true);
      setIsVisible(true);
      // requestAnimationFrame(() => setIsVisible(true));
    } else if (isRendered) {
      setIsVisible(false);
      // const timeout = setTimeout(() => setIsRendered(false), 300);
      // return () => clearTimeout(timeout);
    }
  }, [isModalOpen, isRendered]);

  if (!isRendered) return null;

  return ReactDOM.createPortal(
    <div
      className={`popup ${isVisible ? "active" : ""} ${className}`}
      data-lenis-prevent="true"
    >
      <div className="container">{children}</div>
    </div>,
    document.body
  );
}
