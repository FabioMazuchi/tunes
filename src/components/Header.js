import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header data-testid="header-component">
        <nav>
          <ul>
            <Link data-testid="link-to-search" to="/search">
              Search
            </Link>
            <Link data-testid="link-to-favorites" to="/favorites">
              Favorites
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
