import { useNavigate } from "react-router-dom";

const useError = () => {
	const navigate = useNavigate();

	const handleClickHome = () => {
		navigate("/browse");
	};

	return { handleClickHome };
};

export default useError;
