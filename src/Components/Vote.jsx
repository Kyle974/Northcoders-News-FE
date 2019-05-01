import React, { Component } from 'react';
import Axios from 'axios';

class Vote extends Component {
  state = { voteChange: 0 };

  render() {
    return (
      <div>
        <p className="voteCount">
          votes: {this.props.votes + this.state.voteChange}
        </p>
        <button
          className={this.state.voteChange === 1 ? 'voted' : ''}
          onClick={this.upVote}
        >
          upvote
        </button>
        <button
          className={this.state.voteChange === -1 ? 'voted' : ''}
          onClick={this.downVote}
        >
          downvote
        </button>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ votes: this.props.votes });
  }

  upVote = () => {
    if (this.state.voteChange !== 1) {
      Axios.patch(this.props.url, {
        inc_votes: 1,
      }).then((data) => this.setState({ voteChange: 1 }));
    } else {
      Axios.patch(this.props.url, {
        inc_votes: -1,
      }).then((data) => this.setState({ voteChange: 0 }));
    }
  };

  downVote = () => {
    if (this.state.voteChange !== -1) {
      Axios.patch(this.props.url, {
        inc_votes: -1,
      }).then((data) => this.setState({ voteChange: -1 }));
    } else {
      Axios.patch(this.props.url, {
        inc_votes: 1,
      }).then((data) => this.setState({ voteChange: 0 }));
    }
  };
}

export default Vote;
