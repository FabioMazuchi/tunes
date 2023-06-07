import propTypes from 'prop-types';
import React, { Component } from 'react';
import { GiMusicSpell } from 'react-icons/gi';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

const MIN_NOME = 3;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      isDisabled: true,
      logado: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateinputs = this.validateinputs.bind(this);
    this.changeRoute = this.changeRoute.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      () => this.validateinputs(),
    );
  }

  async handleLogin(e) {
    e.preventDefault();
    const { nome } = this.state;
    this.setState({ logado: true });
    await createUser({ name: nome });
    this.changeRoute(e);
  }

  validateinputs() {
    const { nome } = this.state;

    if (nome.length >= MIN_NOME) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  changeRoute(e) {
    e.preventDefault();
    const { history } = this.props;
    history.push('/search');
  }

  render() {
    const { nome, isDisabled, logado } = this.state;
    return (
      <div className="login" data-testid="page-login">
        {logado ? (
          <Loading />
        ) : (
          <>
            <div className="div-login">
              <h1>
                Trybetunes
                <span><GiMusicSpell /></span>
              </h1>
              <ul>
                <li>Pesquise pelo seu artista favorito</li>
                <li>Ouça por 30 segundos as faixas de um álbum</li>
                <li>Confira os nomes das músicas em um álbum</li>
              </ul>
            </div>
            <form className="login">
              <label htmlFor="nome">
                Qual é o seu nome?
                <input
                  data-testid="login-name-input"
                  type="text"
                  name="nome"
                  value={ nome }
                  onChange={ this.handleChange }
                  id="nome"
                />
              </label>
              <button
                data-testid="login-submit-button"
                onClick={ this.handleLogin }
                type="submit"
                disabled={ isDisabled }
              >
                Entrar
              </button>
            </form>
          </>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default Login;
