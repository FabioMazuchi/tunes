import React, { Component } from "react";
import Header from "../components/Header";
import { getUser } from "../services/userAPI";
import Loading from "../components/Loading";

const MIN_NOME = 2;

class Search extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      loading: true,
      artistName: "",
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateinputs = this.validateinputs.bind(this);
  }

  componentDidMount() {
    this.renderUser();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validateinputs());
  }

  validateinputs() {
    const { artistName } = this.state;

    if (artistName.length >= MIN_NOME) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  async renderUser() {
    const obj = await getUser();
    const nome = obj.name;
    this.setState({
      userName: nome,
      loading: false,
    });
  }

  render() {
    const { userName, loading, artistName, isDisabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <h2 data-testid="header-user-name">{userName}</h2>
        )}
        <form>
          <input
            name="artistName"
            data-testid="search-artist-input"
            type="text"
            placeholder="Pesquisar artista..."
            onChange={this.handleChange}
            value={artistName}
          />
          <button
            disabled={isDisabled}
            data-testid="search-artist-button"
            type="submit"
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
