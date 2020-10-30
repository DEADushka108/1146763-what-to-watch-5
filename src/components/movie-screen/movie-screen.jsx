import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute, MOVIE_SCREEN_COUNT} from '../../utils/const';
import {movieDetails, reviewsDetails} from '../../types/types';
import MoviesList from '../movies-list/movies-list';
import Tabs from '../tabs/tabs.jsx';
import Tab from '../tab/tab.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {getRatingLevel} from '../../utils/utils';
import {getReviews} from '../../store/reviews/selectors';
import {connect} from 'react-redux';
import {getMoviesList} from '../../store/movies/selectors';
import UserBlock from '../user-block/user-block';
import withStatus from '../../hocs/with-status/with-status';
import FavoriteButton from '../favorite-button/favorite-button';

const TabsWrapped = withActiveItem(Tabs);
const FavoriteButtonWrapped = withStatus(FavoriteButton);

const TabNames = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const MovieScreen = (props) => {
  const {movieInfo, moviesList, reviews} = props;
  const {id, isFavorite, title, genre, releaseDate, runTime, cover, rating, description, director, cast, backgroundImage, backgroundColor} = movieInfo;
  const {score, count} = rating;
  const similarMoviesList = moviesList.filter((item) => {
    return item.genre === genre && item.title !== title;
  });

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
              <FavoriteButtonWrapped id={id} isFavorite={isFavorite}/>
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

          <TabsWrapped>
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
                    <span className="movie-card__details-value">{runTime}</span>
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
                          <time className="review__date" dateTime={date}>{date}</time>
                        </footer>
                      </blockquote>

                      <div className="review__rating">{reviewRating}</div>
                    </div>;
                  })}
                </div>
              </div>
            </Tab>
          </TabsWrapped>
        </div>
      </div>
    </section>

    <div className="page-content">
      {(similarMoviesList === 0) ? null :
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList movies={similarMoviesList} count={MOVIE_SCREEN_COUNT}/>
        </section>
      }
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
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
  moviesList: getMoviesList(state),
});

export {MovieScreen};
export default connect(mapStateToProps)(MovieScreen);
