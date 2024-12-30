"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./AnimatedBackground.scss";
import usePreloader from "../hooks/use-preloader-store";

export default function AnimatedBackground() {
  return (
    <div className="animated-background">
      <img src="/lox.png" alt="asdada" className="lox" />
    </div>
  );
}
