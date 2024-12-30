import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, accessToken } = user;
				dispatch(addUser({ uid, email, displayName, accessToken }));
			} else {
				dispatch(removeUser());
			}
		});
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/browse" element={<Browse />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Body;
