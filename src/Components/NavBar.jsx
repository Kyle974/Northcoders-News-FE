import React, { Component } from 'react';
import { Link } from '@reach/router';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/articles/hottest">Hottest</Link>
          <Link to="/articles/best">Best</Link>
          <Link to="/articles/newest">Newest</Link>
          <Link to="/topics">Topics</Link>
          <Link to="/users">Users</Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;
