import React from 'react';
import ArticleList from './ArticleList';

const Best = () => {
  return (
    <div>
      <header>
        <h1>Best</h1>
        <p>The most upvoted articles on NC-News.</p>
      </header>
      <ArticleList urlPath="?sort_by=votes" />
    </div>
  );
};

export default Best;
