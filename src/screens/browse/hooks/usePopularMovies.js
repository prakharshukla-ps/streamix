import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "store/reducer/movieSlice";
import { API_OPTIONS } from "utils/constants";

const usePopularMovies = () => {
	const dispatch = useDispatch();

	const getPopularMovies = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/popular?page=1",
			API_OPTIONS
		);

		const moviesData = await response.json();

		dispatch(addPopularMovies(moviesData.results));
	};

	useEffect(() => {
		getPopularMovies();
	}, []);

	return;
};

export default usePopularMovies;
