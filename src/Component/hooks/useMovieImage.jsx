import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addImageData } from "../utils/Redux/TitleImageSlice";
import { options } from "../utils/constant";

const useMovieImage = (video_id) => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const getImage = async () => {
    const url = `https://api.themoviedb.org/3/movie/${video_id}/images`;
    const response = await fetch(url, options);
    setData(await response.json());
  };
  useEffect(() => {
    getImage();
  }, []);

  if (data) {
    dispatch(addImageData(data));
  }
};
export default useMovieImage;
