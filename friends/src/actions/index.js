import axios from "axios";
export const FETCHING = "FETCHING";
export const FAILURE = "FAILURE";
export const SUCCESS = "SUCCESS";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("http://localhost:5000/api/friends")
    .then(({ data }) => {
      console.log({ data });
      dispatch({
        type: SUCCESS,
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: FAILURE,
        payload: error
      });
    });
};
