import React, { Component } from 'react';

class Users extends Component {
  state = {
    user: null
  };
  render() {
    return (
      <div>
        {this.state.user && (
          <div>
            <h1>Contributers{console.log(this.state.user)}</h1>
            <div>users</div>
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    // Axios.get('https://ncn2019.herokuapp.com/api/users/butter_bridge').then(
    //   ({ data }) => this.setState({ user: data.user })
    // );

    this.setState({ user: this.props.loggedInUser });
  }
}

export default Users;
