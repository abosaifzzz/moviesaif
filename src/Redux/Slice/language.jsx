// src/Redux/Slice/language.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: 'en',
    direction: 'ltr',
    translation: {
        movies: 'Movies',
        favourites: 'Favourites',
        login: 'Login',
        register: 'Register',
    },
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage(state, action) {
            const lang = action.payload;
            state.language = lang;
            state.direction = lang === 'ar' ? 'rtl' : 'ltr';
            // Update translations based on selected language
            state.translation = lang === 'ar'
                ? {
                    movies: 'أفلام',
                    favourites: 'المفضلة',
                    login: 'تسجيل الدخول',
                    register: 'تسجيل',
                }
                : {
                    movies: 'Movies',
                    favourites: 'Favourites',
                    login: 'Login',
                    register: 'Register',
                };
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
