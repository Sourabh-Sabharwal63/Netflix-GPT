import React, { useEffect } from "react";
import useNowPlaying from "./hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import usePopular from "./hooks/usePopular";
import useTopRated from "./hooks/useTopRated";
import useTopRatedSer from "./hooks/useTopRatedSerise";
import useAiringToday from  "./hooks/useAiringToday";
const Browse = () => {
  useNowPlaying();
  usePopular();
  useTopRated();
  useTopRatedSer();
  useAiringToday();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const PopularMovies = useSelector((store) => store?.movies?.PopularMovies);
  const TopRatedMovies = useSelector((store) => store?.movies?. TopRated);
  const TopRatedSeries = useSelector((store) => store?.movies?.TopSerise);
 // const AiringToday = useSelector((store) => store?.movies?. AiringToday);
  useEffect(() => {}, [movies,PopularMovies,TopRatedMovies,TopRatedSeries]);
  if (!movies ||!PopularMovies || !TopRatedMovies ||TopRatedSeries ) return <div>Loading...</div>;
  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default Browse;
