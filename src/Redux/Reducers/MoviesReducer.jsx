const initialState = {
    movies: [],
    loading: false,
    error: null,
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_MOVIES':
            return {
                ...state,
                movies: action.payload,
                loading: false,
            };
        case 'FETCH_MOVIES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default moviesReducer;
