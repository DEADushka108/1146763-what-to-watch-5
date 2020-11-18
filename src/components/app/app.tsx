import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import history from '../../history/history';
import LoginScreen from '../login-screen/login-screen';
import UserScreen from '../user-screen/user-screen';
import MovieScreen from '../movie-screen/movie-screen';
import ReviewScreen from '../review-screen/review-screen';
import PlayerScreen from '../player-screen/player-screen';
import {AppRoute, HttpCode} from '../../utils/const';
import PrivateRoute from '../private-route/private-route';
import ErrorScreen from '../error-screen/error-screen';
import {getStatus} from '../../store/movies/selectors';

interface Props {
  status: number;
}

const App = (props: Props) => {
  const {status} = props;

  switch (status) {
    case HttpCode.BAD_REQUEST:
      return <ErrorScreen status={status}/>;
    case HttpCode.SERVER_ERROR:
      return <ErrorScreen status={status}/>;
    case HttpCode.OK:
      return (
        <Router history={history}>
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
        </Router>
      );
  }

  return null;
};

const mapStateToProps = (state) => ({
  status: getStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);
