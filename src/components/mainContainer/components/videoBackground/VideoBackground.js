import useVideoBackground from "./useVideoBackground";

const VideoBackground = ({ movieId }) => {
	const { trailerVideo } = useVideoBackground({ movieId });

	const { key } = trailerVideo;

	return (
		<iframe
			className="w-screen aspect-video"
			src={`https://www.youtube.com/embed/${key}?&autoplay=1&mute=1&controls=0`}
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerPolicy="strict-origin-when-cross-origin"
		></iframe>
	);
};

export default VideoBackground;
