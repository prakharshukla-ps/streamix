import React from "react";
import Header from "components/header/Header";
import { COVER } from "utils/constants";
import useLogin from "./useLogin";

const Login = () => {
	const {
		isSignInForm,
		fullNameRef,
		emailRef,
		passwordRef,
		errorMessage,
		handleButtonClick,
		toggleSignInForm,
	} = useLogin();

	return (
		<>
			<Header />

			<img className="absolute dark:brightness-75" src={COVER} alt="cover" />

			<form
				className="absolute w-1/3 py-14 px-16 bg-black my-28 mx-auto right-0 left-0 text-white rounded-sm bg-opacity-80"
				onSubmit={(event) => event.preventDefault()}
			>
				<h1 className="font-bold text-3xl mb-5">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>

				{!isSignInForm && (
					<input
						type="text"
						ref={fullNameRef}
						placeholder="Full Name"
						className="p-3 my-2 w-full bg-transparent rounded-md border-2 border-gray-500"
					/>
				)}

				<input
					type="text"
					ref={emailRef}
					placeholder="Email"
					className="p-3 my-2 w-full bg-transparent rounded-md border-2 border-gray-500"
				/>

				<input
					type="password"
					ref={passwordRef}
					placeholder="Password"
					className="p-3 my-2 w-full bg-transparent rounded-md border-2 border-gray-500"
				/>

				<p className="text-red-500 text-lg py-2">{errorMessage}</p>

				<button
					className="p-2 my-6 bg-red-700 w-full rounded-md"
					onClick={handleButtonClick}
				>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>

				<p className="py-5 text-gray-400">
					{isSignInForm ? "New to Streamix?" : "Already registered."} &nbsp;
					<span
						className="text-white cursor-pointer hover:underline"
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
