import React from "react";
import lang from "./utils/language_Constant";
import { useSelector } from "react-redux";


const GPT_SearchBar = () => {
  const language=useSelector(store=>store?.GPTSlice?.language);
  return (
    <div className="pt-[10%] w-2/2 mx-auto md:w-1/2 ">
      <form  className=" px-3 " action="">
        
        <input 
          type="text"
          name="SearchText"
          id=""
          placeholder= {lang[language].placeHolder}
          className="  w-3/4  p-2 border-2 border-blue-600 rounded-md"
        />
        
        <button className="w-20 px-2 h-10 my-4    bg-red-600 font-medium text-lg text-white rounded-md ">
          {lang[language].search}
        </button>

       
      
      </form>
    </div>
  );
};

export default GPT_SearchBar;
