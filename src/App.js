import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Title from "./Components/Title";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Hottest from "./Components/Hottest";
import Best from "./Components/Best";
import Newest from "./Components/Newest";
import Topics from "./Components/Topics";
import Topic from "./Components/Topic";
import User from "./Components/User";
import Article from "./Components/Article";
import LoggedInUser from "./Components/LoggedInUser";
import NotFound from "./Components/NotFound";
import Error from "./Components/Error";

class App extends Component {
  state = {
    loggedInUser: null
  };

  render() {
    return (
      <div className="App">
        <header className="appHeader">
          <Title />
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
        </header>
        <NavBar />
        <Router className="appBody">
          <Home path="/" />
          <Hottest path="articles/hottest" />
          <Best path="articles/best" />
          <Newest path="articles/newest" />
          <Article
            path="/articles/:article_id"
            loggedInUser={this.state.loggedInUser}
          />
          <Topics path="/topics" />
          <Topic path="/topics/:slug" />
          <User path="/user" user={this.state.loggedInUser} />
          <NotFound path="/*" />
          <Error path="/error" />
        </Router>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      loggedInUser: JSON.parse(sessionStorage.getItem("loggedInUser"))
    });
  }

  loginUser = (userData) => {
    this.setState({ loggedInUser: userData });

    sessionStorage.setItem(
      "loggedInUser",
      JSON.stringify(this.state.loggedInUser)
    );
  };

  logoutUser = () => {
    this.setState({ loggedInUser: null });

    sessionStorage.removeItem("loggedInUser");
  };
}

export default App;
