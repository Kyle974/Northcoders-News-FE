import React, { Component } from "react";
import Vote from "./Vote";
import AddComment from "./AddComment";
import RemoveComment from "./RemoveComment";
import { fetchComments } from "../utilities";
import UserAvatar from "./UserAvatar";
import { Card, CardContent } from "@material-ui/core";

class CommentsSection extends Component {
  state = {
    comments: null
  };

  render() {
    return (
      <div>
        {this.state.comments && (
          <div>
            <AddComment
              article_id={this.props.article_id}
              showNewComment={this.showNewComment}
              removeDeletedComment={this.removeDeletedComment}
              loggedInUser={this.props.loggedInUser}
            />
            <div>
              {this.state.comments.map((comment) => (
                <Card style={{ display: "flex" }} key={comment.comment_id}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row"
                    }}
                  >
                    <CardContent style={{ width: 150 }}>
                      <UserAvatar username={comment.author} />
                    </CardContent>

                    <CardContent
                      style={{
                        flex: "1 0 auto"
                      }}
                    >
                      <h3>{comment.author}</h3>
                      <p>{comment.body}</p>
                      <Vote
                        votes={comment.votes}
                        path={`comments/${comment.comment_id}`}
                        loggedInUser={this.props.loggedInUser}
                      />

                      {this.props.loggedInUser &&
                        this.props.loggedInUser.username === comment.author && (
                          <RemoveComment
                            comment={comment}
                            removeDeletedComment={this.removeDeletedComment}
                            comment_id={comment.comment_id}
                          />
                        )}
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    fetchComments(this.props.article_id).then(({ data }) =>
      this.setState({ comments: data.comments })
    );
  }

  showNewComment = (newComment) => {
    this.setState({ comments: [newComment, ...this.state.comments] });
  };

  removeDeletedComment = (deletedComment) => {
    this.setState({
      comments: this.state.comments.filter(
        (comment) => comment !== deletedComment
      )
    });
  };
}

export default CommentsSection;
