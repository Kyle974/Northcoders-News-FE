import React, { Component } from 'react';
import Axios from 'axios';

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
      Axios.post(
        `https://ncn2019.herokuapp.com/api/articles/${
          this.props.article_id
        }/comments`,
        {
          author: this.props.loggedInUser.username,
          body: this.state.commentInput,
        }
      ).then(({ data }) => {
        this.props.showNewComment(data.comment);
        this.setState({ commentInput: '' });
      });
      // .then(() => );
    } else {
      console.log('a bad thing happened....');
    }
  };
}

export default AddComment;
