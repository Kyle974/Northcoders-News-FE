import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Topics from './Components/Topics';
import Users from './Components/Users';
import ArticleList from './Components/ArticleList';
import Article from './Components/Article';

class App extends Component {
  state = {
    loggedInUser: null,
    sortBy: 'hottest',
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Login />
        <NavBar />
        <Router>
          <ArticleList default />
          <Article path="/articles/:article_id" />
          <Topics path="/topics" />
          <Users path="/users" />
        </Router>
      </div>
    );
  }
}

export default App;
