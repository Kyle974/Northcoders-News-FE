import React, { Component } from 'react';
import { fetchUser } from '../utilities';

class Login extends Component {
  state = {
    username: 'jessjelly'
  };
  render() {
    console.log(this.state.username);
    return (
      <form className="appLogin" onSubmit={(e) => e.preventDefault()}>
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
    fetchUser(this.state.username).then(({ data }) => {
      this.props.loginUser(data.user);
    });
  };
}

export default Login;
