import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const.js';
import PropTypes from 'prop-types';

const REVIEW_RATINGS = [`1`, `2`, `3`, `4`, `5`];

export default class ReviewScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: `3`,
      reviewText: null,
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {
    const {movieInfo} = this.props;
    const {id, title, cover, poster} = movieInfo;
    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={cover} alt={title} />
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

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={poster} alt={title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={this.handleSubmit}>
            <div className="rating">
              <div className="rating__stars">
                {REVIEW_RATINGS.map((rating) => {
                  return (
                    <React.Fragment key={rating}>
                      <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={`${rating}`}
                        checked={rating === this.state.rating}
                        onChange={(evt) => {
                          const value = evt.target.value;
                          this.setState({
                            rating: value,
                          });
                        }}
                      />
                      <label className="rating__label" htmlFor={`star-${rating}`}> {`Rating ${rating}`}</label>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" onChange={this.handleFieldChange} name="reviewText" id="review-text" placeholder="Review text"></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}

ReviewScreen.propTypes = {
  movieInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
};
