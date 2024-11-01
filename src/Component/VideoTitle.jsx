import React from "react";
import {PosterUrl} from "./utils/constant" ;

const VideoTitle = ({ title, overview, poster_path }) => {
 // useMovieImage(video_id);
 const poster=PosterUrl+poster_path;
 /* const imageKey = useSelector(
    (store) => store.titleImage?.imageData?.backdrops[2]?.file_path
  );
  const imageUrl = `https://image.tmdb.org/t/p/w500/` + imageKey;
*/
  return (
    <div className="pt-36 px-12 absolute w-screen  bg-gradient-to-r from-black aspect-video">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white ">{overview}</p>
      <img className=" pl-2 w-60 mx-3  h-80 rounded-lg" src={poster} alt="poster" />
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
