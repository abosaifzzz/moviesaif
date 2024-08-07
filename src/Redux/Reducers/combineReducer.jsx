import { combineReducers } from 'redux';
import MoviesReducer from "../Reducers/MoviesReducer";
import favoriteArrReducer from './favoriteArrReducer';


export default combineReducers({
    Movies: MoviesReducer,
    favoriteArr: favoriteArrReducer,

});

