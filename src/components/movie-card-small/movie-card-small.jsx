import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../utils/const';
import {movieDetails} from '../../types/types';

const MovieCardSmall = (props) => {
  const {movie, children, onPlayStatusChange, onClick} = props;
  const {id, title} = movie;
  let timeout;

  return <article className="small-movie-card catalog__movies-card" >
    <div className="small-movie-card__image" onClick={() => {
      onClick(id);
    }}
    onMouseEnter={() => {
      timeout = setTimeout(onPlayStatusChange, 1000);
    }} onMouseLeave={() => {
      clearTimeout(timeout);
      onPlayStatusChange();
    }}>
      {children}
    </div>
    <h3 className="small-movie-card__title">
      <Link to={`${AppRoute.MOVIE}/${id}`} className="small-movie-card__link">{title}</Link>
    </h3>
  </article>;
};

MovieCardSmall.propTypes = {
  movie: movieDetails,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onPlayStatusChange: PropTypes.func.isRequired,
};

export default MovieCardSmall;
