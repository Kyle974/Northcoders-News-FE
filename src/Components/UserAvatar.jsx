import React, { Component } from 'react';
import { fetchUser } from '../utilities';

class UserAvatar extends Component {
  state = {
    avatar_url: null
  };
  render() {
    return (
      <div>
        {this.state.avatar_url ? (
          <div>
            <img src={this.state.avatar_url} alt="not found" />
          </div>
        ) : (
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg"
              alt="not found"
            />
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    fetchUser(this.props.username)
      .then(({ data: { user } }) =>
        this.setState({ avatar_url: user.avatar_url })
      )
      .catch((data) => {
        console.log(data);
        this.setState({
          avatar_url:
            'https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg'
        });
      });
  }
}

export default UserAvatar;
