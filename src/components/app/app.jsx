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
import {findItemById, filterMoviesByGenre} from '../../utils/utils.js';
import {AppRoute} from '../../utils/const.js';
import {movieDetails} from '../../types/types.js';
import withVideo from '../../hocs/with-video/with-video.jsx';
import {getMoviesList, getMoviesCount, getActiveGenre} from '../../store/movies/selectors.js';
import PrivateRoute from '../../routing/private-route.jsx';
import {Operation as ReviewsOperation} from '../../store/reviews/reviews';

const PlayerScreenWrapped = withVideo(PlayerScreen);

const App = (props) => {
  const {moviesList, moviesCount, activeGenre, loadReviews} = props;

  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={`${AppRoute.ROOT}`} render={() => (
          <Main
            activeGenre={activeGenre}
            filteredMoviesList={filterMoviesByGenre(moviesList, activeGenre)}
            onMovieCardClick={(movieId) => history.push(`${AppRoute.MOVIE}/${movieId}`)}
            moviesCount={moviesCount}
          />
        )}/>;
        <Route exact path={`${AppRoute.LOGIN}`}>
          <LoginScreen />
        </Route>
        <PrivateRoute exact path={`${AppRoute.FAVORITE}`} render={() => (
          <UserScreen
            onMovieCardClick={(movieId) => history.push(`${AppRoute.MOVIE}/${movieId}`)}
          />
        )} />
        <PrivateRoute exact path={`${AppRoute.MOVIE}/:id/review`} render={(routeProps) => {
          const id = routeProps.match.params.id;
          const movie = findItemById(id, moviesList);

          return <ReviewScreen movieInfo={movie}/>;
        }}/>
        <Route exact path={`${AppRoute.MOVIE}/:id`} render={(routeProps) => {
          const id = routeProps.match.params.id;
          const movie = findItemById(id, moviesList);
          loadReviews(id);

          return <MovieScreen
            movieInfo={movie}
            onMovieCardClick={(movieId) => routeProps.history.push(`${AppRoute.MOVIE}/${movieId}`)}/>;
        }}/>
        <Route exact path={`${AppRoute.PLAYER}/:id`} render={(routeProps) => {
          const id = routeProps.match.params.id;
          const movie = findItemById(id, moviesList);

          return <PlayerScreenWrapped movie={movie} isPreview={false} isPlaying={false} isMuted={false}/>;
        }} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  moviesList: PropTypes.arrayOf(movieDetails).isRequired,
  activeGenre: PropTypes.string.isRequired,
  moviesCount: PropTypes.number.isRequired,
  loadReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moviesList: getMoviesList(state),
  activeGenre: getActiveGenre(state),
  moviesCount: getMoviesCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews(id) {
    dispatch(ReviewsOperation.loadReviews(id));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
