import React from "react";
import GPT_SearchBar from "./GPT_SearchBar";
import GPT_MovieSuggestion from "./GPT_MovieSuggestion";
import { BgImage } from "./utils/constant";

const GPTSearch = () => {
  return (
    <div>
      
        <div className="fixed -z-10">
          <img className="h-screen  object-cover md:h-auto" src={BgImage} alt="bg-img"  />
        </div>
      
      <div className="pt-[50%] md:p-0">
        <GPT_SearchBar />
        
      </div>
    </div>
  );
};

export default GPTSearch;
