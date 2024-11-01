import  { useEffect, useState } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {addAiringToday } from "../utils/Redux/moviesSlice";
const useAiringToday = () => {
  const dispatch = useDispatch();
  const data_Slice=useSelector(store=>store?.movies?.AiringToday);
  const [apiData, setApiData] = useState(null);
  const getMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      options
    );
    setApiData(await (data.json()));
  };

  useEffect(() => {
    !data_Slice && getMovieList();
  }, []);

  if (apiData) {
    dispatch(addAiringToday(apiData?.results));
  }
};

export default useAiringToday;
