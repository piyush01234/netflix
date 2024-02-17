import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: null,
    popular: null,
    topRated: null,
    upcoming: null,
    video: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    addVideo: (state, action) => {
      state.video = action.payload;
    },
  },
});
export default movieSlice.reducer;
export const { addNowPlaying, addPopular, addTopRated, addUpcoming, addVideo } =
  movieSlice.actions;
