import React from "react";
import { useSelector } from "react-redux";


import useNowPlaying from "./hooks/useNowPlaying";

const Browse = () => {
  useNowPlaying();
  const MOVIESlist=useSelector((store)=>store.movies.nowPlayingMovies);
  if(MOVIESlist===null){
     return <div>Loading....</div>;
  }
  else{
    return(
      <div>
        {MOVIESlist.map((mov)=>{return (<div><p>{mov?.title}</p><br/></div>)})}
        
      </div>
    )
  }
 
};

export default Browse;
