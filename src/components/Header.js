import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/streamix_logo.png";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();

	const user = useSelector((store) => store.user);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				navigate("/error");
			});
	};
	return (
		<div className="absolute w-screen px-40 py-5 bg-gradient-to-b from-black z-10 flex justify-between items-center">
			<img className="w-44" src={logo} alt="logo" />
			{user && (
				<div className="flex gap-5 items-center">
					<p className="text-gray-900 font-bold">Hello, {user?.displayName}</p>
					<img
						className="w-8 rounded-sm"
						src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
						alt="usericon"
					/>
					<button
						onClick={handleSignOut}
						className="text-white hover:underline pl-10"
					>
						Sign out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
