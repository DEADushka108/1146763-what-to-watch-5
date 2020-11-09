import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {AuthorizationStatus} from '../utils/const.js';
import {ActionCreator as UserAction} from './user/user.js';
import {ActionCreator as MoviesAction} from './movies/movies.js';
import {ActionCreator as ReviewsAction} from './reviews/reviews.js';
import reducer from './reducer.js';
import {createAPI} from '../services/api.js';
import {redirect} from './redirect/redirect.js';
import {HttpCode} from '../utils/const.js';

const onUnauthorized = (status) => {
  store.dispatch(UserAction.updateLoginStatus(status));
  store.dispatch(UserAction.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const onError = (status) => {
  store.dispatch(MoviesAction.updateStatus(status));
};

const onLoginError = (status) => {
  store.dispatch(UserAction.updateLoginStatus(status));
};

const onReviewError = (status) => {
  store.dispatch(ReviewsAction.updatePostStatus(status));
};

const onServerError = () => {
  store.dispatch(MoviesAction.updateStatus(HttpCode.SERVER_ERROR));
};

const api = createAPI(onUnauthorized, onError, onLoginError, onReviewError, onServerError);
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

export default store;
