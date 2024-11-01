import  { useEffect, useState } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {addTopRatedSer } from "../utils/Redux/moviesSlice";
const useTopRatedSer = () => {
  const dispatch = useDispatch();
  const data_Slice=useSelector(store=>store?.movies?.TopRatedSer);
  const [apiData, setApiData] = useState(null);
  const getMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      options
    );
    setApiData(await (data.json()));
  };

  useEffect(() => {
    !data_Slice && getMovieList();
  }, []);

  if (apiData) {
    dispatch(addTopRatedSer(apiData?.results));
  }
};

export default useTopRatedSer;
