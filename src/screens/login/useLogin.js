import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "utils/firebase";
import { addUser } from "store/reducer/userSlice";
import { checkValidData } from "utils/validate";

const useLogin = () => {
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
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(`${errorCode} - ${errorMessage}`);
				});
		}
	};

	return {
		isSignInForm,
		fullNameRef,
		emailRef,
		passwordRef,
		errorMessage,
		handleButtonClick,
		toggleSignInForm,
	};
};

export default useLogin;
