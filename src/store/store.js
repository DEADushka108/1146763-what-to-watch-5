import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {AuthorizationStatus} from '../utils/const.js';
import {ActionCreator as UserAction} from './user/user.js';
import reducer from './reducer.js';
import {createAPI} from '../services/api.js';

const onUnauthorized = () => {
  store.dispatch(UserAction.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

export default store;
