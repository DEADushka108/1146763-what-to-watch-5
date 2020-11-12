import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {movieDetails} from '../../types/types';
import {getTimeString} from '../../utils/utils';
import {Operation as MoviesOperation} from '../../store/movies/movies.js';
import {redirectToRoute} from '../../store/redirect/redirect';
import {connect} from 'react-redux';
import {AppRoute} from '../../utils/const';
import {getActiveMovie} from '../../store/movies/selectors';

const VIDEO_PLAYER_INTERVAL = 1000;

const PlayerScreen = (props) => {
  const {movie, onExitButtonClick, loadMovie, match} = props;
  const {id, title, backgroundImage, videoSrc} = movie;
  const routeId = Number(match.params.id);
  const video = useRef();
  const [playingStatus, setPlayingStatus] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const handlePlayButtonClick = useCallback(() => {
    setPlayingStatus(!playingStatus);
    if (!playingStatus) {
      video.current.play();
    } else {
      video.current.pause();
    }
  });

  const handleExitButtonClick = useCallback(() => {
    video.current.pause();
    onExitButtonClick(`${AppRoute.MOVIE}/${id}`);
  });

  const handleFullScreenButtonClick = useCallback(() => {
    video.current.requestFullscreen();
  });

  useEffect(() => {
    if (routeId === id) {
      return;
    }
    loadMovie(routeId);
  }, [routeId]);

  useEffect(() => {
    if (video.current) {
      setDuration(Math.floor(video.current.duration));
      const interval = setInterval(() => {
        setProgress(Math.floor(video.current.currentTime));
      }, VIDEO_PLAYER_INTERVAL);
      return () => clearInterval(interval);
    }
    return null;
  }, [progress]);

  return <React.Fragment>
    <div className="player">
      <video poster={backgroundImage} src={videoSrc} className="player__video" ref={video}/>

      <button type="button" className="player__exit" onClick={handleExitButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration ? duration : 0}></progress>
            <div className="player__toggler" style={{left: duration ? `${(progress / duration) * 100}%` : `0%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{duration ? getTimeString(duration - progress) : `00:00:00`}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayButtonClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={playingStatus ? `#pause` : `#play-s`}></use>
            </svg>
            <span> {playingStatus ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenButtonClick}>
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
  onExitButtonClick: PropTypes.func.isRequired,
  loadMovie: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  movie: getActiveMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onExitButtonClick(route) {
    dispatch(redirectToRoute(route));
  },
  loadMovie(id) {
    dispatch(MoviesOperation.loadMovie(id));
  },
});

export {PlayerScreen};
export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);

