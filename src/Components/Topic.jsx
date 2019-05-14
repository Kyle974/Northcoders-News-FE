import React, { Component } from 'react';
import Axios from 'axios';
import ArticleList from './ArticleList';

class Topic extends Component {
  render() {
    return <ArticleList url={`?topic=${this.props.slug}`} />;
  }

  componentDidMount() {}
}

export default Topic;
