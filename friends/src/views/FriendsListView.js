import React from "react";
import { connect } from "react-redux";

//import actions

class FriendListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //call fetching action this.props.getFriends();
  }

  render() {
    //if fetching show loading
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
  {
    // getFriends
  }
)(FriendsListView);
