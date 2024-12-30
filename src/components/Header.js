import React from "react";
import logo from "../assets/streamix_logo.png";

const Header = () => {
	return (
		<div className="absolute px-40 py-5 bg-gradient-to-b from-black z-10">
			<img className="w-44" src={logo} alt="logo" />
		</div>
	);
};

export default Header;
