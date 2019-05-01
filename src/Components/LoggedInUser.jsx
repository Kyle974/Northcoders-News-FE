import React, { Component } from 'react';

class LoggedInUser extends Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.loggedInUser.username}!</p>
        <button onClick={this.removeUserInfo}>logout</button>
      </div>
    );
  }

  removeUserInfo = () => {
    this.props.logoutUser();
  };
}

export default LoggedInUser;
