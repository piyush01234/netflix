import { useEffect } from "react";
import { api_options, nowPlayingMoviesUrl } from "../constants/ApiData";
import { addNowPlaying } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const data = await fetch(nowPlayingMoviesUrl, api_options);
    const res = await data.json();
    // console.log(res);
    dispatch(addNowPlaying(res?.results));
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlaying;
