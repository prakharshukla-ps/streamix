import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "store/reducer/movieSlice";
import { API_OPTIONS } from "utils/constants";

const useVideoBackground = ({ movieId }) => {
	const dispatch = useDispatch();
	const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

	const getMovieVideos = async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
			API_OPTIONS
		);

		const movieVideoData = await response.json();

		const trailerData = movieVideoData.results.filter(
			(video) => video.type === "Trailer"
		);

		const trailer = trailerData.length
			? trailerData[0]
			: movieVideoData.results[0];

		dispatch(addTrailerVideo(trailer));
	};

	useEffect(() => {
		getMovieVideos();
	}, []);

	return { trailerVideo };
};

export default useVideoBackground;
