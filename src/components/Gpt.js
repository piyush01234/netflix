import React, { useEffect, useState } from "react";
import openai from "../openAi";
import { api_options, searchMovieUrl } from "../constants/ApiData";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovies } from "../redux/gptSlice";
import MoviesList from "./MoviesList";
import GptSearchBar from "./GptSearchBar";
import GptMovies from "./GptMovies";

function Gpt() {
 
  return (
   <div  className="overflow-auto  min-h-screen object-cover
   bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg')]
   ">
    <GptSearchBar/>
    <GptMovies/>
   </div>
  );
}

export default Gpt;
