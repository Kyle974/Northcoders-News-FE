import React, { Component } from 'react';
import { deleteComment } from '../utilities';

class RemoveComment extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.removeComment(this.props.comment)}>
          delete comment
        </button>
      </div>
    );
  }

  removeComment(comment) {
    deleteComment(this.props.comment_id).then((data) =>
      this.props.removeDeletedComment(comment)
    );
  }
}

export default RemoveComment;
