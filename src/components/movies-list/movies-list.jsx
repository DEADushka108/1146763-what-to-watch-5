import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import {movieDetails} from '../../types/types.js';
import withVideo from '../../hocs/with-video/with-video.jsx';

const MovieCardWrapped = withVideo(MovieCard);

const MoviesList = (props) => {
  const {movies, onClick} = props;
  const moviesToShow = movies.slice(0, 8);

  return <div className="catalog__movies-list">
    {moviesToShow.map((movie) => {
      const {id, previewSrc, poster} = movie;
      return <MovieCardWrapped key={id} movieInfo={movie} src={previewSrc} poster={poster}
        isPlaying={false}
        isMuted={true}
        onClick={() => onClick(id)}
      />;
    })}
  </div>;
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieDetails).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default MoviesList;
