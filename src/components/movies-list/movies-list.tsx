import React from 'react';
import {Movie} from '../../types/movie';
import MovieCardSmall from '../movie-card-small/movie-card-small';

interface Props {
  movies: Movie[];
  count: number;
}

const MoviesList = (props: Props) => {
  const {movies, count} = props;
  const moviesToShow = movies.slice(0, count);

  return <div className="catalog__movies-list">
    {moviesToShow.map((movie) => {
      const {id} = movie;
      return <MovieCardSmall key={id} movie={movie}/>;
    })}
  </div>;
};

export default MoviesList;
