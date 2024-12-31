import { useSelector } from "react-redux";
import MovieList from "./components/MovieList";

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);

	return (
		movies?.nowPlayingMovies && (
			<div className="bg-black">
				<div className="-mt-60 relative z-20">
					<MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
					<MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
					<MovieList title="Popular Movies" movies={movies.popularMovies} />
					<MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
				</div>
			</div>
		)
	);
};

export default SecondaryContainer;
