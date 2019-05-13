import React, { Component } from 'react';
import ArticleList from './ArticleList';

class Home extends Component {
  render() {
    return <ArticleList url="/articles" />;
  }
}

export default Home;
