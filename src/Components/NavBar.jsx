import React, { Component } from 'react';
import { Link } from '@reach/router';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/articles">Hottest</Link>
          <Link to="/articles">Best</Link>
          <Link to="/articles">Newest</Link>
          <Link to="/topics">Topics</Link>
          <Link to="/users">Users</Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;
