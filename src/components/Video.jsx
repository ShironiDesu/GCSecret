import Video from "next-video";
// import video from "/video/GCLogo.mp4"

export default function VideoLogo() {
  return (
    <Video
      src="https://dl.dropbox.com/scl/fi/qp1n4cuyos3ifel6p4n10/1.mp4?rlkey=v7ht2nx41lycx2r2vdz6apdvb&st=k70mq86u&dl=0"
      type="video/mp4"
      autoPlay
      muted
      loop
      className="hero__video"
    />
  );
}
