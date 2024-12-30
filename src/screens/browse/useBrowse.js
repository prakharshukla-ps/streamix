import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "store/reducer/movieSlice";
import { API_OPTIONS } from "utils/constants";

const useBrowse = () => {
	const dispatch = useDispatch();

	const getNowPlayingMovies = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?page=1",
			API_OPTIONS
		);

		const moviesData = await response.json();

		dispatch(addNowPlayingMovies(moviesData.results));
	};

	useEffect(() => {
		getNowPlayingMovies();
	}, []);

	return;
};

export default useBrowse;
