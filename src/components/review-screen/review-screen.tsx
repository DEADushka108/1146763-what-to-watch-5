import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, HttpCode, PostStatus, ReviewSettingns} from '../../utils/const';
import {redirectToRoute} from '../../store/redirect/redirect';
import UserBlock from '../user-block/user-block';
import {getPostStatus} from '../../store/reviews/selectors';
import {Operation as ReviewsOperation, ActionCreator as ReviewsCreator} from '../../store/reviews/reviews';
import {Operation as MoviesOperation} from '../../store/movies/movies';
import {connect} from 'react-redux';
import {getActiveMovie} from '../../store/movies/selectors';
import {validateRating, validateText} from '../../utils/utils';
import {Match} from '../../types/match';
import {Movie} from '../../types/movie';

interface Props {
  match: Match;
  movieInfo: Movie;
  status: number;
  onLoadMovie: (id: number) => void;
  onSubmit: ({id, rating, text}: {id: number, rating: string, text: string}) => void;
  onSuccessSubmit: (route: string) => void;
  onUpdatePostStatus: (status: number) => void;
}

const REVIEW_RATINGS = [`5`, `4`, `3`, `2`, `1`];

const InitialReviewState = {
  RATING: `0`,
  TEXT: ``,
};

const ReviewScreen = (props: Props) => {
  const {match, movieInfo, onLoadMovie, status, onSuccessSubmit, onSubmit, onUpdatePostStatus} = props;
  const {id, title, cover, backgroundImage, backgroundColor} = movieInfo;
  const routeId = Number(match.params.id);
  const form = useRef<HTMLFormElement>();
  const [rating, setRating] = useState(InitialReviewState.RATING);
  const [text, setText] = useState(InitialReviewState.TEXT);
  const [isValid, setValid] = useState(false);

  const handleRatingChange = useCallback((evt) => {
    setRating(evt.target.value);
    setValid(validateText(text) && validateRating(rating));
  }, [rating, text]);

  const handleTextInput = useCallback((evt) => {
    setText(evt.target.value);
    setValid(validateText(text) && validateRating(rating));
  }, [text, rating]);

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();
    if (validateText(text) && validateRating(rating)) {
      onSubmit({
        id,
        rating,
        text
      });
      form.current.disabled = true;
      return;
    }
    onUpdatePostStatus(PostStatus.INVALID);
  }, [status, text, rating]);

  useEffect(() => {
    if (status === HttpCode.OK) {
      onUpdatePostStatus(PostStatus.VALID);
      onSuccessSubmit(`${AppRoute.MOVIE}/${id}`);
      return;
    }
    if (routeId === id) {
      form.current.disabled = false;
      return;
    }
    onLoadMovie(routeId);
    return;
  }, [routeId, status]);

  useEffect(() => {
    onUpdatePostStatus(PostStatus.VALID);
  }, [routeId]);

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
        {status === HttpCode.BAD_REQUEST &&
        <p className="movie-card__text">
          Somthing goes wrong. Please check the Internet connection and try again later.
        </p>}
        {status === PostStatus.INVALID &&
        <p className="movie-card__text">
          Please rate and write some word about movie &quot;{title}&quot;.
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
              <button className="add-review__btn" type="submit" disabled={!isValid}>Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
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
  onLoadMovie(id) {
    dispatch(MoviesOperation.loadMovie(id));
  },
  onUpdatePostStatus(status) {
    dispatch(ReviewsCreator.updatePostStatus(status));
  },
});

export {ReviewScreen};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewScreen);
