"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import usePreloader from "../hooks/use-preloader-store";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function FadeUp_block({ children, delay, start, trigger, animationOff }) {
  const ref = useRef(null);
  const { isLoading } = usePreloader();
  const triggerId = useRef(null); 

  useGSAP(() => {
    const element = ref.current;
    
    if (element && !isLoading && !animationOff) {
      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: trigger || element,
        start: start || "top 100%",
        toggleActions: "play none none none",
        id: `fade-up-${Math.random()}`,
      });

      triggerId.current = scrollTriggerInstance.id;

      gsap.from(element, {
        opacity: 0,
        filter: "blur(20px)",
        duration: 0.3,
        delay: delay || 0,
        scrollTrigger: scrollTriggerInstance,
      });
    }
  },[isLoading])

  // useEffect(() => {


  //   return () => {
  //     // Удаляем только этот триггер
  //     const triggerToRemove = ScrollTrigger.getById(triggerId.current);
  //     if (triggerToRemove) triggerToRemove.kill();
  //   };
  // }, [isLoading]);

  return <>{React.cloneElement(children, { ref })}</>;
}
