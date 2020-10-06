import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {movieInfo, onClick, onHover, onSettle} = props;
  const {title, poster} = movieInfo;

  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image" onMouseEnter={() => {
      onHover(props.movieInfo);
    }} onMouseLeave={onSettle}
    onClick={onClick}>
      <img src={poster} alt={title} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title" onClick={onClick}>
      <a className="small-movie-card__link" href="films.html">{title}</a>
    </h3>
  </article>;
};

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  onSettle: PropTypes.func.isRequired,
};

export default MovieCard;
