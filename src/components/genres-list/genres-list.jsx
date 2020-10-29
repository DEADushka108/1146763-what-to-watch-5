import React from 'react';
import PropTypes from 'prop-types';
import {movieDetails} from '../../types/types.js';
import {ActionCreator} from '../../store/movies/movies';
import {getMoviesList} from '../../store/movies/selectors.js';
import {connect} from 'react-redux';
import {getUniqueGenresList} from '../../utils/utils.js';

const GenresList = (props) => {
  const {moviesList, activeGenre, onGenreChange, onGenreClick} = props;
  const uniqueGenresList = getUniqueGenresList(moviesList);

  return <ul className="catalog__genres-list">
    {uniqueGenresList.map((genre, index) => {
      return <li key={`${genre}-${index}`} className={`catalog__genres-item ${(activeGenre === genre) ? `catalog__genres-item--active` : ``}`} onClick={() => {
        onGenreClick(genre);
        onGenreChange(genre);
      }}>
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>;
    })}
  </ul>;
};

GenresList.propTypes = {
  moviesList: PropTypes.arrayOf(movieDetails).isRequired,
  onGenreClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moviesList: getMoviesList(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setActiveGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
