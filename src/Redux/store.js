import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../Redux/Reducers/MoviesReducer";
import language from "./Slice/language";
import rootReducer from "./Reducers/combineReducer";
// import languageReducer from "./Reducers/languageReducer"; // Assuming you have a language reducer

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    language: language,
    reducer: rootReducer,
  },
});

export default store;
// src/Redux/store.js
