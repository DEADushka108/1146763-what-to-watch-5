import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute, HttpCode, PostStatus, ReviewSettingns} from '../../utils/const.js';
import {movieDetails} from '../../types/types.js';
import {redirectToRoute} from '../../store/redirect/redirect.js';
import UserBlock from '../user-block/user-block.jsx';
import {getPostStatus} from '../../store/reviews/selectors.js';
import {Operation as ReviewsOperation, ActionCreator as ReviewsCreator} from '../../store/reviews/reviews.js';
import {Operation as MoviesOperation} from '../../store/movies/movies.js';
import {connect} from 'react-redux';
import {getActiveMovie} from '../../store/movies/selectors.js';
import {validateRating, validateText} from '../../utils/utils.js';

const REVIEW_RATINGS = [`1`, `2`, `3`, `4`, `5`];

const InitialReviewState = {
  RATING: `0`,
  TEXT: ``,
};

const ReviewScreen = (props) => {
  const {match, movieInfo, loadMovie, status, onSuccessSubmit, onSubmit, updatePostStatus} = props;
  const {id, title, cover, backgroundImage, backgroundColor} = movieInfo;
  const routeId = Number(match.params.id);
  const form = useRef();
  const [rating, setRating] = useState(InitialReviewState.RATING);
  const [text, setText] = useState(InitialReviewState.TEXT);

  const handleRatingChange = useCallback((evt) => {
    setRating(evt.target.value);
  }, [rating]);

  const handleTextInput = useCallback((evt) => {
    setText(evt.target.value);
  }, [text]);

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();
    if (validateText(text) && validateRating(rating)) {
      onSubmit({
        id,
        rating,
        text
      });
      form.current.disabled = true;
    }
    updatePostStatus(PostStatus.INVALID);
  }, [id, status, text, rating]);

  useEffect(() => {
    if (status === HttpCode.OK) {
      updatePostStatus(PostStatus.VALID);
      onSuccessSubmit(`${AppRoute.MOVIE}/${id}`);
      return;
    }
    if (routeId === id) {
      return;
    }
    if (status !== HttpCode.OK) {
      form.current.disabled = false;
      return;
    }
    loadMovie(routeId);
    return;
  }, [routeId, status]);

  return (
    <section className="movie-card movie-card--full" style={{backgroundColor: `${backgroundColor}`}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={cover} alt={title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        {status === HttpCode.SERVER_ERROR &&
        <p className="movie-card__text">
          Error {status} occurred. Please try again later.
        </p>}
        {status === PostStatus.INVALID &&
        <p className="movie-card__text">
          Please rate and write some word about movie `{title}`.
        </p>}
        <form action="#" className="add-review__form" ref={form} onSubmit={handleFormSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {REVIEW_RATINGS.map((star) => {
                return (
                  <React.Fragment key={star}>
                    <input className="rating__input" id={`star-${star}`} type="radio" name="rating" value={`${star}`}
                      checked={star === rating}
                      onChange={handleRatingChange}
                    />
                    <label className="rating__label" htmlFor={`star-${star}`}>{`Rating ${star}`}</label>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text"
              minLength={ReviewSettingns.TEXT.MIN_LENGTH}
              maxLength={ReviewSettingns.TEXT.MAX_LENGTH}
              onChange={handleTextInput}></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

ReviewScreen.propTypes = {
  movieInfo: movieDetails,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  status: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
  onSuccessSubmit: PropTypes.func.isRequired,
  loadMovie: PropTypes.func.isRequired,
  updatePostStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  status: getPostStatus(state),
  movieInfo: getActiveMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(review) {
    dispatch(ReviewsOperation.postReview(review));
  },
  onSuccessSubmit(route) {
    dispatch(redirectToRoute(route));
  },
  loadMovie(id) {
    dispatch(MoviesOperation.loadMovie(id));
  },
  updatePostStatus(status) {
    dispatch(ReviewsCreator.updatePostStatus(status));
  },
});

export {ReviewScreen};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewScreen);
