import { useEffect } from "react";
import { api_options, nowPlayingMoviesUrl, popularMoviesUrl } from "../constants/ApiData";
import { addNowPlaying, addPopular } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const usePopular = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(popularMoviesUrl, api_options);
    const res = await data.json();
    // console.log(res);
    dispatch(addPopular(res?.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopular;
