import React from "react";
import useMovieImage from "./hooks/useMovieImage";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview, video_id }) => {
  useMovieImage(video_id);
  const imageKey = useSelector(
    (store) => store.titleImage?.imageData?.backdrops[2]?.file_path
  );
  const imageUrl = `https://image.tmdb.org/t/p/w500/` + imageKey;

  return (
    <div className="pt-36 px-12 absolute w-screen  bg-gradient-to-r from-black aspect-video">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white ">{overview}</p>
      <img className=" w-80 m-2 rounded-full" src={imageUrl} alt="poster" />
      <div>
        <button className="px-10 py-3 rounded-md m-2 font-bold text-xl bg-slate-300 hover:opacity-50">
          ▶ Play
        </button>
        <button className="px-10 py-3 rounded-md m-2 font-bold text-xl bg-slate-300  hover:opacity-50">
          ℹ️ More Info
        </button>
        
      </div>
    </div>   
  );
};

export default VideoTitle;
