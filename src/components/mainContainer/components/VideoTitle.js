import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">
			<h1 className="text-5xl font-medium">{title}</h1>

			<p className="py-6 text-md w-1/3">{overview}</p>

			<div>
				<button className="border-2 border-black bg-white text-black py-1 px-5 rounded-md text-md hover:opacity-80">
					▶ Play
				</button>

				<button className="border-2 border-gray-500 bg-gray-500 py-1 px-5 rounded-md text-md opacity-80 mx-2 hover:opacity-50">
					ⓘ More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
