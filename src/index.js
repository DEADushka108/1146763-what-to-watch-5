import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Operation as MovieOperation} from './store/movies/movies.js';
import {Operation as UserOperation} from './store/user/user.js';
import App from './components/app/app.jsx';
import store from './store/store.js';

const rootElement = document.querySelector(`#root`);

const init = () => {
  Promise.all([
    store.dispatch(MovieOperation.loadFeaturedMovie()),
    store.dispatch(MovieOperation.loadMovies()),
    store.dispatch(UserOperation.checkAuthorization()),
  ])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        rootElement
    );
  });
};

init();
