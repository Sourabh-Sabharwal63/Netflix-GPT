import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
const MainContainer = () => {
 // const dispatch=useDispatch();
  const movies=useSelector(store=>store.movies?.nowPlayingMovies);


  if(!movies) return;

  
  const{title,overview,id}=movies[0];
  
  return (
    <div>
      
      <VideoTitle title={title} overview={overview} video_id={id} />
      <VideoBackground video_id={id}/>
      
    </div>
  )
}

export default MainContainer