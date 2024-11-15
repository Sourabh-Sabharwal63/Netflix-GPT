import React from "react";
import { useDispatch } from "react-redux";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import {
  addId,
  addOverview,
  addPoster_Path,
  addTitle,
} from "../utils/Redux/trailerSlice";
const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();
  const handleDispatch = (id, title, poster_path, overview) => {
    dispatch(addId(id));
    dispatch(addTitle(title));
    dispatch(addPoster_Path(poster_path));
    dispatch(addOverview(overview));
  };
  return (
    <div className="px-6  bg-black w-screen md:bg-transparent md:bg-gradient-to-b md:from-black md:to-transparent ">
      <h1 className="md:text-3xl text-xl py-4  text-white font-normal md:font-semibold">
        {title}
      </h1>

      <div className="flex overflow-x-scroll   ">
        <div className="flex">
          {movies.map((mov) => (
            <div key={mov.id}
              onClick={() =>{
                handleDispatch(
                  mov.id,
                  mov.title,
                  mov?.poster_path,
                  mov?.overview
                )}
              }
            >
              {" "}
              <MovieCard key={mov.id} poster_path={mov?.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
