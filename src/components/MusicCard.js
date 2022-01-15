import React, { Component } from "react";

class MusicCard extends Component {
  render() {
    const { trackName, previewUrl } = this.props;
    return (
      <div>
        <div>
          <p>{trackName}</p>
          <audio data-testid="audio-component" src={previewUrl} controls>
            <track kind="captions" />
            <code>audio</code>
          </audio>
        </div>
      </div>
    );
  }
}

export default MusicCard;
