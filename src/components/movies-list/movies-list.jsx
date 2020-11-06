import React from 'react';
import PropTypes from 'prop-types';
import MovieCardSmall from '../movie-card-small/movie-card-small.jsx';
import {movieDetails} from '../../types/types.js';

const MoviesList = (props) => {
  const {movies, count} = props;
  const moviesToShow = movies.slice(0, count);

  return <div className="catalog__movies-list">
    {moviesToShow.map((movie) => {
      const {id} = movie;
      return <MovieCardSmall key={id} movie={movie}/>;
    })}
  </div>;
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieDetails).isRequired,
  count: PropTypes.number.isRequired,
};

export default MoviesList;
