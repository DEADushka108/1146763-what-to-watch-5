import {FilterSettings} from '../utils/const.js';
import {extend} from '../utils/utils.js';
import {featuredMovie, moviesList} from '../mock/films.js';

const initialState = {
  featuredMovie,
  moviesList,
  filteredMoviesList: moviesList,
  activeGenre: FilterSettings.DEFAULT_VALUE,
};

const ActionType = {
  GET_FILTERED_MOVIE_LIST: `GET_FILTERED_MOVIE_LIST`,
};

const ActionCreator = {
  getFilteredMoviesList: (list, genre) => {
    const filteredList = genre === FilterSettings.DEFAULT_VALUE ? list : list.filter((it) => {
      return it.genre === genre;
    });

    return {
      type: ActionType.GET_FILTERED_MOVIE_LIST,
      payload: {
        filteredList,
        genre,
      },
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILTERED_MOVIE_LIST:
      return extend(state, {
        filteredMoviesList: action.payload.filteredList,
        activeGenre: action.payload.genre,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
