import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  addSong,
  getFavoriteSongs,
  removeSong,
} from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      favoritCheck: false,
      // eslint-disable-next-line react/no-unused-state
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addSongFavorite = this.addSongFavorite.bind(this);
    this.removeSongFavorite = this.removeSongFavorite.bind(this);
    this.setObjOnSetState = this.setObjOnSetState.bind(this);
  }

  componentDidMount() {
    this.requestSongs();
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
    if (target.checked) {
      this.addSongFavorite(objFavoriteSong);
    } else {
      this.removeSongFavorite(objFavoriteSong);
    }
  }

  async requestSongs() {
    const { trackId } = this.props;
    const response = await getFavoriteSongs();

    response.forEach((resp) => {
      if (resp.trackId === trackId) {
        this.setState({ favoritCheck: true });
      }
    });
  }

  async removeSongFavorite(obj) {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ loading: true });
    await removeSong(obj);
    // eslint-disable-next-line react/no-unused-state
    this.setState({ loading: false });
  }

  async addSongFavorite(obj) {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ loading: true });
    await addSong(obj);
    // eslint-disable-next-line react/no-unused-state
    this.setState({ loading: false });
  }

  render() {
    const { previewUrl, trackId, track } = this.props;
    const { favoritCheck } = this.state;
    return (
      <div>
        <div className="songsSingle">
          <p>{`Música ${track}`}</p>
          <div>
            <audio data-testid="audio-component" src={ previewUrl } controls>
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
                data-testid={ `checkbox-music-${trackId}` }
              />
              {favoritCheck ? (
                <i className="fas fa-heart" />
              ) : (
                <i className="far fa-heart" />
              )}
            </label>
          </div>
        </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  track: PropTypes.string.isRequired,
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
