import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {movieDetails} from '../../types/types';
import {getTimeString} from '../../utils/utils';
import {Operation as MoviesOperation} from '../../store/movies/movies.js';
import {redirectToRoute} from '../../store/redirect/redirect';
import {connect} from 'react-redux';
import {AppRoute} from '../../utils/const';
import {getActiveMovie} from '../../store/movies/selectors';

const PlayerScreen = (props) => {
  const {movie, onExitButtonClick, loadMovie, match} = props;
  const {id, title, backgroundImage, videoSrc} = movie;
  const routeId = Number(match.params.id);
  const video = useRef();
  const [playingStatus, setPlayingStatus] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleDurationUpdate = useCallback((time)=> {
    setDuration(time);
  });

  useEffect(() => {
    if (routeId === id) {
      return;
    }
    loadMovie(routeId);
  }, [routeId]);

  useEffect(() => {
    if (video.current) {
      const interval = setInterval(() => {
        setProgress(Math.floor(video.current.currentTime));
      }, 1000);
      return () => clearInterval(interval);
    }
    return true;
  }, [progress]);

  return <React.Fragment>
    <div className="player">
      <video poster={backgroundImage} src={videoSrc} className="player__video" ref={video}/>

      <button type="button" className="player__exit" onClick={() => {
        onExitButtonClick(`${AppRoute.MOVIE}/${id}`);
      }}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration ? duration : 0}></progress>
            <div className="player__toggler" style={{left: duration ? `${(progress / duration) * 100}%` : `0%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getTimeString(duration - progress)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={() => {
            setPlayingStatus(!playingStatus);
            if (!playingStatus) {
              video.current.play();
              handleDurationUpdate(Math.floor(video.current.duration));
            } else {
              video.current.pause();
            }
          }}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={playingStatus ? `#pause` : `#play-s`}></use>
            </svg>
            <span> {playingStatus ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen" onClick={() => {
            video.current.requestFullscreen();
          }}>
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

