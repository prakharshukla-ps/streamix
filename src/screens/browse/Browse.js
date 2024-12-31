import Header from "components/header/Header";
import MainContainer from "components/mainContainer/MainContainer";
import SecondaryContainer from "components/secondaryContainer/SecondaryContainer";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovies";

const Browse = () => {
	useNowPlayingMovies();
	useTopRatedMovies();
	usePopularMovies();
	useUpcomingMovies();

	return (
		<>
			<Header />
			<MainContainer />
			<SecondaryContainer />
		</>
	);
};

export default Browse;
