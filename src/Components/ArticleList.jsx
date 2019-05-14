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
                <p>{article.title}</p>
              </Link>
            ))}
          </ul>
        )}
      </div>
    );
  }

  componentDidMount() {
    // Axios.get(`https://ncn2019.herokuapp.com/api${this.props.url}`).then(
    //   ({ data }) => this.setState({ articles: data.articles })
    // );

    fetchArticles(this.props.url).then(({ data }) =>
      this.setState({ articles: data.articles })
    );
  }
}

export default ArticleList;
