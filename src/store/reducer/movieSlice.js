import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		topRatedMovies: null,
		popularMovies: null,
		upcomingMovies: null,
		trailerVideo: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addUpcomingMovies: (state, action) => {
			state.upcomingMovies = action.payload;
		},
		addTrailerVideo: (state, action) => {
			state.trailerVideo = action.payload;
		},
	},
});

export const {
	addNowPlayingMovies,
	addTopRatedMovies,
	addPopularMovies,
	addUpcomingMovies,
	addTrailerVideo,
} = movieSlice.actions;

export default movieSlice.reducer;
