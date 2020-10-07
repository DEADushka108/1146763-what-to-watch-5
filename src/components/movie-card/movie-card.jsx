import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../utils/const';

const MovieCard = (props) => {
  const {movieInfo, onHover, onSettle, onClick} = props;
  const {id, title, poster} = movieInfo;

  return <article className="small-movie-card catalog__movies-card" onClick={() => onClick(id)} onMouseEnter={() => onHover(id)} onMouseLeave={() => onSettle(id)}>
    <div className="small-movie-card__image">
      <img src={poster} alt={title} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <Link to={`${AppRoute.MOVIE}/${id}`} className="small-movie-card__link">{title}</Link>
    </h3>
  </article>;
};

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
  onHover: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onSettle: PropTypes.func.isRequired,
};

export default MovieCard;
