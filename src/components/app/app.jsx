import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {movieTitle, movieGenre, releaseDate} = props;

  return <Main
    title={movieTitle}
    genre={movieGenre}
    date={releaseDate}
  />;
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default App;
