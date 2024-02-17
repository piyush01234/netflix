import { useEffect } from "react";
import { api_options, nowPlayingMoviesUrl, upcomingMoviesUrl, videoUrl } from "../constants/ApiData";
import { addNowPlaying, addUpcoming, addVideo } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useVideo = (movieId) => {
  const dispatch = useDispatch();
  const getVideo = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, api_options);
    const res = await data.json();
    // console.log(res);
    dispatch(addVideo(res?.results));
  };
  useEffect(() => {
    getVideo();
  }, []);
};

export default useVideo;
