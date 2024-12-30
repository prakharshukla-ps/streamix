import { useSelector } from "react-redux";

const useMainContainer = () => {
	const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

	return { movies };
};

export default useMainContainer;
