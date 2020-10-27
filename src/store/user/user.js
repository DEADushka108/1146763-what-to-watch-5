import {extend} from '../../utils/utils.js';
import {URL, AuthorizationStatus} from '../../utils/const.js';
import {createMoviesList} from '../../services/adapters/movies.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  favoriteList: [],
  isAuthorizationChecked: false,
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  LOAD_FAVORITE_LIST: `LOAD_FAVORITE_LIST`,
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
};

const Operation = {
  checkAuthorization: () => (dispatch, _getState, api) => {
    return api.get(URL.LOGIN)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
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
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
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
        isAuthorizationChecked: true,
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_FAVORITE_LIST:
      return extend(state, {
        favoriteList: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation};
