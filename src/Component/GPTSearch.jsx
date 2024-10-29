import React from 'react'
import GPT_SearchBar from './GPT_SearchBar';
import GPT_MovieSuggestion from './GPT_MovieSuggestion';
import { BgImage } from './utils/constant';

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BgImage}
          alt="bg-img"
        />
      </div>
      <GPT_SearchBar/>
      <GPT_MovieSuggestion/>

    </div>
  )
}

export default GPTSearch