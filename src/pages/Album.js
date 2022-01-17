import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      artisName: '',
      albumName: '',
    };
    this.callApi = this.callApi.bind(this);
  }

  componentDidMount() {
    this.callApi();
  }

  async callApi() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const response = await getMusics(id);
    this.setState({
      songs: response,
      artisName: response[0].artistName,
      albumName: response[0].collectionName,
    });
  }

  render() {
    const { songs, artisName, albumName } = this.state;
    return (
      <div>
        <Header />
        <div data-testid="page-album">
          <h3 data-testid="artist-name">{artisName}</h3>
          <span data-testid="album-name">{albumName}</span>
          <section>
            {songs
              .filter((song) => song.kind !== undefined)
              .map((song, i) => (
                <MusicCard
                  trackName={ song.trackName }
                  previeUrl={ song.previeUrl }
                  trackId={ song.trackId }
                  key={ i }
                  songs={ songs }
                />
              ))}
          </section>
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  id: PropTypes.string.isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Album;
