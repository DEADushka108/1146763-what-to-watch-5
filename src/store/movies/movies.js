import {CardCount, FilterSettings, HttpCode, URL} from '../../utils/const.js';
import {extend} from '../../utils/utils.js';
import {createMovie, createMoviesList} from '../../services/adapters/movies';

const initialState = {
  featuredMovie: {},
  moviesList: [],
  activeGenre: FilterSettings.DEFAULT_VALUE,
  moviesCount: CardCount.MAX,
  status: HttpCode.OK,
  activeMovie: {},
};

const ActionType = {
  LOAD_FEATURED_MOVIE: `LOAD_FEATURED_MOVIE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_MOVIE: `LOAD_MOVIE`,
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
  loadMovie: (movie) => ({
    type: ActionType.LOAD_MOVIE,
    payload: movie,
  }),
  setActiveGenre: (genre) => ({
    type: ActionType.SET_ACTIVE_GENRE,
    payload: genre,
  }),
  setMoviesCount: () => ({
    type: ActionType.SET_MOVIES_COUNT,
    payload: CardCount.MAX,
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
      })
      .catch(() => {
        dispatch(ActionCreator.updateStatus(HttpCode.BAD_REQUEST));
      });
  },
  loadMovies: () => (dispatch, _getState, api) => {
    return api.get(URL.MOVIES)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(createMoviesList(response.data)));
      })
      .catch(() => {
        dispatch(ActionCreator.updateStatus(HttpCode.BAD_REQUEST));
      });
  },
  updateMovieStatus: (id, status) => (dispatch, _getState, api) => {
    return api.post(`${URL.FAVORITE}/${id}/${status}`)
      .then((response) => {
        dispatch(ActionCreator.updateMovieStatus(createMovie(response.data)));
      });
  },
  loadMovie: (id) => (dispatch, _getState, api) => {
    return api.get(`${URL.MOVIES}/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadMovie(createMovie(response.data)));
      })
      .catch(() => {
        dispatch(ActionCreator.updateStatus(HttpCode.BAD_REQUEST));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FEATURED_MOVIE:
      return extend(state, {
        featuredMovie: action.payload,
        activeMovie: action.payload,
      });
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        moviesList: action.payload,
      });
    case ActionType.LOAD_MOVIE:
      return extend(state, {
        activeMovie: action.payload,
      });
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
        moviesCount: CardCount.MAX,
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
        featuredMovie: state.featuredMovie.id === action.payload.id ? action.payload : state.featuredMovie,
        moviesList: state.moviesList.map((movie) => (movie.id === action.payload.id) ? action.payload : movie),
        activeMovie: action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
