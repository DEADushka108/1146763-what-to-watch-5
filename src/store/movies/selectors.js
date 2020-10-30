import {createSelector} from 'reselect';
import {FilterSettings} from '../../utils/const.js';
import NameSpace from '../name-space.js';

const getFeaturedMovie = (state) => {
  return state[NameSpace.MOVIES].featuredMovie;
};

const getMoviesList = (state) => {
  return state[NameSpace.MOVIES].moviesList;
};

const getMovieById = (state, id) => {
  return getMoviesList(state).find((item) => {
    return item.id === id;
  });
};

const getMoviesCount = (state) => {
  return state[NameSpace.MOVIES].moviesCount;
};

const getActiveGenre = (state) => {
  return state[NameSpace.MOVIES].activeGenre;
};

const getStatus = (state) => {
  return state[NameSpace.MOVIES].status;
};

const getMovie = (state) => {
  return state[NameSpace.MOVIES].activeMovie;
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

export {getFeaturedMovie, getMovie, getMovieById, getActiveGenre, getMoviesCount, getFilteredList, getMoviesList, getStatus};
