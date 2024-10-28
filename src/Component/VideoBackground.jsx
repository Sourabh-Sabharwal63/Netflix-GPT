import React from "react";
import useVideo from "./hooks/useVideo";


const VideoBackground = ({video_id}) => {
  const trailer_key=useVideo(video_id);
  const url=`https://www.youtube.com/embed/${trailer_key}?&autoplay=1&mute=1&loop=1&playlist=${trailer_key}`
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
