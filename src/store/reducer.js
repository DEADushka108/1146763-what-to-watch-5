import {FilterSettings, MAX_MOVIES_COUNT} from '../utils/const.js';
import {extend} from '../utils/utils.js';
import {featuredMovie, moviesList} from '../mock/films.js';

const initialState = {
  featuredMovie,
  moviesList,
  filteredMoviesList: moviesList,
  activeGenre: FilterSettings.DEFAULT_VALUE,
  moviesCount: MAX_MOVIES_COUNT,
};

const ActionType = {
  GET_FILTERED_MOVIE_LIST: `GET_FILTERED_MOVIE_LIST`,
  SET_MOVIES_COUNT: `SET_MOVIES_COUNT`,
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
        moviesCount: MAX_MOVIES_COUNT,
      },
    };
  },
  setMoviesCount: () => ({
    type: ActionType.SET_MOVIES_COUNT,
    payload: MAX_MOVIES_COUNT,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILTERED_MOVIE_LIST:
      return extend(state, {
        filteredMoviesList: action.payload.filteredList,
        activeGenre: action.payload.genre,
        moviesCount: action.payload.moviesCount,
      });
    case ActionType.SET_MOVIES_COUNT:
      return extend(state, {
        moviesCount: state.moviesCount + action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
