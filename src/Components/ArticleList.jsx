import React, { Component } from 'react';
import { Link } from '@reach/router';
import { fetchArticles } from '../utilities';

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
                <h1>{article.title}</h1>
                <p>author: {article.author}</p>
                <p>{article.created_at}</p>
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
