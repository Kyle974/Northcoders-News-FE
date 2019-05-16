import React, { Component } from 'react';
import { Link } from '@reach/router';
import { fetchArticles } from '../utilities';
import dayjs from 'dayjs';

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
                  <p>author: {article.author}</p>
                  <p>{article.created_at}</p>
                </div>
              </Link>
            ))}
          </ul>
        )}
      </div>
    );
  }

  componentDidMount() {
    fetchArticles(this.props.urlPath).then(({ data }) =>
      this.setState({ articles: data.articles })
    );
  }
}

export default ArticleList;
