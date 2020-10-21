import React from 'react';
import PropTypes from 'prop-types';
import MovieCardSmall from '../movie-card-small/movie-card-small.jsx';
import {movieDetails} from '../../types/types.js';
import withVideo from '../../hocs/with-video/with-video.jsx';

const MovieCardSmallWrapped = withVideo(MovieCardSmall);

const MoviesList = (props) => {
  const {movies, count, onClick} = props;
  const moviesToShow = movies.slice(0, count);

  return <div className="catalog__movies-list">
    {moviesToShow.map((movie) => {
      const {id, previewSrc, poster} = movie;
      return <MovieCardSmallWrapped key={id} movie={movie}
        isPreview={true}
        isMuted={true}
        isPlaying={false}
        onClick={() => onClick(id)}
      />;
    })}
  </div>;
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieDetails).isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default MoviesList;
