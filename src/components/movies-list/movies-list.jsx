import React from 'react';
import PropTypes from 'prop-types';
import MovieCardSmall from '../movie-card-small/movie-card-small.jsx';
import {movieDetails} from '../../types/types.js';
import withVideo from '../../hocs/with-video/with-video.jsx';

const MovieCardSmallWrapped = withVideo(MovieCardSmall);

const MoviesList = (props) => {
  const {movies, count} = props;
  const moviesToShow = movies.slice(0, count);

  return <div className="catalog__movies-list">
    {moviesToShow.map((movie) => {
      const {id} = movie;
      return <MovieCardSmallWrapped key={id} movie={movie}
        isPreview={true}
        isMuted={true}
        isPlaying={false}
      />;
    })}
  </div>;
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieDetails).isRequired,
  count: PropTypes.number.isRequired,
};

export default MoviesList;
