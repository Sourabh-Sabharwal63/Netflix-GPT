import React from "react";
import MovieCard from "./MovieCard";


const MovieList = ({title,movies}) => {
  console.log("Title = ",title);
  console.log("Movies = ",movies);
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-4  text-white font-semibold">{title}</h1>
      <div>
        
      </div>
      <div className="flex overflow-x-scroll bg-slate-400">
        <div className="flex">
          {movies.map((mov) => (
            <MovieCard key={mov.id} poster_path={mov?.poster_path} />
          ))}
        </div>
       
      </div>
      <div className="flex overflow-x-scroll bg-slate-400">
      
      </div>
    </div>
  );
};

export default MovieList;
