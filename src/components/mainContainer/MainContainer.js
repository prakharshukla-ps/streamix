import React from "react";
import VideoBackground from "./components/videoBackground/VideoBackground";
import VideoTitle from "./components/VideoTitle";
import useMainContainer from "./useMainContainer";

const MainContainer = () => {
	const { movies } = useMainContainer();

	if (!movies) return;

	const mainMovie = movies[0];

	const { original_title, overview, id } = mainMovie;

	return (
		<>
			<VideoTitle title={original_title} overview={overview} />
			<VideoBackground movieId={id} />
		</>
	);
};

export default MainContainer;
