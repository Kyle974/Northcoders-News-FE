import React, { Component } from 'react';
import { patchVotes } from '../utilities';

class Vote extends Component {
  state = { voteChange: 0, failedVoteAttempt: false };

  render() {
    return (
      <div>
        {this.props.loggedInUser && (
          <div>
            <p className="voteCount">
              votes: {this.props.votes + this.state.voteChange}
            </p>
            <button
              className={this.state.voteChange === 1 ? 'voted' : ''}
              onClick={() => this.handleVote(1)}
            >
              upvote
            </button>
            <button
              className={this.state.voteChange === -1 ? 'voted' : ''}
              onClick={() => this.handleVote(-1)}
            >
              downvote
            </button>
          </div>
        )}
      </div>
    );
  }

  handleVote = (vote) => {
    if (this.state.voteChange !== vote) {
      patchVotes(this.props.path, 1).then((data) =>
        this.setState({ voteChange: vote })
      );
    } else {
      patchVotes(this.props.path, 0 - vote).then((data) =>
        this.setState({ voteChange: 0 })
      );
    }
  };
}

export default Vote;
