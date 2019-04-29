import React, { Component } from 'react';
import Axios from 'axios';

class Vote extends Component {
  state = { voteChange: 0, upVoted: false, downVoted: false };

  render() {
    return (
      <div>
        <p className="voteCount">
          votes: {this.props.votes + this.state.voteChange}
        </p>
        <button
          className={this.state.upVoted ? 'voted' : ''}
          onClick={this.upVote}
        >
          upvote
        </button>
        <button
          className={this.state.downVoted ? 'voted' : ''}
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
    if (!this.state.upVoted) {
      Axios.patch(this.props.url, {
        inc_votes: 1,
      }).then((data) =>
        this.setState({ voteChange: 1, upVoted: true, downVoted: false })
      );
    } else {
      Axios.patch(this.props.url, {
        inc_votes: -1,
      }).then((data) =>
        this.setState({ voteChange: 0, upVoted: false, downVoted: false })
      );
    }
  };

  downVote = () => {
    if (!this.state.downVoted) {
      Axios.patch(this.props.url, {
        inc_votes: -1,
      }).then((data) =>
        this.setState({ voteChange: -1, downVoted: true, upVoted: false })
      );
    } else {
      Axios.patch(this.props.url, {
        inc_votes: 1,
      }).then((data) =>
        this.setState({ voteChange: 0, downVoted: false, upVoted: false })
      );
    }
  };
}

export default Vote;
