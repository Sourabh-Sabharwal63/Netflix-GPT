import React from "react";
import useVideo from "../hooks/useVideo";
import { useSelector } from "react-redux";

const VideoBackground = () => {
  useVideo();
  const sliceTrailer_Key = useSelector(
    (store) => store?.trailerSlice?.trailerKey
  );
  const url = `https://www.youtube.com/embed/${sliceTrailer_Key}?&autoplay=1&mute=1&loop=1&playlist=${sliceTrailer_Key}`;
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
