import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Operation as MoviesOperation} from './store/movies/movies.js';
import {Operation as UserOperation} from './store/user/user.js';
import App from './components/app/app.jsx';
import store from './store/store.js';

const rootElement = document.querySelector(`#root`);

const init = () => {
  Promise.all([
    store.dispatch(MoviesOperation.loadFeaturedMovie()),
    store.dispatch(MoviesOperation.loadMovies()),
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
