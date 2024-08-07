const initialState = [];

const favoriteArrReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            return [...state, action.payload];

        case "UPDATE_FAVORITES":
            return state.map(movie =>
                movie.id === action.payload.id
                    ? { ...movie, quantity: action.payload.quantity }
                    : movie
            );

        case "UPDATE_FAVORITES_ARR":
            return action.payload;

        case "REMOVE_FAVORITE":
            return state.filter(movie => movie.id !== action.payload);

        default:
            return state;
    }
};

export default favoriteArrReducer;
