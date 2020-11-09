import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../utils/const';
import {movieDetails} from '../../types/types';
import {redirectToRoute} from '../../store/redirect/redirect.js';
import {connect} from 'react-redux';

const MovieCardSmall = (props) => {
  const {movie, redirect} = props;
  const {id, title, poster, previewSrc} = movie;
  const video = useRef();
  const [isPlay, setPlayStatus] = useState(false);
  let timeout;

  const handleMouseEnter = useCallback(() => {
    setPlayStatus(true);
    timeout = setTimeout(() => {
      if (!isPlay && video.current) {
        video.current.muted = true;
        video.current.play();
      }
    }, 1000);
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
      redirect(`${AppRoute.MOVIE}/${id}`);
    }}
    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video src={previewSrc} poster={poster} width="280" height="175" ref={video}/>
    </div>
    <h3 className="small-movie-card__title">
      <Link to={`${AppRoute.MOVIE}/${id}`} className="small-movie-card__link">{title}</Link>
    </h3>
  </article>;
};

MovieCardSmall.propTypes = {
  movie: movieDetails,
  redirect: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  redirect(route) {
    dispatch(redirectToRoute(route));
  },
});

export {MovieCardSmall};
export default connect(null, mapDispatchToProps)(MovieCardSmall);
