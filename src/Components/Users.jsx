import React, { Component } from 'react';
import Axios from 'axios';

class Users extends Component {
  state = {
    user: null,
  };
  render() {
    console.log(this.state.user);
    return (
      <div>
        <h1>Contributers</h1>
        <div>users</div>
      </div>
    );
  }
  componentDidMount() {
    Axios.get('https://ncn2019.herokuapp.com/api/users/butter_bridge').then(
      ({ data }) => this.setState({ user: data.user })
    );
  }
}

export default Users;
