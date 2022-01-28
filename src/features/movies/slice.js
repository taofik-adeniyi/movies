import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apikey } from "../../common/apis/movieapikey";
import movieapi from "../../common/apis/movieapi";

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const type = "movie";
    try {
      const res = await movieapi.get(
        `/?apikey=${apikey}&s=${term}&type=${type}`
      );
      console.log("the response:", res.data);
      return res.data;
    } catch (e) {
      console.log(e.response);
    }
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const type = "series";
    try {
      const res = await movieapi.get(
        `/?apikey=${apikey}&s=${term}&type=${type}`
      );
      console.log("the response:", res.data);
      return res.data;
    } catch (e) {
      console.log(e.response);
    }
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (imdbID) => {  
    const plot = "full";
    try {
      const res = await movieapi.get(
        `/?apikey=${apikey}&i=${imdbID}&Plot=${plot}`
      );
      console.log("the response:", res.data);
      return res.data;
    } catch (e) {
      console.log(e.response);
    }
  }
);


const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovies: (state, { type, payload }) => {
      state.movies = payload;
    },
    removeSelectedMovieOrShow: (state) => {
        state.selectMovieOrShow = {}
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully", payload);
      return { ...state, selectMovieOrShow: payload };
    },
  },
});

export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
