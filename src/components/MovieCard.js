import React, { useState } from "react";

const MovieCard = ({ movieData }) => {
  
  return (
    <div>
      <div  className={`rounded-md border-4 w-[250px] h-full   max-[250px]:w-[200px]   flex-col   backdrop:${"https://image.tmdb.org/t/p/w500/" + movieData?.backdrop_path}`}>
        <img
          className="max-h-56 mb-2"
          width={250}
          height={200}
          src={"https://image.tmdb.org/t/p/w500/" + movieData?.poster_path}
          alt=""
        />
        <div className="m-auto">
        <p className="px-2 pt-2 font-serif font-bold text-white"> {movieData?.title}</p>
       {movieData?.vote_average && <p className=" font-serif font-bold pl-2 text-gray-500 pt-2"> {"Rated : "+  Math.floor(movieData?.vote_average)+"/10"}</p>}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
