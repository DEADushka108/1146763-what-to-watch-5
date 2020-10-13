import React from 'react';
import PropTypes from 'prop-types';
import {getUniqueGenresList} from '../../utils/utils.js';
import {movieDetails} from '../../types/types.js';

const GenresList = (props) => {
  const {moviesList, activeGenre, onGenreChange, onGenreClick} = props;
  const genresList = getUniqueGenresList(moviesList);

  return <ul className="catalog__genres-list">
    {genresList.map((genre, index) => {
      return <li key={`${genre}-${index}`}
        className={`catalog__genres-item ${(activeGenre === genre) ? `catalog__genres-item--active` : ``}`}
        onClick={() => {
          onGenreChange(genre);
          onGenreClick(genre);
        }}>
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>;
    })}
  </ul>;
};

GenresList.propTypes = {
  moviesList: PropTypes.arrayOf(movieDetails).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};


export default GenresList;
