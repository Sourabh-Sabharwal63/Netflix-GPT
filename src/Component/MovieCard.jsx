import React from 'react'
import { PosterUrl } from './utils/constant'

const MovieCard = ({poster_path}) => {
  const poster=PosterUrl+poster_path;
  return (
    <div className='w-48 pr-4'>
      <div >
        <img className='border border-blue-500' src={poster} alt="Movie Poster" />
      </div>
    </div>
  )
}

export default MovieCard