import { useEffect, useState } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addPlayingMovies } from "../utils/Redux/moviesSlice";
import {
  addId,
  addOverview,
  addTitle,
  addPoster_Path,
} from "../utils/Redux/trailerSlice";
const useNowPlaying = () => {
  const dispatch = useDispatch();
  const data_Slice = useSelector((store) => store?.movies?.nowPlayingMovies);
  const [apiData, setApiData] = useState(null);
  const getMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    setApiData(await data.json());
  };

  useEffect(() => {
    !data_Slice && getMovieList();
  }, []);

  if (apiData) {
    dispatch(addPlayingMovies(apiData?.results));
    if (data_Slice) {
      const { id, title, poster_path, overview } = data_Slice[0];
      dispatch(addId(id));
      dispatch(addTitle(title));
      dispatch(addPoster_Path(poster_path));
      dispatch(addOverview(overview));
    }
  }
};

export default useNowPlaying;
