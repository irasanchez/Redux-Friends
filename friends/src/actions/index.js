import axios from "axios";
export const FETCHING = "FETCHING";
export const FAILURE = "FAILURE";
export const SUCCESS = "SUCCESS";
export const ADD_FRIEND = "ADD_FRIEND";

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

export const addFriend = newFriend => dispatch => {
  return axios
    .post("http://localhost:5000/api/friends", newFriend)
    .then(response => {
      dispatch(addFriendSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const addFriendSuccess = data => {
  return {
    type: ADD_FRIEND,
    payload: {
      id: Math.random(),
      name: data, //console.log out
      age: data,
      email: data
    }
  };
};
