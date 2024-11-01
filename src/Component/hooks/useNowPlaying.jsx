import  { useEffect, useState } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addPlayingMovies } from "../utils/Redux/moviesSlice";
const useNowPlaying = () => {
  const dispatch = useDispatch();
  const data_Slice=useSelector(store=>store?.movies?.nowPlayingMovies);
  const [apiData, setApiData] = useState(null);
  const getMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    setApiData(await (data.json()));
  };

  useEffect(() => {
   !data_Slice && getMovieList();
  }, []);

  if (apiData) {
    dispatch(addPlayingMovies(apiData?.results));
  }
};

export default useNowPlaying;
