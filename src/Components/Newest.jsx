import React from 'react';
import ArticleList from './ArticleList';

const Newest = () => {
  return (
    <div>
      <header>
        <h1>Newest</h1>
        <p>The most up to the minute articles on NC-News.</p>
      </header>
      <ArticleList urlPath="?sort_by=created_at" />
    </div>
  );
};

export default Newest;
