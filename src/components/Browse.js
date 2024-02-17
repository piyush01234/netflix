import React, { useEffect } from "react";
import Header from "./Header";
import { api_options, nowPlayingMoviesUrl } from "../constants/ApiData";
import MoviesList from "./MoviesList";
import useNowPlaying from "../hooks/useNowPlaying";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import useTopRated from "../hooks/useTopRated";
import usePopular from "../hooks/usePopular";
import useUpcoming from "../hooks/useUpcoming";
import { useSelector } from "react-redux";
import Gpt from "./Gpt";

function Browse() {
  const isGpt = useSelector((state) => state.gpt.isGpt);
  useNowPlaying();
  useTopRated();
  usePopular();
  useUpcoming();

  return (
    <div>
      <Header />
      <div className="">
        {!isGpt ? (
          <>
            <div className="  flex flex-col bg-black w-screen ">
              <MainContainer />
            </div>
            <div className=" flex flex-col bg-black w-screen">
              <SecondaryContainer />
            </div>
          </>
        ) : (
          <Gpt />
        )}
      </div>
    </div>
  );
}

export default Browse;
