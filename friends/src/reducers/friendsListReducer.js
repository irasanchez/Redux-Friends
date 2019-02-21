import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};

export const friendsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        friends: [],
        error: "",
        fetchingFriends: true
      };
    case SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: true,
        friends: [...state.friends, ...action.payload],
        error: ""
      };
    case FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: false,
        friends: [],
        error: action.payload
      };
    default:
      return state;
  }
};
