import React from "react";
import { ERROR, LOGO } from "utils/constants";
import useError from "./useError";

const Error = () => {
	const { handleClickHome } = useError();

	return (
		<div className="h-screen overflow-hidden">
			<div
				className="w-screen relative px-10 py-4 bg-black z-10 cursor-pointer"
				onClick={handleClickHome}
			>
				<img className="w-32" src={LOGO} alt="logo" />
			</div>
			<img
				className="w-screen absolute -top-10 dark:brightness-75"
				src={ERROR}
				alt="error"
			/>
			<div className="relative text-white w-1/2 mx-auto text-center mt-32">
				<h3 className="text-6xl font-semibold">Lost Your Way?</h3>
				<p className="text-2xl font-light mt-10 mb-5">
					Sorry, we can't find that page. You'll find lots to explore on the
					home page.
				</p>
				<button
					className="text-lg font-semibold text-black bg-white rounded-sm px-5 py-2"
					onClick={handleClickHome}
				>
					Streamix Home
				</button>
			</div>
		</div>
	);
};

export default Error;
