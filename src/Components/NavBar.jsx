import React from "react";
import { Link } from "@reach/router";
import { AppBar, Grid } from "@material-ui/core";

const NavBar = () => {
  return (
    <AppBar position="static" color="default">
      <Grid container justify="space-around">
        <Link to="/" className="navBarItem">
          <strong>Home</strong>
        </Link>
        <Link to="/articles/hottest" className="navBarItem">
          <strong>Hottest</strong>
        </Link>
        <Link to="/articles/best" className="navBarItem">
          <strong>Best</strong>
        </Link>
        <Link to="/articles/newest" className="navBarItem">
          <strong>Newest</strong>
        </Link>
        <Link to="/topics" className="navBarItem">
          <strong>Topics</strong>
        </Link>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
