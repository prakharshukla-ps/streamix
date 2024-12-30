import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";

const persistConfig = {
	key: "streamix",
	storage,
};

const rootReducer = combineReducers({
	user: userReducer,
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
