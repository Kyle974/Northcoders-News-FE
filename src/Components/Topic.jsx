import React, { Component } from 'react';
import ArticleList from './ArticleList';

class Topic extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.slug}</h1>
        <ArticleList urlPath={`?topic=${this.props.slug}`} />;
      </div>
    );
  }

  componentDidMount() {}
}

export default Topic;
