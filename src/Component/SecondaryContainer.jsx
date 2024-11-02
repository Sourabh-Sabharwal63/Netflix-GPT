import React from 'react'
import MovieList from './MovieList'
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  const PopularMovies = useSelector((store) => store?.movies?.PopularMovies);
  const TopRatedMovies=useSelector((store) => store?.movies?.TopRated);
  const TopRatedSer=useSelector((store) => store?.movies?.TopRatedSer);
  const AiringToday=useSelector((store) => store?.movies?.AiringToday);
  return (
    <div className='bg-black py-12 md:py-0'>
      <MovieList title={"NowPlaying"} movies={movies}/>
      <MovieList title={"Popular"} movies={PopularMovies}/>
      <MovieList title={"Top Rated"} movies={TopRatedMovies}/>
      <MovieList title={"Top Serise"} movies={TopRatedSer}/>
      <MovieList title={"Airing Today"} movies={AiringToday}/>
    </div>
  )
}

export default SecondaryContainer