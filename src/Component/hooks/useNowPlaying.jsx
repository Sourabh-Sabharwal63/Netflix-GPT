import React, { useEffect, useState } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPlayingMovies } from "../utils/moviesSlice";
const useNowPlaying = () => {
  const dispatch = useDispatch();
  const [apiData, setApiData] = useState(null);
  const getMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );

    setApiData(await (data.json()));
  };

  useEffect(() => {
    getMovieList();
  }, []);

  if (apiData) {
    dispatch(addPlayingMovies(apiData?.results));
  }
};

export default useNowPlaying;
