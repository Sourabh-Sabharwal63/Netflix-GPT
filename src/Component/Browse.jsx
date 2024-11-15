import React, { useEffect } from "react";
import useNowPlaying from "./hooks/useNowPlaying";
import MainContainer from "./MainPage/MainContainer";
import { useSelector } from "react-redux";
import usePopular from "./hooks/usePopular";
import useTopRated from "./hooks/useTopRated";
import useTopRatedSer from "./hooks/useTopRatedSerise";
import useAiringToday from "./hooks/useAiringToday";
import GPTSearch from "./Search/GPTSearch";

const Browse = () => {
  useNowPlaying();
  usePopular();
  useTopRated();
  useTopRatedSer();
  useAiringToday();
  const GPT_Flag = useSelector((store) => store?.GPTSlice.pageStatus);
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const PopularMovies = useSelector((store) => store?.movies?.PopularMovies);
  const TopRatedMovies = useSelector((store) => store?.movies?.TopRated);
  const TopRatedSeries = useSelector((store) => store?.movies?.TopRatedSer);
  const AiringToday = useSelector((store) => store?.movies?.AiringToday);
   
  if (
    !movies ||
    !PopularMovies ||
    !TopRatedMovies ||
    !TopRatedSeries ||
    !AiringToday
  )
    return <div>Loading...</div>;

  if (GPT_Flag) return <GPTSearch />;
  
  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default Browse;
