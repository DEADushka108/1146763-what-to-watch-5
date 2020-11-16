import React from 'react';
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import history from '../../history/history';
import LoginScreen from '../login-screen/login-screen.jsx';
import UserScreen from '../user-screen/user-screen.jsx';
import MovieScreen from '../movie-screen/movie-screen.jsx';
import ReviewScreen from '../review-screen/review-screen.jsx';
import PlayerScreen from '../player-screen/player-screen.jsx';
import {AppRoute, HttpCode} from '../../utils/const.js';
import PrivateRoute from '../private-route/private-route.jsx';
import ErrorScreen from '../error-screen/error-screen.jsx';
import {getStatus} from '../../store/movies/selectors.js';

const App = (props) => {
  const {status} = props;

  switch (status) {
    case HttpCode.BAD_REQUEST:
      return <ErrorScreen status={status}/>;
    case HttpCode.SERVER_ERROR:
      return <ErrorScreen status={status}/>;
    case HttpCode.OK:
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
              return <PlayerScreen {...routeProps}/>;
            }} />
          </Switch>
        </BrowserRouter>
      );
  }

  return null;
};

App.propTypes = {
  status: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  status: getStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);
