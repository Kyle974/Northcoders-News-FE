import React, { Component } from 'react';
import Axios from 'axios';

class Login extends Component {
  state = {
    username: 'jessjelly'
  };
  render() {
    console.log(this.state.username);
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <label>username:</label>
        <input
          onChange={(event) => this.setState({ username: event.target.value })}
          value={this.state.username}
        />
        <button onClick={this.submitUserInfo} type="submit">
          login
        </button>
      </form>
    );
  }
  submitUserInfo = () => {
    Axios.get(
      `https://ncn2019.herokuapp.com/api/users/${this.state.username}`
    ).then(({ data }) => {
      this.props.loginUser(data.user);
    });
  };
}

export default Login;
