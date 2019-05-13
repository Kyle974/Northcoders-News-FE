import React, { Component } from 'react';
import Axios from 'axios';
import ArticleList from './ArticleList';

class Topic extends Component {
  state = { articles: null };

  render() {
    return <ArticleList url={`/articles?topic=${this.props.slug}`} />;
  }

  componentDidMount() {
    Axios.get(
      `https://ncn2019.herokuapp.com/api/articles?topic=${this.props.slug}`
    ).then(({ data }) => this.setState({ articles: data.articles }));
  }
}

export default Topic;
