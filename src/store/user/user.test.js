import MockAdapter from 'axios-mock-adapter';
import {AuthorizationStatus} from '../../utils/const';
import {createAPI} from '../../services/api';
import {moviesList} from '../../__test-mock__/movies';
import {createMoviesList} from '../../services/adapters/movies';
import {createUserInfo} from '../../services/adapters/user.js';
import {reducer, ActionType, Operation} from './user';

const noop = () => {};

const api = createAPI(noop, noop, noop, noop, noop);

it(`Should reducer return initial state without additional parameters`, () => {
  expect(reducer(undefined, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    favoriteList: [],
    userInfo: {},
    loginStatus: 200,
  });
});

it(`Should reducer load favorite list`, () => {
  expect(reducer({
    favoriteList: [],
  }, {
    type: ActionType.LOAD_FAVORITE_LIST,
    payload: moviesList,
  })).toEqual({
    favoriteList: moviesList,
  });
});

it(`Should reducer change authorization status`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });
});

it(`Should reducer update login status`, () => {
  expect(reducer({
    loginStatus: 200,
  }, {
    type: ActionType.UPDATE_LOGIN_STATUS,
    payload: 401,
  })).toEqual({
    loginStatus: 401,
  });

  expect(reducer({
    loginStatus: 401,
  }, {
    type: ActionType.UPDATE_LOGIN_STATUS,
    payload: 200,
  })).toEqual({
    loginStatus: 200,
  });
});

describe(`User operations should work correctly`, () => {
  it(`Should make a correct request to /login`, () => {
    const apiMock = new MockAdapter(api);
    const responseMock = [{fake: true}];
    const dispatch = jest.fn();
    const authorizationLoader = Operation.checkAuthorization();

    apiMock
      .onGet(`/login`)
      .reply(200, responseMock);

    return authorizationLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_USER_INFO,
          payload: createUserInfo(responseMock)
        });
      });
  });

  it(`Should make a correct request to /login`, () => {
    const apiMock = new MockAdapter(api);
    const responseMock = [{fake: true}];
    const dispatch = jest.fn();
    const authorizationLoader = Operation.login({email: `batman@mail.com`, password: `qwe123`});

    apiMock
      .onPost(`/login`)
      .reply(200, responseMock);

    return authorizationLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_USER_INFO,
          payload: createUserInfo(responseMock)
        });
      });
  });

  it(`Should make a correct request to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const responseMock = [{fake: true}];
    const dispatch = jest.fn();
    const favoriteListLoader = Operation.loadFavoriteList();

    apiMock
      .onGet(`/favorite`)
      .reply(200, responseMock);

    return favoriteListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_LIST,
          payload: createMoviesList(responseMock),
        });
      });
  });
});
