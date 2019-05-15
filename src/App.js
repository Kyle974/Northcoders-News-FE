import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import ArticleList from './Components/ArticleList';
import Topics from './Components/Topics';
import Topic from './Components/Topic';
import Users from './Components/Users';
import Article from './Components/Article';
import LoggedInUser from './Components/LoggedInUser';

class App extends Component {
  state = {
    loggedInUser: null
  };

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.loggedInUser && (
          <Login className="userLogin" loginUser={this.loginUser} />
        )}
        {this.state.loggedInUser && (
          <LoggedInUser
            className="userLogin"
            loggedInUser={this.state.loggedInUser}
            logoutUser={this.logoutUser}
          />
        )}
        <NavBar />
        <Router>
          <Home path="/" />
          <ArticleList
            path="articles/hottest"
            urlPath="?sortBy=comment_count"
          />
          <ArticleList path="articles/best" urlPath="?sortBy=votes" />
          <ArticleList path="articles/newest" urlPath="?sortBy=created_at" />
          <Article
            path="/articles/:article_id"
            loggedInUser={this.state.loggedInUser}
          />
          <Topics path="/topics" />
          <Topic path="/topics/:slug" />
          <Users path="/users" user={this.state.loggedInUser} />
        </Router>
      </div>
    );
  }

  loginUser = (userData) => {
    this.setState({ loggedInUser: userData });

    sessionStorage.setItem(
      'loggedInUser',
      JSON.stringify(this.state.loggedInUser)
    );
  };

  logoutUser = () => {
    this.setState({ loggedInUser: null });

    sessionStorage.removeItem('loggedInUser');
  };
}

export default App;
