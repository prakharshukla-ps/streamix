import React from "react";
import { LOGO, USER_ICON } from "utils/constants";
import useHeader from "./useHeader";

const Header = () => {
	const { user, handleSignOut } = useHeader();

	return (
		<div className="absolute w-screen px-20 py-5 bg-gradient-to-b from-black z-10 flex justify-between items-center">
			<img className="w-44" src={LOGO} alt="logo" />
			{user && (
				<div className="flex gap-5 items-center">
					<p className="text-gray-200 font-bold">Hello, {user?.displayName}</p>
					<img className="w-8 rounded-sm" src={USER_ICON} alt="usericon" />
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
