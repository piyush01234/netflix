import React from "react";
import useVideo from "../hooks/useVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useVideo(movieId);
  const video = useSelector((state) => state.movie?.video);
  const trailer = video?.filter((item) => item.type === "Trailer");
  const key = trailer?.[0].key ? trailer?.[0].key : video?.[0].key;

  
  return (
    <div className=" w-screen  ">
      <iframe
        className="w-screen aspect-video  max-[400px]:h-[300px]"
        src={`https://www.youtube.com/embed/${key}/?&autoplay=1&loop=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder={0}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
