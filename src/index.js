import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const rootElement = document.querySelector(`#root`);

const Titles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
];

const init = () => {
  const settings = {
    movieTitle: `The Grand Budapest Hotel`,
    movieGenre: `Drama`,
    releaseDate: `2014`,
    moviesTitles: Titles,
  };

  ReactDOM.render(
      <App
        movieTitle={settings.movieTitle}
        movieGenre={settings.movieGenre}
        releaseDate={settings.releaseDate}
        moviesTitles={settings.moviesTitles}
      />,
      rootElement
  );
};

init();
