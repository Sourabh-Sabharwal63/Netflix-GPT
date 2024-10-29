import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import SecondaryContainer from "./SecondaryContainer";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const { title, overview, id } = movies[0];
  return (
    <div>
      <VideoTitle title={title} overview={overview} video_id={id} />
      <VideoBackground video_id={id} />
      <SecondaryContainer />
    </div>
  );
};

export default MainContainer;
