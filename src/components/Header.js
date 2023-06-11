import React, { Component } from 'react';
import { GiMusicSpell } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor() {
    super();
    this.state = { name: '', image: null };
  }

  componentDidMount() {
    this.renderUser();
  }

  renderUser = async () => {
    const { name, image } = await getUser();
    this.setState({ name, image });
  }

  render() {
    const { name, image } = this.state;
    return (
      <header data-testid="header-component">
        <Link to="/search">
          <h1>
            Trybetunes
            <span><GiMusicSpell /></span>
          </h1>
        </Link>
        <nav>
          <ul>
            <Link data-testid="link-to-search" to="/search">
              Procurar
            </Link>
            <Link data-testid="link-to-favorites" to="/favorites">
              Favoritas
            </Link>
          </ul>
        </nav>
        <div>
          {name ? (
            <>
              <span>{`Boas vindas, ${name}`}</span>
              {!image ? (
                <Link className="perfil" to="/profile">
                  {name[0]}
                </Link>
              ) : (
                <Link to="/profile">
                  <img src={ image } alt={ name } />
                </Link>
              )}
            </>
          ) : <p>username</p>}
        </div>
      </header>
    );
  }
}

export default Header;
