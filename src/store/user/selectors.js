import {createSelector} from 'reselect';
import {AuthorizationStatus} from '../../utils/const.js';
import NameSpace from '../name-space.js';

const getAuthorizationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

const getFavoriteList = (state) => {
  return state[NameSpace.USER].favoriteList;
};

const getUserInfo = (state) => {
  return state[NameSpace.USER].userInfo;
};

const getLoginStatus = (state) => {
  return state[NameSpace.USER].loginStatus;
};

const getAuthorization = createSelector(
    getAuthorizationStatus,
    (status) => {
      return status === AuthorizationStatus.AUTH;
    }
);

export {getUserInfo, getAuthorizationStatus, getFavoriteList, getAuthorization, getLoginStatus};
