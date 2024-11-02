import React from "react";
import MovieCard from "./MovieCard";


const MovieList = ({title,movies}) => {
  return (
    <div className="px-6  bg-black w-screen">
      <h1 className="md:text-3xl text-xl py-4  text-white font-normal md:font-semibold">{title}</h1>
      
      <div className="flex overflow-x-scroll   " >
        <div className="flex">
          {movies.map((mov) => (
            <MovieCard key={mov.id} poster_path={mov?.poster_path} />
          ))}
        </div>
       
      </div>

    </div>
  );
};

export default MovieList;
