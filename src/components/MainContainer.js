import React from "react";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((state) => state.movie.nowPlaying);
  if (!movies) return null;
  const random = Math.floor(Math.random() * 10);
  const mainMovie = movies?.[2];
  const { id } = mainMovie;

  return (
    <div className="w-screen">
      {mainMovie ? (
        <>
          <VideoTitle movie={mainMovie} />
          <VideoBackground movieId={mainMovie.id} />
        </>
      ) : (
        <div className="aspect-video w-screen">
          <h1>loading</h1>
        </div>
      )}
    </div>
  );
};

export default MainContainer;
