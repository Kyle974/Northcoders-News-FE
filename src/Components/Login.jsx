import React, { Component } from 'react';
import { getUser } from '../utilities';
// import Axios from 'axios';

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
    getUser(this.state.username).then(({ data }) => {
      this.props.loginUser(data.user);
    });
  };
}

export default Login;
