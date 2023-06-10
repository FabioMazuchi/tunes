import React, { Component } from 'react';
import Header from '../components/Header';

class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = { image: null };
  }

  upload = ({ target: { files } }) => {
    this.setState({
      image: URL.createObjectURL(files[0]),
    });
  }

  render() {
    const { image } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <h1>Profile Edit</h1>
        <form>
          <input
            type="file"
            accept="image/*"
            onChange={ this.upload }
          />
          <img src={ image } alt="oi" />
        </form>
      </div>
    );
  }
}

export default ProfileEdit;
