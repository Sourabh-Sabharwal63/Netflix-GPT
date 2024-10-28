import React, { useEffect } from "react";
import useNowPlaying from "./hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import useMovieImage from "./hooks/useMovieImage";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlaying();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  useEffect(() => {}, [movies]);
  if (!movies) return <div>Loading...</div>;
  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default Browse;
