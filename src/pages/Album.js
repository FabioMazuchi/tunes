import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      artisName: '',
      albumName: '',
      loading: false,
    };
    this.callApi = this.callApi.bind(this);
  }

  componentDidMount() {
    this.callApi();
  }

  async callApi() {
    this.setState({ loading: true });
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
      imgAlbum: response[0].artworkUrl100,
    });
    this.setState({ loading: false });
  }

  render() {
    const { songs, artisName, albumName, imgAlbum, loading } = this.state;
    return (
      <div>
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <div data-testid="page-album" className="albumTracks">
            <section className="tituloImagem">
              <img src={ imgAlbum } alt="imagem" />
              <h3 data-testid="artist-name">{ artisName }</h3>
              <h4 data-testid="album-name">{ albumName }</h4>
            </section>
            <section className="containerSongs">
              {songs
                .filter((song) => song.kind !== undefined)
                .map((song, i) => (
                  <MusicCard
                    track={ i + 1 }
                    previewUrl={ song.previewUrl }
                    trackId={ song.trackId }
                    key={ song.trackId }
                    songs={ songs }
                  />
                ))}
            </section>
          </div>
        )}
        <Footer />
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
