import React from 'react';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import history from '../../routing/history';
import LoginScreen from '../login-screen/login-screen.jsx';
import UserScreen from '../user-screen/user-screen.jsx';
import MovieScreen from '../movie-screen/movie-screen.jsx';
import ReviewScreen from '../review-screen/review-screen.jsx';
import PlayerScreen from '../player-screen/player-screen.jsx';
import {findItemById} from '../../utils/utils.js';
import {AppRoute} from '../../utils/const.js';
import {movieDetails} from '../../types/types.js';
import {getMoviesList} from '../../store/movies/selectors.js';
import PrivateRoute from '../../routing/private-route.jsx';

const App = (props) => {
  const {moviesList} = props;

  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={`${AppRoute.ROOT}`} render={() => (
          <Main/>
        )}/>;
        <Route exact path={`${AppRoute.LOGIN}`}>
          <LoginScreen />
        </Route>;
        <PrivateRoute exact path={`${AppRoute.FAVORITE}`} render={() => {
          return <UserScreen/>;
        }} />
        <PrivateRoute exact path={`${AppRoute.MOVIE}/:id/review`} render={(routeProps) => {
          return <ReviewScreen {...routeProps}/>;
        }}/>
        <Route exact path={`${AppRoute.MOVIE}/:id`} render={(routeProps) => {
          return <MovieScreen {...routeProps}/>;
        }}/>
        <Route exact path={`${AppRoute.PLAYER}/:id`} render={(routeProps) => {
          const id = routeProps.match.params.id;
          const movie = findItemById(id, moviesList);

          return <PlayerScreen movie={movie}/>;
        }} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  moviesList: PropTypes.arrayOf(movieDetails).isRequired,
};

const mapStateToProps = (state) => ({
  moviesList: getMoviesList(state)
});

export {App};
export default connect(mapStateToProps)(App);
