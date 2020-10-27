import React from 'react';
import PropTypes from 'prop-types';
import {movieDetails} from '../../types/types.js';
import {ActionCreator} from '../../store/movies/movies';
import {connect} from 'react-redux';
import {getUniqueGenresList} from '../../utils/utils.js';

const GenresList = (props) => {
  const {moviesList, activeItem, onActiveItemChange, onGenreClick} = props;
  const uniqueGenresList = getUniqueGenresList(moviesList);

  return <ul className="catalog__genres-list">
    {uniqueGenresList.map((genre, index) => {
      return <li key={`${genre}-${index}`} className={`catalog__genres-item ${(activeItem === index) ? `catalog__genres-item--active` : ``}`} onClick={() => {
        onGenreClick(genre);
        onActiveItemChange(index);
      }}>
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>;
    })}
  </ul>;
};

GenresList.propTypes = {
  moviesList: PropTypes.arrayOf(movieDetails).isRequired,
  onGenreClick: PropTypes.func.isRequired,
  activeItem: PropTypes.number.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setActiveGenre(genre));
  },
});

export {GenresList};
export default connect(null, mapDispatchToProps)(GenresList);
