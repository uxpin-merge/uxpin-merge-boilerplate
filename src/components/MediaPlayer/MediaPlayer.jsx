import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { isUndefined } from 'lodash';

class MediaPlayer extends Component {
  constructor(props) {
    super(props);

    this.defProps = MediaPlayer.defaultProps;

    this.state = {
      isPlaying: this.props.playing,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { playing } = props;

    if (playing === state.playing) {
      return null;
    }

    return {
      isPlaying: playing,
    };
  }

  render() {
    const {
      controls,
      height,
      light,
      loop,
      muted,
      onDuration,
      onEnded,
      onPause,
      onPlay,
      onReady,
      onSeek,
      onStart,
      playbackRate,
      style,
      url,
      volume,
      width,
    } = this.props;
    const { isPlaying } = this.state;

    const propsWithDefaults = {
      controls: isUndefined(controls) ? this.defProps.controls : controls,
      light: isUndefined(light) ? this.defProps.light : light,
      loop: isUndefined(loop) ? this.defProps.loop : loop,
      muted: isUndefined(muted) ? this.defProps.muted : muted,
      onDuration,
      onEnded,
      onPause,
      onPlay,
      onReady,
      onSeek,
      onStart,
      playbackRate: isUndefined(playbackRate) ? this.defProps.playbackRate : playbackRate,
      style,
      url: url || this.defProps.url,
    };

    const h = `${height || this.defProps.height}px`;
    const w = `${width || this.defProps.width}px`;
    const vol = (isUndefined(volume) ? this.defProps.volume : volume) / 100;

    return (
      <ReactPlayer
        height={h}
        width={w}
        volume={vol}
        playing={isPlaying}
        {...propsWithDefaults}
      />
    );
  }
}

MediaPlayer.propTypes = {
  controls: PropTypes.bool,
  height: PropTypes.number,
  light: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  onDuration: PropTypes.func,
  onEnded: PropTypes.func,
  onPause: PropTypes.func,
  onPlay: PropTypes.func,
  onReady: PropTypes.func,
  onSeek: PropTypes.func,
  onStart: PropTypes.func,
  playbackRate: PropTypes.number,
  playing: PropTypes.bool,
  /** @uxpinignoreprop */
  style: PropTypes.object,
  url: PropTypes.string,
  volume: PropTypes.oneOf([0, 25, 50, 75, 100]),
  width: PropTypes.number,
};

MediaPlayer.defaultProps = {
  controls: true,
  height: 360,
  light: false,
  loop: false,
  muted: false,
  playbackRate: 1,
  playing: false,
  style: {},
  url: 'https://youtu.be/AmuSFB-1b-s', // without url dropped component will have 1px height
  width: 640,
  volume: 100,
};

export default MediaPlayer;
