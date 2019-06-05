import React from "react";
import { Link } from "@reach/router";
import { AppBar, Grid } from "@material-ui/core";

const NavBar = () => {
  return (
    <AppBar position="static" color="default">
      <Grid justify="center">
        <Link to="/" className="navBarItem">
          Home
        </Link>
        <Link to="/articles/hottest" className="navBarItem">
          Hottest
        </Link>
        <Link to="/articles/best" className="navBarItem">
          Best
        </Link>
        <Link to="/articles/newest" className="navBarItem">
          Newest
        </Link>
        <Link to="/topics" className="navBarItem">
          Topics
        </Link>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
