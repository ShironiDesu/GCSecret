"use client";
import React, { useEffect, useRef } from "react";
import Popup from "@/components/ui/Popup";
import { useModal } from "@/components/hooks/use-modal-store";
import Image from "next/image";
import "./videoPopup.scss";
import usePreloader from "@/components/hooks/use-preloader-store";

export default function VideoPopup() {
  const {} = useModal();
  const video = useRef(null);

  const { isOpen, name, closePopup } = useModal();
  const isModalOpen = isOpen && name === "video-popup";

  const { setPlaying } = usePreloader();

  useEffect(() => {
    if (isModalOpen) {
      setPlaying(false);
    }
  }, [isModalOpen, setPlaying]);

  const handleClick = () => {
    if (video.current) {
      video.current.pause();
      video.current.currentTime = 0;
      setPlaying(true);
    }
    closePopup();
  };

  return (
    <Popup className="video-popup" popupName="video-popup">
      <button className="close_popup" onClick={handleClick}>
        <Image src="/icons/close-btn.svg" width={64} height={64} alt="close btn" loading="lazy" />
      </button>

      <video ref={video} controls>
        <source
          src="https://dl.dropbox.com/scl/fi/sq6p5zpz7s71x3wc5ehvm/reviews.MP4?rlkey=aw4xlxqy8vbcyjku4k1210ygo&st=longevdj&dl=0"
          type="video/mp4"
        />
      </video>
    </Popup>
  );
}
