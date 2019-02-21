import React from "react";
import { connect } from "react-redux";

import { FriendList } from "./../components";
import { getFriends } from "../actions";

class FriendListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    if (this.props.fetchingFriends) {
      <h2>Getting some friends );</h2>;
    }
    return (
      <div className="FriendsList_wrapper">
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

const mstp = state => {
  console.log(state);
  return {
    friends: state.friendsListReducer.friends,
    fetchingFriends: state.friendsListReducer.fetchingFriends,
    friendsFetched: state.friendsListReducer.friendsFetched,
    error: state.friendsListReducer.error
  };
};

export default connect(
  mstp,
  { getFriends }
)(FriendsListView);
