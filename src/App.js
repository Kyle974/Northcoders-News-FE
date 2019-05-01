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
import LoggedInUser from './Components/LoggedInUser';

class App extends Component {
  state = {
    loggedInUser: null,
    sortBy: 'hottest',
  };

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.loggedInUser && <Login loginUser={this.loginUser} />}
        {this.state.loggedInUser && (
          <LoggedInUser
            loggedInUser={this.state.loggedInUser}
            logoutUser={this.logoutUser}
          />
        )}
        <NavBar />
        <Router>
          <ArticleList path="/articles" default />
          <Article
            path="/articles/:article_id"
            loggedInUser={this.state.loggedInUser}
          />
          <Topics path="/topics" />
          <Users path="/users" />
        </Router>
      </div>
    );
  }

  loginUser = (userData) => {
    this.setState({ loggedInUser: userData });
  };

  logoutUser = () => {
    this.setState({ loggedInUser: null });
  };
}

export default App;
