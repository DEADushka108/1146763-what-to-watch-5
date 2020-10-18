import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isLoading: true,
        isPlaying: props.isPlaying,
      };
    }

    componentDidMount() {
      const {src, poster, isMuted} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.poster = poster;
      video.muted = isMuted;

      video.oncanplaythrough = () => {
        this.setState({
          isLoading: false,
        });
      };

      video.onplay = () => {
        this.setState({
          isLoading: false,
        });
      };

      video.onpause = () => {
        video.load();
        this.setState({
          isPlaying: false,
        });
      };
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
    }

    componentDidUpdate() {
      const {isPlaying} = this.state;
      const video = this._videoRef.current;

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    render() {
      const {isLoading, isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          onPlayStatusChange={() => {
            this.setState({isPlaying: !isPlaying});
          }}>
          <video width="280" height="175" ref={this._videoRef}/>
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    isMuted: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  };

  return WithVideo;
};

export default withVideo;
