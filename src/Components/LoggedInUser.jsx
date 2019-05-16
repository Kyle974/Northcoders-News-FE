import React, { Component } from 'react';

class LoggedInUser extends Component {
  render() {
    return (
      <div className="appLogin">
        <div>
          Welcome {this.props.loggedInUser.username}!
          <button onClick={this.removeUserInfo}>logout</button>
        </div>
      </div>
    );
  }

  removeUserInfo = () => {
    this.props.logoutUser();
  };
}

export default LoggedInUser;
