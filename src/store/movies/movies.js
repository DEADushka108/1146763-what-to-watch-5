import {FilterSettings, HttpCode, MAX_MOVIES_COUNT, URL} from '../../utils/const.js';
import {extend} from '../../utils/utils.js';
import {createMovie, createMoviesList} from '../../services/adapters/movies';

const initialState = {
  featuredMovie: {},
  moviesList: [],
  activeGenre: FilterSettings.DEFAULT_VALUE,
  moviesCount: MAX_MOVIES_COUNT,
  status: HttpCode.OK,
};

const ActionType = {
  LOAD_FEATURED_MOVIE: `LOAD_FEATURED_MOVIE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  SET_MOVIES_COUNT: `SET_MOVIES_COUNT`,
  UPDATE_STATUS: `UPDATE_STATUS`,
  UPDATE_MOVIE_STATUS: `UPDATE_MOVIE_STATUS`,
};

const ActionCreator = {
  loadFeaturedMovie: (movie) => ({
    type: ActionType.LOAD_FEATURED_MOVIE,
    payload: movie,
  }),
  loadMovies: (moviesList) => ({
    type: ActionType.LOAD_MOVIES,
    payload: moviesList,
  }),
  setActiveGenre: (genre) => ({
    type: ActionType.SET_ACTIVE_GENRE,
    payload: genre,
  }),
  setMoviesCount: () => ({
    type: ActionType.SET_MOVIES_COUNT,
    payload: MAX_MOVIES_COUNT,
  }),
  updateStatus: (status) => ({
    type: ActionType.UPDATE_STATUS,
    payload: status,
  }),
  updateMovieStatus: (movie) => ({
    type: ActionType.UPDATE_MOVIE_STATUS,
    payload: movie,
  }),
};

const Operation = {
  loadFeaturedMovie: () => (dispatch, _getState, api) => {
    return api.get(URL.FEATURED)
      .then((response) => {
        dispatch(ActionCreator.loadFeaturedMovie(createMovie(response.data)));
      });
  },
  loadMovies: () => (dispatch, _getState, api) => {
    return api.get(URL.MOVIES)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(createMoviesList(response.data)));
      });
  },
  updateMovieStatus: (id, status) => (_dispatch, _getState, api) => {
    return api.post(`${URL.FAVORITE}/${id}/${status}`)
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FEATURED_MOVIE:
      return extend(state, {
        featuredMovie: action.payload,
      });
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        moviesList: action.payload,
      });
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
        moviesCount: MAX_MOVIES_COUNT,
      });
    case ActionType.SET_MOVIES_COUNT:
      return extend(state, {
        moviesCount: state.moviesCount + action.payload,
      });
    case ActionType.UPDATE_STATUS:
      return extend(state, {
        status: action.payload,
      });
    case ActionType.UPDATE_MOVIE_STATUS:
      return extend(state, {
        featuredMovie: action.payload.featuredMovie,
        moviesList: action.payload.moviesList,
      })
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
