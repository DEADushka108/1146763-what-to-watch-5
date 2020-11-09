import axios from 'axios';
import {redirect} from '../store/redirect/redirect';
import {AppRoute, URL, HttpCode} from '../utils/const';

const BASE_URL = `https://5.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = (onUnauthorized, onError, onLoginError, onReviewError, onServerError) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response, config} = err;
    const {method, url} = config;
    const {status} = response;

    switch (response.status) {
      case HttpCode.UNAUTHORIZED:
        if (url !== URL.LOGIN && method === `post`) {
          redirect(AppRoute.LOGIN);
        }

        onUnauthorized(status);
        throw err;
      case HttpCode.BAD_REQUEST:
        if (url === URL.LOGIN && method === `post`) {
          onLoginError(status);
          throw err;
        }

        if (url.includes(URL.REVIEWS) && method === `post`) {
          onReviewError(status);
          throw err;
        }

        onError(status);
        break;
      case HttpCode.SERVER_ERROR:
        if (url === URL.LOGIN && method === `post`) {
          onLoginError(status);
          throw err;
        }

        onServerError();
        break;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
