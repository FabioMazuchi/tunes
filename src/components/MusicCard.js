import React, { Component } from "react";
import { addSong } from "../services/favoriteSongsAPI";
import Loading from "./Loading";

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      favoritCheck: false,
      loading: false,
      objFaforiteSong: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.addSongFavorite = this.addSongFavorite.bind(this);
    this.setObjOnSetState = this.setObjOnSetState.bind(this);
  }

  // componentDidMount() {
  //   this.setObjOnSetsState();
  // }

  handleChange({ target }) {
    const { name, checked } = target;
    this.setState({
      [name]: checked,
    }, () => this.setObjOnSetState(target));
  }

  setObjOnSetState(target) {
    const { songs } = this.props;
    console.log("oi");
    const nameFavoriteSong =
      target.parentNode.parentNode.childNodes[0].innerText;
    const objFavoriteSong = songs.find(
      (song) => song.trackName === nameFavoriteSong
    );
    this.setState({ objFavoriteSong: objFavoriteSong });
    this.addSongFavorite();
  }

  async addSongFavorite() {
    const { objFaforiteSong } = this.state;
    this.setState({ loading: true, favoritCheck: true });
    await addSong(objFaforiteSong);
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
            <audio data-testid="audio-component" src={previewUrl} controls>
              <track kind="captions" />
              <code>audio</code>
            </audio>
            <label>
              Favorita
              <input
                checked={favoritCheck}
                name="favoritCheck"
                onChange={this.handleChange}
                type="checkbox"
                data-testid={`checkbox-music-${trackId}`}
              />
            </label>
          </div>
        )}
      </div>
    );
  }
}

export default MusicCard;
