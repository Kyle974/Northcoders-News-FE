import React from 'react';
import { Link } from '@reach/router';

const NavBar = () => {
  return (
    <div className="appNavBar">
      <nav>
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
        <Link to="/users" className="navBarItem">
          Users
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
