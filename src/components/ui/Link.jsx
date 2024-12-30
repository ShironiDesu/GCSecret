"use client";

import Link from "next/link";
import usePreloader from "../hooks/use-preloader-store";
import FadeUp_block from "./FadeUp-block";

export default function PreloadLink({ href, children, animationOff, ...props }) {
  const setLoading = usePreloader((state) => state.setLoading);

  const handleClick = (e) => {
    setLoading(true);

    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <FadeUp_block animationOff={animationOff}>
      <Link href={href} {...props} onClick={handleClick}>
        {children}
      </Link>
    </FadeUp_block>
  );
}
