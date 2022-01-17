import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';
import searchAlbumsAPIs from '../services/searchAlbumsAPI';

const MIN_NOME = 2;
const INITIAL_STATE = {
  userName: '',
  loading: true,
  artistName: '',
  isDisabled: true,
  loadingPesquisa: false,
  responseApi: false,
  artisNameShow: '',
  albuns: [],
};

class Search extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.validateinputs = this.validateinputs.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
  }

  componentDidMount() {
    this.renderUser();
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

  async handleRequest() {
    const { artistName } = this.state;
    this.setState({
      artistName: '',
      loadingPesquisa: true,
      responseApi: false,
      artisNameShow: artistName,
    });
    const response = await searchAlbumsAPIs(artistName);
    this.setState({
      loadingPesquisa: false,
      responseApi: true,
      albuns: response,
    });
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
    const {
      userName,
      loading,
      artistName,
      isDisabled,
      loadingPesquisa,
      responseApi,
      artisNameShow,
      albuns,
    } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <h2 data-testid="header-user-name">{userName}</h2>
        )}
        {loadingPesquisa ? (
          <Loading />
        ) : (
          <form>
            <input
              name="artistName"
              data-testid="search-artist-input"
              type="text"
              placeholder="Pesquisar artista..."
              onChange={ this.handleChange }
              value={ artistName }
            />
            <button
              disabled={ isDisabled }
              data-testid="search-artist-button"
              type="reset"
              onClick={ this.handleRequest }
            >
              Pesquisar
            </button>
          </form>
        )}
        {responseApi && (
          <section>
            {albuns.length === 0 ? (
              <span>Nenhum álbum foi encontrado</span>
            ) : (
              <section>
                <h3>{`Resultado de álbuns de: ${artisNameShow}`}</h3>
                <div className="albuns">
                  {albuns.map((albun, i) => (
                    <div key={ albun.id }>
                      <img
                        src={ albun.artworkUrl100 }
                        alt={ albun.collectionName }
                      />
                      <h5>
                        Álbum:
                        {i + 1}
                      </h5>
                      <p>
                        Artista:
                        {albun.artistName}
                      </p>
                      <p>
                        Album:
                        {albun.collectionName}
                      </p>
                      <Link
                        data-testid={ `link-to-album-${albun.collectionId}` }
                        to={ `/album/${albun.collectionId}` }
                      >
                        Detalhes
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </section>
        )}
      </div>
    );
  }
}

export default Search;
