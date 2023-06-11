import React, { Component } from 'react';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import profile from '../images/profile.png';

class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = { image: null, name: '' };
  }

  componentDidMount() {
    this.updateUser();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  updateUser = async () => {
    const { image, name } = await getUser();
    this.setState({ image, name });
  }

  upload = ({ target: { files } }) => {
    this.setState({
      image: URL.createObjectURL(files[0]),
    });
  }

  render() {
    const { image, name } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        {(image === '' || image !== null) ? (
          <main className="profile-edit">
            <h1>Profile Edit</h1>
            <form>
              <label htmlFor="arquivo">
                {image === '' ? (
                  <img src={ profile } alt={ name } />
                ) : (
                  <img src={ image } alt={ name } />
                )}
                <input
                  id="arquivo"
                  type="file"
                  accept="image/*"
                  onChange={ this.upload }
                />
              </label>
            </form>
            <label className="name" htmlFor="name">
              Nome:
              <input
                onChange={ this.handleChange }
                name="name"
                type="text"
                id="name"
                value={ name }
              />
            </label>
            <button type="button">Salvar</button>
          </main>
        ) : (<h3 className="loading">Loading...</h3>)}
      </div>
    );
  }
}

export default ProfileEdit;
