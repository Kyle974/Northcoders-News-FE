import React from 'react';
import ArticleList from './ArticleList';

const Topic = () => {
  return (
    <div>
      <h1>{this.props.slug}</h1>
      <ArticleList urlPath={`?topic=${this.props.slug}`} />;
    </div>
  );
};

export default Topic;
