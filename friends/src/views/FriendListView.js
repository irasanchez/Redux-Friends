import React from 'react';
import {connect} from 'react-redux';

//import actions

class FriendListView extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    //call fetching action this.props.fetching();
  }

  render(){
    //if fetching show loading
    return(
      <div className="FriendsList_wrapper">
      <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

const mstp = state => {
  return {
    friends: 
  }
}