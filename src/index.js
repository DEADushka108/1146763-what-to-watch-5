import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import films from './mock/films.js';

const rootElement = document.querySelector(`#root`);
const {featured, list} = films;

const init = () => {

  ReactDOM.render(
      <App
        featuredMovie={featured}
        moviesList={list}
      />,
      rootElement
  );
};

init();
