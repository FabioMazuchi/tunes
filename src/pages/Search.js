import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPIs from '../services/searchAlbumsAPI';
import Footer from '../components/Footer';

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
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value },
      () => this.validateinputs());
  }

  handleRequest = async () => {
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

  validateinputs = () => {
    const { artistName } = this.state;

    if (artistName.length >= MIN_NOME) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  render() {
    const {
      artistName,
      isDisabled,
      loadingPesquisa,
      responseApi,
      artisNameShow,
      albuns,
    } = this.state;
    return (
      <div className="search" data-testid="page-search">
        <Header />
        {loadingPesquisa ? (
          <Loading />
        ) : (
          <form className="search">
            <input
              name="artistName"
              data-testid="search-artist-input"
              type="text"
              placeholder="Pesquisar por artista, banda..."
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
          <section className="container">
            {albuns.length === 0 ? (
              <div className="nenhumAlbum">
                <span>Nenhum álbum foi encontrado</span>
              </div>
            ) : (
              <section>
                <h3>{`Resultado de álbuns de ${artisNameShow}`}</h3>
                <div>
                  <div className="albuns">
                    {albuns.map((albun) => (
                      <Link
                        data-testid={ `link-to-album-${albun.collectionId}` }
                        to={ `/album/${albun.collectionId}` }
                        key={ albun.id }
                      >
                        <img
                          src={ albun.artworkUrl100 }
                          alt={ albun.collectionName }
                        />
                        <div>
                          <h4>{`${albun.artistName}`}</h4>
                          <p>{albun.collectionName}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </section>
        )}
        <Footer />
      </div>
    );
  }
}

export default Search;
