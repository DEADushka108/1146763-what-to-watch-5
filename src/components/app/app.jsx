import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import LoginScreen from '../login-screen/login-screen.jsx';
import UserScreen from '../user-screen/user-screen.jsx';
import MovieScreen from '../movie-screen/movie-screen.jsx';
import ReviewScreen from '../review-screen/review-screen.jsx';
import PlayerScreen from '../player-screen/player-screen.jsx';
import {findItemById, getRandomArrayElements} from '../../utils/utils.js';
import {AppRoute} from '../../utils/const.js';
import {promoMovie, movieDetails} from '../../types/types.js';

const App = (props) => {
  const {featuredMovie, moviesList} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${AppRoute.ROOT}`} render={({history}) => (
          <Main
            featuredMovie={featuredMovie}
            moviesList={moviesList}
            onMovieCardClick={(movieId) => history.push(`${AppRoute.MOVIE}/${movieId}`)}
          />
        )}/>;
        <Route exact path={`${AppRoute.LOGIN}`}>
          <LoginScreen />
        </Route>
        <Route exact path={`${AppRoute.FAVORITE}`} render={({history}) => (
          <UserScreen
            moviesList={getRandomArrayElements(moviesList, 10)}
            onMovieCardClick={(movieId) => history.push(`${AppRoute.MOVIE}/${movieId}`)}
          />
        )} />
        <Route exact path={`${AppRoute.MOVIE}/:id/review`} render={(routeProps) => {
          const id = routeProps.match.params.id;
          const movie = findItemById(id, moviesList);
          return <ReviewScreen movieInfo={movie}/>;
        }}/>
        <Route exact path={`${AppRoute.MOVIE}/:id`} render={(routeProps) => {
          const id = routeProps.match.params.id;
          const movie = findItemById(id, moviesList);
          return <MovieScreen movieInfo={movie}
            moviesList={getRandomArrayElements(moviesList, 4)}
            onMovieCardClick={(movieId) => routeProps.history.push(`${AppRoute.MOVIE}/${movieId}`)}/>;
        }}/>
        <Route exact path={`${AppRoute.PLAYER}/:id`} render={(routeProps) => {
          const id = routeProps.match.params.id;
          const movie = findItemById(id, moviesList);
          return <PlayerScreen movieInfo={movie}/>;
        }} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  featuredMovie: promoMovie,
  moviesList: PropTypes.arrayOf(movieDetails).isRequired,
};

export default App;
