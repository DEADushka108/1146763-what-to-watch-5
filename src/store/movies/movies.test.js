import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api.js';
import {createMovie, createMoviesList} from '../../services/adapters/movies.js';
import {reducer, ActionType, Operation} from './movies';
import {CardCount, FilterSettings, HttpCode, noop, featuredMovie, moviesList} from '../../mocks/mocks.js';

const api = createAPI(noop, noop, noop, noop, noop);

it(`Should reducer return initial state without additional parameters`, () => {
  expect(reducer(undefined, {})).toEqual({
    featuredMovie: {},
    moviesList: [],
    activeGenre: FilterSettings.DEFAULT_VALUE,
    moviesCount: CardCount.MAX,
    status: HttpCode.OK,
    activeMovie: {},
  });
});

it(`Should reducer update featured movie`, () => {
  expect(reducer({
    featuredMovie: {},
  }, {
    type: ActionType.LOAD_FEATURED_MOVIE,
    payload: featuredMovie,
  })).toEqual({
    featuredMovie,
    activeMovie: featuredMovie
  });
});


it(`Should reducer update movies list`, () => {
  expect(reducer({
    moviesList: [],
  }, {
    type: ActionType.LOAD_MOVIES,
    payload: moviesList,
  })).toEqual({
    moviesList
  });
});

it(`Should reducer update movies count`, () => {
  expect(reducer({
    moviesCount: CardCount.MAX,
  }, {
    type: ActionType.SET_MOVIES_COUNT,
    payload: 8,
  })).toEqual({
    moviesCount: 16,
  });
});

it(`Should reducer update load status`, () => {
  expect(reducer({
    status: 200,
  }, {
    type: ActionType.UPDATE_STATUS,
    payload: 500,
  })).toEqual({
    status: 500,
  });
});

it(`Should reducer update movie status`, () => {
  expect(reducer({
    featuredMovie: {id: 1, isFavorite: false},
    moviesList: [{id: 1, isFavorite: false}],
    activeMovie: {id: 1, isFavorite: false},
  }, {
    type: ActionType.UPDATE_MOVIE_STATUS,
    payload: {id: 1, isFavorite: true},
  })).toEqual({
    featuredMovie: {id: 1, isFavorite: true},
    moviesList: [{id: 1, isFavorite: true}],
    activeMovie: {id: 1, isFavorite: true},
  });
});

it(`Should reducer update active and reset movies count`, () => {
  expect(reducer({
    activeGenre: FilterSettings.DEFAULT_VALUE,
    moviesCount: 20,
  }, {
    type: ActionType.SET_ACTIVE_GENRE,
    payload: `Action`,
  })).toEqual({
    activeGenre: `Action`,
    moviesCount: CardCount.MAX,
  });
});

describe(`Movies operation works correctly`, () => {
  it(`Should make correct request to films/promo`, function () {
    const apiMock = new MockAdapter(api);
    const responseMock = {fake: true};
    const dispatch = jest.fn();
    const featuredMovieLoader = Operation.loadFeaturedMovie();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, responseMock);

    return featuredMovieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FEATURED_MOVIE,
          payload: createMovie(responseMock),
        });
      });
  });

  it(`Should make correct request to films/:id`, function () {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const responseMock = {fake: true};
    const dispatch = jest.fn();
    const movieLoader = Operation.loadMovie(id);

    apiMock
      .onGet(`/films/${id}`)
      .reply(200, responseMock);

    return movieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIE,
          payload: createMovie(responseMock),
        });
      });
  });

  it(`Should make a correct request to /films`, () => {
    const apiMock = new MockAdapter(api);
    const responseMock = [{fake: true}];
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, responseMock);

    return moviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: createMoviesList(responseMock),
        });
      });
  });
});
