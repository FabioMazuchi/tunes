import propTypes from 'prop-types';
import React, { Component } from 'react';
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
      <div data-testid="page-login">
        {logado ? (
          <Loading />
        ) : (
          <form className="login">
            <input
              data-testid="login-name-input"
              type="text"
              name="nome"
              placeholder="Nome"
              value={ nome }
              onChange={ this.handleChange }
            />
            <button
              data-testid="login-submit-button"
              onClick={ this.handleLogin }
              type="submit"
              disabled={ isDisabled }
            >
              Entrar
            </button>
          </form>
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
