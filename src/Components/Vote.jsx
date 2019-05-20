import React, { Component } from 'react';
import { patchVotes } from '../utilities';

class Vote extends Component {
  state = { voteChange: 0 };

  render() {
    return (
      <div>
        {this.props.loggedInUser && (
          <div>
            <p className="voteCount">
              votes: {this.props.votes + this.state.voteChange}
            </p>
            <button
              // className={this.state.voteChange === 1 ? 'voted' : ''}
              onClick={() => this.handleVote(1)}
              disabled={this.state.voteChange === 1}
            >
              upvote
            </button>
            <button
              // className={this.state.voteChange === -1 ? 'voted' : ''}
              onClick={() => this.handleVote(-1)}
              disabled={this.state.voteChange === -1}
            >
              downvote
            </button>
          </div>
        )}
      </div>
    );
  }

  handleVote = (vote) => {
    if (this.state.voteChange !== vote || 0) {
      this.setState({ voteChange: vote });
      patchVotes(this.props.path, vote).then((data) =>
        this.setState({ voteChange: vote })
      );
    } else {
      this.setState({ voteChange: 0 - vote });
      patchVotes(this.props.path, 0 - vote).then((data) =>
        this.setState({ voteChange: 0 })
      );
    }
  };

  // upVote = () => {
  //   if (this.state.voteChange !== 1 || 0) {
  //     patchVotes(this.props.path, 1).then((data) =>
  //       this.setState({ voteChange: 1 })
  //     );
  //   } else {
  //     patchVotes(this.props.path, -1).then((data) =>
  //       this.setState({ voteChange: 0 })
  //     );
  //   }
  // };

  // downVote = () => {
  //   if (this.state.voteChange !== -1) {
  //     patchVotes(this.props.path, -1).then((data) =>
  //       this.setState({ voteChange: -1 })
  //     );
  //   } else {
  //     patchVotes(this.props.path, 1).then((data) =>
  //       this.setState({ voteChange: 0 })
  //     );
  //   }
  // };
}

export default Vote;
