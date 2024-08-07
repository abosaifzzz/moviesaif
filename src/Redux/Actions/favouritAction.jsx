export const updateFavorites = (payload) => {
  return {
    type: "UPDATE_FAVORITES",
    payload,
  };
};
export const addFavorite = (movie) => ({
  type: "ADD_FAVORITE",
  payload: movie,
});
export const updateFavoritesArr = (payload) => {
  return {
    type: "UPDATE_FAVORITES_ARR",
    payload,
  };
};

export const removeFavorite = (id) => {
  return {
    type: "REMOVE_FAVORITE",
    payload: id,
  };
};
