import React from 'react';
import ArticleList from './ArticleList';

const Hottest = () => {
  return (
    <div>
      <header>
        <h1>Hottest</h1>
        <p>The most dicussed articles on NC-News.</p>
      </header>
      <ArticleList urlPath="?sort_by=comment_count" />
    </div>
  );
};

export default Hottest;
