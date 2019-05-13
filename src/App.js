import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Topics from './Components/Topics';
import Topic from './Components/Topic';
import Users from './Components/Users';
import Article from './Components/Article';
import LoggedInUser from './Components/LoggedInUser';

class App extends Component {
  state = {
    loggedInUser: null,
    sortBy: 'hottest'
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
          <Home path="/" />
          <Article
            path="/articles/:article_id"
            loggedInUser={this.state.loggedInUser}
          />
          <Topics path="/topics" />
          <Topic path="/topics/:slug" />
          <Users path="/users" />
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
