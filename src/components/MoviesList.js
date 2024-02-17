import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="flex flex-col h-fit w-screen">
      <p className="text-white font-bold text-lg p-2 mb-2">{title}</p>
      <div className=" list p-2  flex gap-5 overflow-x-auto w-screen align-middle ">
        {movies ? (
          movies?.map((item, index) => (
            <MovieCard movieData={item} key={item?.id} />
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default MoviesList;
