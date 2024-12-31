import LOGO from "assets/streamix_logo.png";

const COVER =
	"https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg";

const ERROR =
	"https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png";

const USER_ICON =
	"https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

const API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: process.env.REACT_APP_API_AUTHORIZATION_TOKEN,
	},
};

export { API_OPTIONS, COVER, ERROR, IMG_CDN_URL, LOGO, USER_ICON };
