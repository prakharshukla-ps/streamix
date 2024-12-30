import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "./screens/browse/Browse";
import Error from "./screens/error/Error";
import Login from "./screens/login/Login";
import appStore from "./store/appStore";

function App() {
	return (
		<Provider store={appStore}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/browse" element={<Browse />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
