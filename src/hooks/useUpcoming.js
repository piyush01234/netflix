import { useEffect } from "react";
import { api_options, nowPlayingMoviesUrl, upcomingMoviesUrl } from "../constants/ApiData";
import { addNowPlaying, addUpcoming } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useUpcoming = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(upcomingMoviesUrl, api_options);
    const res = await data.json();
    // console.log(res);
    dispatch(addUpcoming(res?.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcoming;
