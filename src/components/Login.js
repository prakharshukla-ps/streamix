import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { checkValidData } from "../utils/validate";
import Header from "./Header";

const Login = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	const emailRef = useRef("");
	const passwordRef = useRef("");
	const fullNameRef = useRef("");

	const toggleSignInForm = () => {
		setIsSignInForm((prev) => !prev);
		setErrorMessage("");

		if (emailRef.current) emailRef.current.value = "";
		if (passwordRef.current) passwordRef.current.value = "";
		if (fullNameRef.current) fullNameRef.current.value = "";
	};

	const handleButtonClick = () => {
		const message = checkValidData(
			emailRef.current.value,
			passwordRef.current.value,
			!isSignInForm ? fullNameRef.current.value : null
		);

		setErrorMessage(message);

		if (message) return;

		if (!isSignInForm) {
			createUserWithEmailAndPassword(
				auth,
				emailRef.current.value,
				passwordRef.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(user, {
						displayName: fullNameRef.current.value,
					})
						.then(() => {
							const { uid, email, displayName, accessToken } = auth.currentUser;
							dispatch(addUser({ uid, email, displayName, accessToken }));
							navigate("/browse");
						})
						.catch((error) => {
							setErrorMessage(errorMessage);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(`${errorCode} - ${errorMessage}`);
				});
		} else {
			signInWithEmailAndPassword(
				auth,
				emailRef.current.value,
				passwordRef.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
					navigate("/browse");

					console.log(user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(`${errorCode} - ${errorMessage}`);
				});
		}
	};

	return (
		<>
			<Header />

			<img
				className="absolute dark:brightness-75"
				src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
				alt="cover"
			/>

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
