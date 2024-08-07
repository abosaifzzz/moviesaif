import axios from 'axios';

export const FetchMovies = ({ language, page }) => async (dispatch) => {
    const api_key = '592d5558fe91383c9979c4a7c357bfee';

    dispatch({ type: 'FETCH_MOVIES_REQUEST' });

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=${page}`);
        dispatch({
            type: 'FETCH_MOVIES',
            payload: response.data.results,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_MOVIES_FAILURE',
            error: error.message,
        });
    }
};
