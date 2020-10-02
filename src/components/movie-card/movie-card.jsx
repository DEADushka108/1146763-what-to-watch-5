import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {movieInfo} = props;
  const {title, poster} = movieInfo;

  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src={poster} alt={title} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{title}</a>
    </h3>
  </article>;
};

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
