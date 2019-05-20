import React, { Component } from 'react';
import { Link, navigate } from '@reach/router';
import { fetchArticles } from '../utilities';
import moment from 'moment';

class ArticleList extends Component {
  state = { articles: null };

  render() {
    return (
      <div>
        {this.state.articles && (
          <ul>
            {this.state.articles.map((article) => (
              <Link
                key={article.article_id}
                to={`/articles/${article.article_id}`}
              >
                <div className="article">
                  <h2>{article.title}</h2>
                  <p>
                    <strong>topic: </strong> {article.topic}
                  </p>
                  <p>
                    <strong> author: </strong>
                    {article.author}
                    <strong> created: </strong>
                    {moment(article.created_at)
                      .startOf('day')
                      .fromNow()}
                  </p>

                  <p>
                    <strong>votes: </strong> {article.votes}
                    <strong> comments: </strong> {article.comment_count}
                  </p>
                  <p />
                </div>
              </Link>
            ))}
          </ul>
        )}
      </div>
    );
  }

  componentDidMount() {
    fetchArticles(this.props.urlPath)
      .then(({ data }) => this.setState({ articles: data.articles }))
      .catch(({ response: { data, status } }) => {
        navigate('/error', {
          replace: true,
          state: { from: '/', msg: data.msg, status }
        });
      });
  }
}

export default ArticleList;
