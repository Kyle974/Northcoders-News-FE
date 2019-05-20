import React from 'react';
import ArticleList from './ArticleList';

const Topic = (props) => {
  return (
    <div>
      <h1>{props.slug}</h1>
      <ArticleList urlPath={`?topic=${props.slug}`} />;
    </div>
  );
};

export default Topic;
