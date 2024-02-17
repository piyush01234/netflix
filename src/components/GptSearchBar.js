import React, { useState } from "react";
import { addGptMovies } from "../redux/gptSlice";
import openai from "../openAi";
import { useDispatch, useSelector } from "react-redux";
import { api_options, searchMovieUrl } from "../constants/ApiData";

const GptSearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  

  const searchMovie = async () => {
    const query =
      "Act as a movie recommendation system and suggest some movies for the query:" +
      searchText +
      "only give me names of 5 movies , comma seprated like the example given ahead. Example Result : Gadar,Sholay,Don,Golmal,Raaz";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion);
    // const result=await chatCompletion.json()
    const result = chatCompletion.choices?.[0]?.message.content.split(",");
    console.log(result);
    const gptMoviesPromise = result?.map((item) => searchMovies(item));
    const gptMovies = await Promise.all(gptMoviesPromise);
    dispatch(addGptMovies({ moviesResult: gptMovies, movieNames: result }));
    console.log(gptMovies);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    searchMovie();
  };
  const searchMovies = async (movie) => {
    const data = await fetch(searchMovieUrl + movie, api_options);
    const json = await data.json();
    return json.results;
  };
  return (
    <div
     
    >
      <div className="pt-[20%]  ">
        <form
          onSubmit={handleSearch}
          className="bg-black  bg-opacity-90  w-1/2 max-sm:w-full  grid grid-cols-12  m-auto"
        >
          <input
            autoFocus
            type="text"
            placeholder="What would you like to search? "
            className=" px-2  py-3 rounded-sm col-span-8 max-sm:col-span-12 m-1 max-sm:text-center "
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button
            type="submit"
            className="text-white bg-red-700  px-5 py-3  max-sm:col-span-12 rounded-sm col-span-4 m-1"
          >
            Search
          </button>
          {/* </> */}
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
