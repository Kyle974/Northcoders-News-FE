import React, { Component } from 'react';
import { postComment } from '../utilities';

class AddComment extends Component {
  state = { commentInput: '' };

  render() {
    return (
      <div>
        {
          <div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                this.submitComment();
              }}
            >
              <input
                value={this.state.commentInput}
                onChange={(event) =>
                  this.setState({ commentInput: event.target.value })
                }
              />
              <button>comment</button>
            </form>
          </div>
        }
      </div>
    );
  }

  componentDidMount() {
    this.setState({ loggedInUser: this.props.loggedInUser });
  }

  submitComment = () => {
    if (this.props.loggedInUser) {
      postComment(
        this.props.article_id,
        this.props.loggedInUser.username,
        this.state.commentInput
      ).then(({ data }) => {
        this.props.showNewComment(data.comment);
        this.setState({ commentInput: '' });
      });
    } else {
      console.log('a bad thing happened....');
    }
  };
}

export default AddComment;
