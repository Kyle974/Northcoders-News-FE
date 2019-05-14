import React, { Component } from 'react';
import Axios from 'axios';

class DeleteComment extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.deleteComment(this.props.url, this.props.comment)}
        >
          delete comment
        </button>
      </div>
    );
  }

  deleteComment(url, comment) {
    Axios.delete(url).then((data) => this.props.removeDeletedComment(comment));
  }
}

export default DeleteComment;
