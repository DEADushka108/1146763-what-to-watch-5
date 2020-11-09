import {createSelector} from 'reselect';
import {AuthorizationStatus} from '../../utils/const.js';
import NameSpace from '../name-space.js';

const USER = NameSpace.USER;

const getAuthorizationStatus = (state) => {
  return state[USER].authorizationStatus;
};

const getFavoriteList = (state) => {
  return state[USER].favoriteList;
};

const getUserInfo = (state) => {
  return state[USER].userInfo;
};

const getLoginStatus = (state) => {
  return state[USER].loginStatus;
};

const getAuthorization = createSelector(
    getAuthorizationStatus,
    (status) => {
      return status === AuthorizationStatus.AUTH;
    }
);

export {getUserInfo, getAuthorizationStatus, getFavoriteList, getAuthorization, getLoginStatus};
