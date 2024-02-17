import React from 'react'
import { useSelector } from 'react-redux';
import MoviesList from './MoviesList';

const GptMovies = () => {

    const {gptMovies,movieNames} = useSelector((state) => state.gpt);
    if(!movieNames) return null

    console.log("hey"+JSON.stringify(gptMovies))
  return (
    <div className=' bg-black bg-opacity-70'>
      { 
      movieNames?.map((item,index)=>{
        return(
        <div >
            <MoviesList title={item} movies={gptMovies?.[index]} />
        </div>
        )
      })
      }
      
    </div>
  )
}

export default GptMovies
