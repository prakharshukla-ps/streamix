import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "store/reducer/movieSlice";
import { API_OPTIONS } from "utils/constants";

const useTopRatedMovies = () => {
	const dispatch = useDispatch();

	const getTopRatedMovies = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/top_rated?page=1",
			API_OPTIONS
		);

		const moviesData = await response.json();

		dispatch(addTopRatedMovies(moviesData.results));
	};

	useEffect(() => {
		getTopRatedMovies();
	}, []);

	return;
};

export default useTopRatedMovies;
