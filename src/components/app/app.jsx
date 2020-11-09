import React from 'react';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main.jsx';
import history from '../../routing/history';
import LoginScreen from '../login-screen/login-screen.jsx';
import UserScreen from '../user-screen/user-screen.jsx';
import MovieScreen from '../movie-screen/movie-screen.jsx';
import ReviewScreen from '../review-screen/review-screen.jsx';
import PlayerScreen from '../player-screen/player-screen.jsx';
import {AppRoute} from '../../utils/const.js';
import PrivateRoute from '../../routing/private-route.jsx';

const App = () => {

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
};

export default App;
