import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute, HttpCode} from '../../utils/const.js';
import {movieDetails} from '../../types/types.js';
import {redirectToRoute} from '../../store/redirect/redirect-action.js';
import UserBlock from '../user-block/user-block.jsx';
import {getPostStatus} from '../../store/reviews/selectors.js';
import {Operation as ReviewsOperation} from '../../store/reviews/reviews.js';
import {connect} from 'react-redux';

const REVIEW_RATINGS = [`1`, `2`, `3`, `4`, `5`];

class ReviewScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {status: prevStatus} = prevProps;
    const {match, status} = this.props;
    const id = Number(match.params.id);

    if (status !== prevStatus && status === HttpCode.OK) {
      redirectToRoute(`${AppRoute.MOVIE}/${id}`);
    }
  }

  handleSubmit(evt) {
    const {match, rating, text, onSubmit} = this.props;
    const id = Number(match.params.id);

    evt.preventDefault();

    onSubmit({
      id,
      rating,
      text,
    });
  }

  render() {
    const {movieInfo, status, isValid, onRatingChange, onTextInput, onValidityCheck, rating} = this.props;
    const {id, title, cover, backgroundImage, backgroundColor} = movieInfo;
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
          {status === HttpCode.SERVER_ERROR && <p className="movie-card__text">Error {status} occurred. Please try again later.</p>}
          <form action="#" className="add-review__form" onSubmit={this.handleSubmit}>
            <div className="rating">
              <div className="rating__stars">
                {REVIEW_RATINGS.map((star) => {
                  return (
                    <React.Fragment key={star}>
                      <input className="rating__input" id={`star-${star}`} type="radio" name="rating" value={`${star}`}
                        checked={star === rating}
                        onChange={(evt) => {
                          onRatingChange(evt);
                          onValidityCheck();
                        }}
                      />
                      <label className="rating__label" htmlFor={`star-${star}`}> {`Rating ${star}`}</label>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text" onChange={(evt) => {
                onTextInput(evt);
                onValidityCheck();
              }}></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" disabled={!isValid}>Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}

ReviewScreen.propTypes = {
  movieInfo: movieDetails,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  rating: PropTypes.string,
  text: PropTypes.string,
  isValid: PropTypes.bool,
  status: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onTextInput: PropTypes.func.isRequired,
  onValidityCheck: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  status: getPostStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(review) {
    dispatch(ReviewsOperation.postReview(review));
  }
});

export {ReviewScreen};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewScreen);
