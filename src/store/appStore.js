import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import moviesReducer from "./reducer/movieSlice";
import userReducer from "./reducer/userSlice";

const persistConfig = {
	key: "streamix",
	storage,
};

const rootReducer = combineReducers({
	user: userReducer,
	movies: moviesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const appStore = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(appStore);

export default appStore;
