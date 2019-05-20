import React, { Component } from 'react';
import { navigate } from '@reach/router';
import UserAvatar from './UserAvatar';
import Vote from './Vote';
import CommentsSection from './CommentsSection';
import { fetchArticles } from '../utilities';
import moment from 'moment';

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
            <p>
              {moment(this.state.article.created_at)
                .startOf('day')
                .fromNow()}
            </p>
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
    fetchArticles(this.props.article_id)
      .then(({ data }) => this.setState({ article: data.article }))
      .catch(({ response: { data, status } }) => {
        navigate('/error', {
          replace: true,
          state: { from: '/', msg: data.msg, status }
        });
      });
  }
}

export default Article;
