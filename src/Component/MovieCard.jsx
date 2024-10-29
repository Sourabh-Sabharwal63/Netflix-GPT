import React from 'react'
import { PosterUrl } from './utils/constant'

const MovieCard = ({poster_path}) => {
  const poster=PosterUrl+poster_path;
  return (
    <div className='w-48 pr-4 '>
      <div  className=''>
        <img className=' border-2 border-yellow-200 rounded-md  shadow-lg shadow-white-500/100 hover:border-orange-500 hover:border-4 hover:rounded-xl' src={poster} alt="Movie Poster" />
      </div>
    </div>
  )
}
export default MovieCard;