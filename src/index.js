import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const rootElement = document.querySelector(`#root`);

const init = () => {
  const settings = {
    movieTitle: `The Grand Budapest Hotel`,
    movieGenre: `Drama`,
    releaseDate: `2014`,
  };

  ReactDOM.render(
      <App
        movieTitle={settings.movieTitle}
        movieGenre={settings.movieGenre}
        releaseDate={settings.releaseDate}
      />,
      rootElement
  );
};

init();
