import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGpt: false,
    gptMovies:null,
    movieNames:null
  },
  reducers: {
    toggelGpt: (state, ation) => {
      state.isGpt = !state.isGpt;
    },
    addGptMovies:(state,action)=>{
     const {moviesResult,movieNames}=action.payload
        state.gptMovies=moviesResult
        state.movieNames=movieNames

    }
  },
});

export default gptSlice.reducer;
export const { toggelGpt ,addGptMovies} = gptSlice.actions;
