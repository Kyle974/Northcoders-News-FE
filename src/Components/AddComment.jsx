import React, { Component } from 'react';
import Axios from 'axios';

class AddComment extends Component {
  state = { commentInput: '', commentAuthor: 'jessjelly' }; // author is hardcoded for now

  render() {
    return (
      <div>
        {this.state.commentAuthor && (
          <div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                this.submitComment();
              }}
            >
              <input
                onChange={(event) =>
                  this.setState({ commentInput: event.target.value })
                }
              />
              <button>comment</button>
            </form>
          </div>
        )}
      </div>
    );
  }

  // componentDidMount() {

  // }

  submitComment = () => {
    Axios.post(
      `https://ncn2019.herokuapp.com/api/articles/${
        this.props.article_id
      }/comments`,
      {
        author: this.state.commentAuthor,
        body: this.state.commentInput,
      }
    ).then((data) => console.log(data));
  };
}

export default AddComment;
