import configureStore from 'redux-mock-store';
import {HttpCode} from '../../utils/const.js';
import {AuthorizationStatus, FilterSettings} from '../const/const.js';
import {featuredMovie, moviesList} from '../movies/movies.js';
import {reviews} from '../reviews/reviews.js';
import {userInfo} from '../user/user.js';

const NameSpace = {
  MOVIES: `MOVIES`,
  REVIEWS: `REVIEWS`,
  USER: `USER`,
};

const noop = () => {};

const mockStore = configureStore();

const store = mockStore({
  [NameSpace.MOVIES]: {
    featuredMovie,
    moviesList,
    activeGenre: FilterSettings.DEFAULT_VALUE,
    moviesCount: 8,
    status: HttpCode.OK,
    activeMovie: featuredMovie,
  },
  [NameSpace.REVIEWS]: {
    reviews,
    postStatus: 0,
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.AUTH,
    favoriteList: moviesList,
    userInfo,
    loginStatus: HttpCode.OK,
  }
});

const serverErrorStore = mockStore({
  [NameSpace.MOVIES]: {
    featuredMovie: {},
    moviesList: [],
    activeGenre: FilterSettings.DEFAULT_VALUE,
    moviesCount: 8,
    status: HttpCode.SERVER_ERROR,
    activeMovie: {},
  },
  [NameSpace.REVIEWS]: {
    reviews: [],
    postStatus: 0,
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    favoriteList: {},
    userInfo: {},
    loginStatus: HttpCode.SERVER_ERROR,
  }
});

export {store, serverErrorStore, noop};
