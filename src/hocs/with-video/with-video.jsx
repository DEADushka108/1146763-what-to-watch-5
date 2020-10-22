import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {movieDetails} from '../../types/types';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        duration: 0,
        progress: 0,
        isLoading: true,
        isPlaying: props.isPlaying,
        isFullScreen: false,
      };

      this._handleVideoMount = this._handleVideoMount.bind(this);
      this._handlePlayStatusChange = this._handlePlayStatusChange.bind(this);
      this._handleFullScreenChange = this._handleFullScreenChange.bind(this);
    }

    componentDidMount() {
      const {movie} = this.props;

      if (movie) {
        this._handleVideoMount();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      if (!video) {
        return;
      }

      video.src = ``;
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
    }

    componentDidUpdate(prevProps) {
      const {movie: prevMovie} = prevProps;
      const {isPlaying} = this.state;
      const video = this._videoRef.current;

      if (!video) {
        return;
      }

      if (!prevMovie || !video.src) {
        this._handleVideoMount();
      }

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    _handleVideoMount() {
      const {movie, isMuted, isPreview} = this.props;
      const {poster, previewSrc, videoSrc} = movie;
      const video = this._videoRef.current;

      if (!video) {
        return;
      }

      video.src = isPreview ? previewSrc : videoSrc;
      video.poster = poster;
      video.muted = isMuted;

      video.oncanplaythrough = () => {
        this.setState({
          isLoading: false,
          duration: Math.floor(video.duration),
        });
      };

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.onpause = () => {
        video.load();
        this.setState({
          isPlaying: false,
        });
      };

      video.ontimeupdate = () => {
        this.setState({
          progress: Math.floor(video.currentTime),
        });
      };
    }

    _handleFullScreenChange() {
      const {isFullScreen} = this.state;
      const video = this._videoRef.current;

      if (isFullScreen) {
        video.exitFullscreen();
      } else {
        video.requestFullscreen();
      }

      this.setState({
        isFullScreen: !isFullScreen,
      });
    }

    _handlePlayStatusChange() {
      const {isPlaying} = this.state;

      this.setState({
        isPlaying: !isPlaying,
      });
    }

    render() {
      const {isPreview} = this.props;
      const {isLoading, isPlaying, progress, duration} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          duration={duration}
          progress={progress}
          onPlayStatusChange={this._handlePlayStatusChange}
          onFullScreenChange={this._handleFullScreenChange}
        >
          {isPreview ? <video width="280" height="175" ref={this._videoRef}/> : <video className="player__video" ref={this._videoRef}/>}
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    isMuted: PropTypes.bool.isRequired,
    isPreview: PropTypes.bool.isRequired,
    movie: movieDetails,
  };

  return WithVideo;
};

export default withVideo;
