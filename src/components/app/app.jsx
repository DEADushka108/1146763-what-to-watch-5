import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import LoginScreen from '../login-screen/login-screen.jsx';
import UserScreen from '../user-screen/user-screen.jsx';
import MovieScreen from '../movie-screen/movie-screen.jsx';
import ReviewScreen from '../review-screen/review-screen.jsx';
import PlayerScreen from '../player-screen/player-screen.jsx';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: null,
    };
  }

  _renderMainScreen() {
    const {featuredMovie, moviesList} = this.props;
    const {movieInfo} = this.state;

    if (movieInfo) {
      return this._renderMovieScreen(movieInfo);
    }

    return <Main
      featuredMovie={featuredMovie}
      moviesList={moviesList}
      onMovieClick={(movie) => {
        this.setState({
          movieInfo: movie,
        });
      }}
    />;
  }

  _renderMovieScreen(movie) {
    return <MovieScreen movieInfo={movie}/>;
  }

  render() {
    const {moviesList} = this.props;
    const movieInfo = moviesList[0];

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/login">
            <LoginScreen />
          </Route>
          <Route exact path="/mylist">
            <UserScreen />
          </Route>
          <Route exact path="/review">
            <ReviewScreen />
          </Route>
          <Route exact path="/films">
            {this._renderMovieScreen(movieInfo)}
          </Route>
          <Route exact path="/player">
            <PlayerScreen movieLink={movieInfo.previewSrc}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  featuredMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }),
  moviesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewSrc: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      level: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    cast: PropTypes.string.isRequired,
  })).isRequired,
};
