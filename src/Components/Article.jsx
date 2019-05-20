import React, { Component } from 'react';
import UserAvatar from './UserAvatar';
import Vote from './Vote';
import CommentsSection from './CommentsSection';
import { fetchArticles } from '../utilities';

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
            <p>{this.state.article.created_at}</p>
            <p>{this.state.article.body}</p>
            <Vote
              votes={this.state.article.votes}
              path={`articles/${this.state.article.article_id}`}
              loggedInUser={this.props.loggedInUser}
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
    fetchArticles(this.props.article_id).then(({ data }) =>
      this.setState({ article: data.article })
    );
  }
}

export default Article;
