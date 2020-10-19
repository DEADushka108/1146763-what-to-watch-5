import {FilterSettings, MAX_MOVIES_COUNT} from '../utils/const.js';
import {extend} from '../utils/utils.js';
import {featuredMovie, moviesList} from '../mock/films.js';

const initialState = {
  featuredMovie,
  moviesList,
  activeGenre: FilterSettings.DEFAULT_VALUE,
  moviesCount: MAX_MOVIES_COUNT,
};

const ActionType = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  SET_MOVIES_COUNT: `SET_MOVIES_COUNT`,
};

const ActionCreator = {
  setActiveGenre: (genre) => ({
    type: ActionType.SET_ACTIVE_GENRE,
    payload: genre,
  }),
  setMoviesCount: () => ({
    type: ActionType.SET_MOVIES_COUNT,
    payload: MAX_MOVIES_COUNT,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
        moviesCount: MAX_MOVIES_COUNT,
      });
    case ActionType.SET_MOVIES_COUNT:
      return extend(state, {
        moviesCount: state.moviesCount + action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};