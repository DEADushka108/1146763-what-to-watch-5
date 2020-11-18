import React, {useCallback, useEffect, useRef, useState, ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import {redirectToRoute} from '../../store/redirect/redirect.js';
import {connect} from 'react-redux';
import {Movie} from '../../types/movie';

interface Props {
  movie: Movie;
  children: ReactNode | ReactNode[];
  onCardClick: (route: string) => void;
}

const VIDEO_PLAY_TIMEOUT = 1000;

const MovieCardSmall = (props: Props) => {
  const {movie, onCardClick} = props;
  const {id, title, poster, previewSrc} = movie;
  const video = useRef<HTMLVideoElement>();
  const [isPlay, setPlayStatus] = useState(false);
  let timeout;

  const handleMouseEnter = useCallback(() => {
    setPlayStatus(true);
    timeout = setTimeout(() => {
      if (!isPlay && video.current) {
        video.current.muted = true;
        video.current.play();
      }
    }, VIDEO_PLAY_TIMEOUT);
  }, [video]);

  const handleMouseLeave = useCallback(() => {
    setPlayStatus(false);
    clearTimeout(timeout);
    video.current.load();
  }, [video]);

  useEffect(() => {
    if (!video.current) {
      setPlayStatus(false);
      return;
    }
    return;
  }, [video.current]);

  return <article className="small-movie-card catalog__movies-card" >
    <div className="small-movie-card__image" onClick={() => {
      onCardClick(`${AppRoute.MOVIE}/${id}`);
    }}
    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video src={previewSrc} poster={poster} width="280" height="175" ref={video}/>
    </div>
    <h3 className="small-movie-card__title">
      <Link to={`${AppRoute.MOVIE}/${id}`} className="small-movie-card__link">{title}</Link>
    </h3>
  </article>;
};

const mapDispatchToProps = (dispatch) => ({
  onCardClick(route) {
    dispatch(redirectToRoute(route));
  },
});

export {MovieCardSmall};
export default connect(null, mapDispatchToProps)(MovieCardSmall);
