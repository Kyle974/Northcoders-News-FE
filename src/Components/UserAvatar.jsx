import React, { Component } from 'react';
import Axios from 'axios';

class UserAvatar extends Component {
  state = {
    avatar_url: null,
  };
  render() {
    return (
      <div>
        {this.state.avatar_url && (
          <div>
            <img
              src={this.state.avatar_url}
              alt="not found"
              onError={() => {
                this.src =
                  'https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg';
              }}
            />
            {/* 'https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg' */}
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    Axios.get(
      `https://ncn2019.herokuapp.com/api/users/${this.props.username}`
    ).then(({ data }) => this.setState({ avatar_url: data.user.avatar_url }));
  }
}

export default UserAvatar;
