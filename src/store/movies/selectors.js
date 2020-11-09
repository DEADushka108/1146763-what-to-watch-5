import {createSelector} from 'reselect';
import {FilterSettings} from '../../utils/const.js';
import NameSpace from '../name-space.js';

const MOVIES = NameSpace.MOVIES;

const getFeaturedMovie = (state) => {
  return state[MOVIES].featuredMovie;
};

const getMoviesList = (state) => {
  return state[MOVIES].moviesList;
};

const getMoviesCount = (state) => {
  return state[MOVIES].moviesCount;
};

const getActiveGenre = (state) => {
  return state[MOVIES].activeGenre;
};

const getStatus = (state) => {
  return state[MOVIES].status;
};

const getActiveMovie = (state) => {
  return state[MOVIES].activeMovie;
};

const getFilteredList = createSelector(
    getMoviesList,
    getActiveGenre,
    (list, genre) => {
      return genre === FilterSettings.DEFAULT_VALUE ? list : list.filter((it) => {
        return it.genre === genre;
      });
    }
);

export {getFeaturedMovie, getActiveMovie, getActiveGenre, getMoviesCount, getFilteredList, getMoviesList, getStatus};
