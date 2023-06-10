import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import profile from '../images/profile.png';
import { getUser } from '../services/userAPI';

class Profile extends Component {
  constructor() {
    super();
    this.state = { image: profile, name: '' };
  }

  componentDidMount() {
    this.updateUser();
  }

  updateUser = async () => {
    const { image, name } = await getUser();
    this.setState({ image, name });
  }

  render() {
    const { image, name } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        <main className="profile">
          <h1>Profile</h1>
          <section>
            {!image ? (
              <img src={ profile } alt="Imagem de Perfil" />
            ) : (
              <img src={ image } alt="Imagem de Perfil" />
            )}
            <h2>{name}</h2>
          </section>
          <Link to="/profile/edit">Edit Profile</Link>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Profile;
