import React, { Component } from 'react';
import Axios from 'axios';
import Vote from './Vote';
import AddComment from './AddComment';
// import UserAvatar from './UserAvatar';

class CommentsSection extends Component {
  state = { comments: null }; // author is hardcoded for now

  render() {
    return (
      <div>
        {this.state.comments && (
          <div>
            <AddComment article_id={this.props.article_id} />
            <div>
              {this.state.comments.map((comment) => (
                <div key={comment.comment_id}>
                  {/* <UserAvatar username={comment.author} /> */}
                  <h3>{comment.author}</h3>
                  <p>{comment.body}</p>
                  <Vote
                    votes={comment.votes}
                    url={`https://ncn2019.herokuapp.com/api/comments/${
                      comment.comment_id
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    Axios.get(
      `https://ncn2019.herokuapp.com/api/articles/${
        this.props.article_id
      }/comments`
    ).then(({ data }) => this.setState({ comments: data.comments }));
  }
}

export default CommentsSection;
