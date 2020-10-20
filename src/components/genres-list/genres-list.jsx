import React from 'react';
import PropTypes from 'prop-types';
import {movieDetails} from '../../types/types.js';
import {ActionCreator} from '../../store/reducer.js';
import {connect} from 'react-redux';
import {getUniqueGenresList} from '../../utils/utils.js';
import {MAX_MOVIES_COUNT} from '../../utils/const.js';

const GenresList = (props) => {
  const {moviesList, activeItem, onActiveItemChange, onGenreClick} = props;
  const uniqueGenresList = getUniqueGenresList(moviesList);

  return <ul className="catalog__genres-list">
    {uniqueGenresList.map((genre, index) => {
      return <li key={`${genre}-${index}`} className={`catalog__genres-item ${(activeItem === index) ? `catalog__genres-item--active` : ``}`} onClick={() => {
        onGenreClick(genre, MAX_MOVIES_COUNT);
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
  onGenreClick(genre, count) {
    dispatch(ActionCreator.setActiveGenre(genre, count));
  },
});

export {GenresList};
export default connect(null, mapDispatchToProps)(GenresList);
