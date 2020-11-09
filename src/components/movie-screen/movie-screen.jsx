import React, {useEffect} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute, CardCount, TabNames} from '../../utils/const';
import {movieDetails, reviewsDetails} from '../../types/types';
import MoviesList from '../movies-list/movies-list';
import Tabs from '../tabs/tabs.jsx';
import Tab from '../tab/tab.jsx';
import {formatTime, getRatingLevel} from '../../utils/utils';
import {getReviews} from '../../store/reviews/selectors';
import {Operation as ReviewsOperation} from '../../store/reviews/reviews.js';
import {Operation as MoviesOperation} from '../../store/movies/movies.js';
import {connect} from 'react-redux';
import {getActiveMovie, getMoviesList} from '../../store/movies/selectors';
import UserBlock from '../user-block/user-block';
import FavoriteButton from '../favorite-button/favorite-button';

const MovieScreen = (props) => {
  const {movieInfo, moviesList, reviews, match, loadReviews, loadMovie} = props;
  const {id, isFavorite, title, genre, releaseDate, runTime, cover, rating, description, director, cast, backgroundImage, backgroundColor} = movieInfo;
  const {score, count} = rating;
  const similarMoviesList = moviesList.filter((item) => {
    return item.genre === genre && item.title !== title;
  });
  const routeId = Number(match.params.id);

  useEffect(() => {
    loadReviews(routeId);
    if (routeId === id) {
      return;
    }
    loadMovie(routeId);
  }, [routeId]);

  return <React.Fragment>
    <section className="movie-card movie-card--full" style={{
      backgroundColor: `${backgroundColor}`
    }}>
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <Link to={`${AppRoute.ROOT}`} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <UserBlock/>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre} </span>
              <span className="movie-card__year">{releaseDate}</span>
            </p>

            <div className="movie-card__buttons">
              <Link to={`${AppRoute.PLAYER}/${id}`} className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <FavoriteButton id={routeId} isFavorite={isFavorite}/>
              <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={cover} alt={title} width="218" height="327" />
          </div>

          <Tabs>
            <Tab title={TabNames.OVERVIEW}>
              <div className="movie-rating">
                <div className="movie-rating__score">{score}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{getRatingLevel(score)}</span>
                  <span className="movie-rating__count">{count} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{description}</p>

                <p className="movie-card__director"><strong>Director: {director}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {cast.join(`, `)} and other</strong></p>
              </div>
            </Tab>
            <Tab title={TabNames.DETAILS}>
              <div className="movie-card__text movie-card__row">
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Director</strong>
                    <span className="movie-card__details-value">{director}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Starring</strong>
                    <span className="movie-card__details-value">{cast.join(`, `)}</span>
                  </p>
                </div>

                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">{formatTime(runTime)}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Genre</strong>
                    <span className="movie-card__details-value">{genre}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Released</strong>
                    <span className="movie-card__details-value">{releaseDate}</span>
                  </p>
                </div>
              </div>
            </Tab>
            <Tab title={TabNames.REVIEWS}>
              <div className="movie-card__reviews movie-card__row">
                <div className="movie-card__reviews-col">
                  {reviews.map((review) => {
                    const {id: reviewId, author, text, date, rating: reviewRating} = review;
                    const {name} = author;

                    return <div key={reviewId} className="review">
                      <blockquote className="review__quote">
                        <p className="review__text">{text}</p>

                        <footer className="review__details">
                          <cite className="review__author">{name}</cite>
                          <time className="review__date" dateTime={date}>{moment(date).format(`MMMM DD, YYYY`)}</time>
                        </footer>
                      </blockquote>

                      <div className="review__rating">{reviewRating}</div>
                    </div>;
                  })}
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MoviesList movies={similarMoviesList} count={CardCount.SIMILAR}/>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <Link to={`${AppRoute.ROOT}`} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2020 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
};

MovieScreen.propTypes = {
  movieInfo: movieDetails,
  moviesList: PropTypes.arrayOf(movieDetails).isRequired,
  reviews: PropTypes.arrayOf(reviewsDetails).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  loadReviews: PropTypes.func.isRequired,
  loadMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
  moviesList: getMoviesList(state),
  movieInfo: getActiveMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews(id) {
    dispatch(ReviewsOperation.loadReviews(id));
  },
  loadMovie(id) {
    dispatch(MoviesOperation.loadMovie(id));
  }
});

export {MovieScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);

