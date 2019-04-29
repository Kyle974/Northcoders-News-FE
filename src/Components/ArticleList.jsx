import React, { Component } from 'react';
import { Link } from '@reach/router';
import Axios from 'axios';

class ArticleList extends Component {
  state = { articles: null };
  render() {
    return (
      <div>
        {this.state.articles && (
          <div>
            {this.state.articles.map((article) => (
              <Link
                key={article.article_id}
                to={`/articles/${article.article_id}`}
              >
                <p>{article.title}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    Axios.get('https://ncn2019.herokuapp.com/api/articles').then(({ data }) =>
      this.setState({ articles: data.articles })
    );
  }
}

export default ArticleList;
