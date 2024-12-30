import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	const toggleSignInForm = () => {
		setIsSignInForm((prev) => !prev);
	};

	return (
		<>
			<Header />

			<img
				className="absolute dark:brightness-75"
				src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
				alt="cover"
			/>

			<form className="absolute w-1/3 py-14 px-16 bg-black my-28 mx-auto right-0 left-0 text-white rounded-sm bg-opacity-80">
				<h1 className="font-bold text-3xl mb-5">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>

				{!isSignInForm && (
					<input
						type="text"
						placeholder="Full Name"
						className="p-3 my-2 w-full bg-transparent rounded-md border-2 border-gray-500"
					/>
				)}

				<input
					type="text"
					placeholder="Email or mobile number"
					className="p-3 my-2 w-full bg-transparent rounded-md border-2 border-gray-500"
				/>

				<input
					type="password"
					placeholder="Password"
					className="p-3 my-2 w-full bg-transparent rounded-md border-2 border-gray-500"
				/>

				<button className="p-2 my-6 bg-red-700 w-full rounded-md">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>

				<p className="py-5 text-gray-400">
					{isSignInForm ? "New to Streamix?" : "Already registered."} &nbsp;
					<span
						className="text-white cursor-pointer"
						onClick={toggleSignInForm}
					>
						{isSignInForm ? "Sign up now" : "Sign in now"}
					</span>
				</p>
			</form>
		</>
	);
};

export default Login;
