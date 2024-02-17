import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movie);
  // console.log("movies"+JSON.stringify(nowPlayingMovies))
  return (
    <>
      <MoviesList title={"Now Playing"} movies={movies.nowPlaying}  />
      <MoviesList title={"Popular"}  movies={movies.popular}/>
      <MoviesList title={"Top Rated"}  movies={movies.topRated}/>
      <MoviesList title={"Upcoming"} movies={movies.upcoming} />
    </>
  );
};

export default SecondaryContainer;
