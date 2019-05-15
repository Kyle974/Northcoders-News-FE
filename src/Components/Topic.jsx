import React, { Component } from 'react';
import ArticleList from './ArticleList';

class Topic extends Component {
  render() {
    return <ArticleList urlPath={`?topic=${this.props.slug}`} />;
  }

  componentDidMount() {}
}

export default Topic;
