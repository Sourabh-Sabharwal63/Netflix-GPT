import  { useEffect, useState } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addTopRated } from "../utils/Redux/moviesSlice";
const useTopRated = () => {
  const dispatch = useDispatch();
  const [apiData, setApiData] = useState(null);
  const getMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    setApiData(await (data.json()));
  };

  useEffect(() => {
    getMovieList();
  }, []);

  if (apiData) {
    dispatch(addTopRated(apiData?.results));
  }
};

export default useTopRated;
