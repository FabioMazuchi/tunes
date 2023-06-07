import React, { Component } from 'react';
import { GiMusicSpell } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor() {
    super();
    this.state = { userName: '' };
  }

  componentDidMount() {
    this.renderUser();
  }

  renderUser = async () => {
    const obj = await getUser();
    const nome = obj.name;
    this.setState({
      userName: nome,
    });
  }

  render() {
    const { userName } = this.state;
    console.log(userName);
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
          {userName ? (
            <>
              <span>{`Boas vindas, ${userName}`}</span>
              <Link className="perfil" to="/profile">
                {userName[0]}
              </Link>
            </>
          ) : <p>username</p>}
        </div>
      </header>
    );
  }
}

export default Header;
