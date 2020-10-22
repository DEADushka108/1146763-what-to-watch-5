import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginScreen from '../login-screen/login-screen.jsx';
import UserScreen from '../user-screen/user-screen.jsx';
import MovieScreen from '../movie-screen/movie-screen.jsx';
import ReviewScreen from '../review-screen/review-screen.jsx';
import PlayerScreen from '../player-screen/player-screen.jsx';
import {findItemById, getRandomArrayElements, filterMoviesByGenre} from '../../utils/utils.js';
import {AppRoute} from '../../utils/const.js';
import {movieDetails} from '../../types/types.js';
import withVideo from '../../hocs/with-video/with-video.jsx';

const PlayerScreenWrapped = withVideo(PlayerScreen);

const App = (props) => {
  const {moviesList, moviesCount, activeGenre} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${AppRoute.ROOT}`} render={({history}) => (
          <Main
            moviesList={moviesList}
            filteredMoviesList={filterMoviesByGenre(moviesList, activeGenre)}
            onMovieCardClick={(movieId) => history.push(`${AppRoute.MOVIE}/${movieId}`)}
            moviesCount={moviesCount}
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

          return <MovieScreen
            movieInfo={movie}
            filteredMoviesList={filterMoviesByGenre(moviesList, activeGenre)}
            moviesCount={moviesCount}
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
};

const mapStateToProps = (state) => ({
  moviesList: state.moviesList,
  activeGenre: state.activeGenre,
  moviesCount: state.moviesCount,
});

export {App};
export default connect(mapStateToProps)(App);
