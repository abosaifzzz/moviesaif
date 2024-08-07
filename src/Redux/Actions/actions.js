// actions.js
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchData = (language) => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=${language}`
    );
    const data = await response.json();
    console.log("API response:", data); // Log the API response
    dispatch(fetchDataSuccess(data.results));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};
