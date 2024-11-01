import { useState, useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTrailer_key}  from "../utils/Redux/moviesSlice";
const useVideo = (video_id) => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const SliceTrailer_key=useSelector(store=>store?.movies?.Trailer_key);
  const getVideo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${video_id}/videos?language=en-US`;
    const response = await fetch(url, options);
    setData(await response.json());
  };
  useEffect(() => {
     !SliceTrailer_key && getVideo();
  }, []);

  if (data) {
   // dispatch(addVideoData(data.results));
    const Filter_Trailer = data.results.filter((video) => {
      
       return video.type === "Trailer";
    });
    const Trailer_key = Filter_Trailer.length
      ? Filter_Trailer[0].key
      : data.results[0].key;
      dispatch(addTrailer_key(Trailer_key));
   
  }
};

export default useVideo;
