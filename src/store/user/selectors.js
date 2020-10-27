import {createSelector, createSelectors} from 'reselect';
import {AuthorizationStatus} from '../../utils/const.js';
import NameSpace from '../name-space.js';

const getAuthorizationChecked = (state) => {
  return state[NameSpace.USER].isAuthorizationChecked;
};

const getAuthorizationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

const getFavoriteList = (state) => {
  return state[NameSpace.USER].favoriteList;
};

const getAuthorization = createSelector(
  getAuthorizationStatus,
  (status) => {
    return status === AuthorizationStatus.AUTH;
  }
);

export {getAuthorizationChecked, getAuthorizationStatus, getFavoriteList, getAuthorization};
