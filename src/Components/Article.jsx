import React, { Component } from 'react';
import Axios from 'axios';
import UserAvatar from './UserAvatar';
import Vote from './Vote';
import CommentsSection from './CommentsSection';

class Article extends Component {
  state = { article: null };

  render() {
    return (
      <div>
        {this.state.article && (
          <div>
            <UserAvatar username={this.state.article.author} />
            <h1>{this.state.article.title}</h1>
            <h2>by {this.state.article.author}</h2>
            <p>{this.state.article.body}</p>
            <Vote
              votes={this.state.article.votes}
              url={`https://ncn2019.herokuapp.com/api/articles/${
                this.state.article.article_id
              }`}
            />
            <CommentsSection
              article_id={this.props.article_id}
              loggedInUser={this.props.loggedInUser}
            />
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    Axios.get(
      `https://ncn2019.herokuapp.com/api/articles/${this.props.article_id}`
    ).then(({ data }) => this.setState({ article: data.article }));
  }
}

export default Article;
