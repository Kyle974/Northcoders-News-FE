import React from 'react';
import ArticleList from './ArticleList';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to NC-News!</h1>
      </header>
      <ArticleList urlPath="" />
    </div>
  );
};

export default Home;
