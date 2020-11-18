import React, {useState} from 'react';
import {ActionCreator} from '../../store/movies/movies';
import {getActiveGenre, getMoviesList} from '../../store/movies/selectors';
import {connect} from 'react-redux';
import {getUniqueGenresList} from '../../utils/utils';
import {Movie} from '../../types/movie';

interface Props {
  moviesList: Movie[];
  currentGenre: string;
  onGenreClick: (genre: string) => void;
}

const GenresList = (props: Props) => {
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
