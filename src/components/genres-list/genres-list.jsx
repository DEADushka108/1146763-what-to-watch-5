import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {movieDetails} from '../../types/types.js';
import {ActionCreator} from '../../store/movies/movies';
import {getActiveGenre, getMoviesList} from '../../store/movies/selectors.js';
import {connect} from 'react-redux';
import {getUniqueGenresList} from '../../utils/utils.js';

const GenresList = (props) => {
  const {moviesList, currentGenre, onGenreClick} = props;
  const uniqueGenresList = getUniqueGenresList(moviesList);
  const [activeGenre, setActiveGenre] = useState(currentGenre);

  return <ul className="catalog__genres-list">
    {uniqueGenresList.map((genre, index) => {
      return <li key={`${genre}-${index}`} className={`catalog__genres-item ${(activeGenre === genre) ? `catalog__genres-item--active` : ``}`} onClick={() => {
        onGenreClick(genre);
        setActiveGenre(genre);
      }}>
        <a className="catalog__genres-link">{genre}</a>
      </li>;
    })}
  </ul>;
};

GenresList.propTypes = {
  moviesList: PropTypes.arrayOf(movieDetails).isRequired,
  onGenreClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  moviesList: getMoviesList(state),
  currentGenre: getActiveGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setActiveGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
