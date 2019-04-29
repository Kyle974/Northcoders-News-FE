import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: '',
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
        <button type="submit">login</button>
      </form>
    );
  }
}

export default Login;
