import React, { Component } from 'react';

class Users extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.loggedInUser && (
          <div>
            <h1>Contributers</h1>
            <div>users</div>
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {}
}

export default Users;
