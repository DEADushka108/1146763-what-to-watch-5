import React from 'react';
import PropTypes from 'prop-types';
import {movieDetails} from '../../types/types';

const PlayerScreen = (props) => {
  const {movie, children, isPlaying, duration, progress, onPlayStatusChange, onFullScreenChange} = props;
  const {title} = movie;
  return <React.Fragment>
    <div className="player">
      {children}

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration}></progress>
            <div className="player__toggler" style={{left: `${(progress / duration) * 100}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{duration}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayStatusChange}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}></use>
            </svg>
            <span> {isPlaying ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen" onClick={onFullScreenChange}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  </React.Fragment>;
};

PlayerScreen.propTypes = {
  movie: movieDetails,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayStatusChange: PropTypes.func.isRequired,
  onFullScreenChange: PropTypes.func.isRequired,
};

export default PlayerScreen;
