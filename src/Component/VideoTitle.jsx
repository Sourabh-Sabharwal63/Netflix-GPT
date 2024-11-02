import React from "react";
import {PosterUrl} from "./utils/constant" ;

const VideoTitle = ({ title, overview, poster_path }) => {
 const poster=PosterUrl+poster_path;
  return (
    <div className="pt-4 px-4 md:pt-36 md:px-12 absolute w-screen  bg-gradient-to-r from-black aspect-video">
      <h1 className=" text-base sm:text-6xl md:text-6xl font-bold text-white">{title}</h1>
      <p className="py-1  hidden md:inline-block md:py-6 text-xs md:text-lg w-2/4 md:w-1/4 text-white ">{overview}</p>
      <img className=" pl-2 w-20 h-30 mx-3 md:w-60 md:h-80 rounded-lg" src={poster} alt="poster" />
      <div >
        <button className=" text-xs px-3 py-1  md:px-10 md:py-3 rounded-md m-2 md:font-bold md:text-xl bg-slate-300 hover:opacity-50">
          ▶ Play
        </button>
        <button className="text-xs px-3 py-1   md:px-10 md:py-3 rounded-md md:m-2 md:font-bold md:text-xl bg-slate-300  hover:opacity-50">
          ℹ️ More Info
        </button>
        
      </div>
    </div>   
  );
};

export default VideoTitle;
