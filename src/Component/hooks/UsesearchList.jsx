import  { useEffect, useState } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeSearchedList } from "../utils/Redux/GPTSlice";
const UsesearchList = () => {
 // const search_word="dhoom";
 
  const dispatch = useDispatch();
  const data_Slice=useSelector(store=>store?.GPTSlice?.searchedList);
  const search_word=useSelector(store=>store?.GPTSlice?.searchWord);
  const [apiData, setApiData] = useState(null);
  const getMovieList = async () => {
    if(!search_word)return;
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search_word}&include_adult=false&language=en-US&page=1`,
      options
    );
    setApiData(await (data.json()));
  };
  
  useEffect(() => {
     getMovieList();
  }, [search_word]);

  if(!search_word)return ;
  if (apiData) {
    dispatch(changeSearchedList(apiData?.results));
  }
};

export default UsesearchList;
