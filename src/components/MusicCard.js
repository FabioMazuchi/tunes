import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      favoritCheck: false,
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addSongFavorite = this.addSongFavorite.bind(this);
    this.setObjOnSetState = this.setObjOnSetState.bind(this);
  }

  handleChange({ target }) {
    const { name, checked } = target;
    this.setState(
      {
        [name]: checked,
      },
      () => this.setObjOnSetState(target),
    );
  }

  setObjOnSetState(target) {
    const { songs } = this.props;
    const testId = Number(target.getAttribute('data-testid').split('-')[2]);
    const objFavoriteSong = songs.find((song) => song.trackId === testId);
    this.addSongFavorite(objFavoriteSong);
  }

  async addSongFavorite(obj) {
    this.setState({ loading: true, favoritCheck: true });
    await addSong(obj);
    this.setState({ loading: false });
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { loading, favoritCheck } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <p>{trackName}</p>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              <code>audio</code>
            </audio>
            <label htmlFor="favoritCheck">
              Favorita
              <input
                checked={ favoritCheck }
                name="favoritCheck"
                onChange={ this.handleChange }
                type="checkbox"
                data-testid={ `checkbox-music-${trackId}` }
              />
            </label>
          </div>
        )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      amgArtistId: PropTypes.number.isRequired,
      artistId: PropTypes.number.isRequired,
      artistName: PropTypes.string.isRequired,
      artistViewUrl: PropTypes.string.isRequired,
      artworkUrl100: PropTypes.string.isRequired,
      artworkUrl60: PropTypes.string.isRequired,
      collectionCensoredName: PropTypes.string.isRequired,
      collectionExplicitness: PropTypes.string.isRequired,
      collectionId: PropTypes.number.isRequired,
      collectionName: PropTypes.string.isRequired,
      collectionPrice: PropTypes.number.isRequired,
      collectionType: PropTypes.string.isRequired,
      collectionViewUrl: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      primaryGenreName: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      trackCount: PropTypes.number.isRequired,
      wrapperType: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MusicCard;
