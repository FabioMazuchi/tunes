import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>{`Fábio Mazuchi ${new Date().getFullYear()}`}</p>
      </footer>
    );
  }
}

export default Footer;
