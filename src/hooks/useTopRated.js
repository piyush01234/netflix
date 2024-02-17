import { useEffect } from "react";
import { api_options,  topRatedMoviesUrl } from "../constants/ApiData";
import { addNowPlaying, addTopRated } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useTopRated = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(topRatedMoviesUrl, api_options);
    const res = await data.json();
    // console.log(res);
    dispatch(addTopRated(res?.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRated;
