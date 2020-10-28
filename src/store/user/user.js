import {extend} from '../../utils/utils.js';
import {URL, AuthorizationStatus, AppRoute} from '../../utils/const.js';
import {createMoviesList} from '../../services/adapters/movies.js';
import {createUserInfo} from '../../services/adapters/user.js';
import {redirectToRoute} from '../redirect/redirect-action.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  favoriteList: [],
  userInfo: {
    id: null,
    name: null,
    email: null,
    avatar: null,
  },
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  LOAD_FAVORITE_LIST: `LOAD_FAVORITE_LIST`,
  GET_USER_INFO: `GET_USER_INFO`,
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  loadFavoriteList: (list) => ({
    type: ActionType.LOAD_FAVORITE_LIST,
    payload: list,
  }),
  getUserInfo: (userInfo) => ({
    type: ActionType.GET_USER_INFO,
    payload: userInfo,
  })
};

const Operation = {
  checkAuthorization: () => (dispatch, _getState, api) => {
    return api.get(URL.LOGIN)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.getUserInfo(createUserInfo(response.data)));
      })
      .catch(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      });
  },
  login: (userData) => (dispatch, _getState, api) => {
    return api.post(URL.LOGIN, {
      email: userData.login,
      password: userData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.getUserInfo(createUserInfo(response.data)));
        dispatch(redirectToRoute(AppRoute.ROOT));
      });
  },
  loadFavoriteList: () => (dispatch, _getState, api) => {
    return api.get(URL.FAVORITE)
      .then((response) => {
        dispatch(ActionCreator.loadFavoriteList(createMoviesList(response.data)));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_FAVORITE_LIST:
      return extend(state, {
        favoriteList: action.payload,
      });
    case ActionType.GET_USER_INFO:
      return extend(state, {
        userInfo: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation};
