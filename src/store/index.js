// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import darkModeReducer from "./darkModeSlice";
import languageReducer from "./languageSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedDarkModeReducer = persistReducer(persistConfig, darkModeReducer);
const persistedLanguageReducer = persistReducer(persistConfig, languageReducer);

const store = configureStore({
  reducer: {
    darkMode: persistedDarkModeReducer,
    language: persistedLanguageReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
