import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoritCheck: true,
      favSongs: [],
      loading: false,
    };
    this.removeSongFavorite = this.removeSongFavorite.bind(this);
    this.getFav = this.getFav.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setObjOnSetState = this.setObjOnSetState.bind(this);
  }

  componentDidMount() {
    this.getFav();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.favoritCheck) {
      this.getFav();
    }
  }

  handleChange({ target }) {
    const { name, checked } = target;
    this.setState(
      {
        [name]: checked,
      },
      this.setObjOnSetState(target),
    );
  }

  async getFav() {
    this.setState({ loading: true });
    this.setState(
      {
        favSongs: await getFavoriteSongs(),
      },
      () => this.setState({ loading: false }),
    );
  }

  setObjOnSetState(target) {
    const { favSongs } = this.state;
    const testId = Number(target.getAttribute('data-testid').split('-')[2]);
    const objFavoriteSong = favSongs.find((song) => song.trackId === testId);
    this.removeSongFavorite(objFavoriteSong);
  }

  async removeSongFavorite(obj) {
    this.setState({ loading: true });
    await removeSong(obj);
    this.setState({ loading: false, favoritCheck: true });
  }

  render() {
    const { favSongs, favoritCheck, loading, trackId } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        { favSongs.length === 0 && '' }
        { loading ? (
          <Loading />
        ) : (
          <div className="favorites">
            <h1>Músicas Favoritas</h1>
            {favSongs.map((song) => (
              <div className="songsSingle" key={ song.trackId }>
                <img src={ song.artworkUrl100 } alt={ song.trackName } />
                <div>
                  <audio
                    data-testid="audio-component"
                    src={ song.previewUrl }
                    controls
                  >
                    <track kind="captions" />
                    <code>audio</code>
                  </audio>
                  <label htmlFor={ trackId }>
                    <input
                      id={ trackId }
                      checked={ favoritCheck }
                      name="favoritCheck"
                      onChange={ this.handleChange }
                      type="checkbox"
                      data-testid={ `checkbox-music-${song.trackId}` }
                    />
                    {favoritCheck ? (
                      <i className="fas fa-heart" />
                    ) : (
                      <i className="far fa-heart" />
                    )}
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default Favorites;
