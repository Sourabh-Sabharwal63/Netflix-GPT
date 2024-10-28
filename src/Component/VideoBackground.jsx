import React from "react";
import useVideo from "./hooks/useVideo";


const VideoBackground = ({video_id}) => {
  const trailer_key=useVideo(video_id);
  const url=`https://www.youtube.com/embed/${trailer_key}`
  return (
    <div>
      <iframe
        width="560" 
        height="315"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
