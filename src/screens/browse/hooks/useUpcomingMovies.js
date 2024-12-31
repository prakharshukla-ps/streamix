import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "store/reducer/movieSlice";
import { API_OPTIONS } from "utils/constants";

const useUpcomingMovies = () => {
	const dispatch = useDispatch();

	const getUpcomingMovies = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/upcoming?page=1",
			API_OPTIONS
		);

		const moviesData = await response.json();

		dispatch(addUpcomingMovies(moviesData.results));
	};

	useEffect(() => {
		getUpcomingMovies();
	}, []);

	return;
};

export default useUpcomingMovies;
