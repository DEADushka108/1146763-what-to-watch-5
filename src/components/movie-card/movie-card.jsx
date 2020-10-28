import React from 'react';
import {connect} from 'react-redux';
import {movieDetails} from '../../types/types';
import {getFeaturedMovie} from '../../store/movies/selectors.js';
import UserBlock from '../user-block/user-block';

const MovieCard = (props) => {
  const {featuredMovie} = props;
  const {title, genre, releaseDate, cover, backgroundImage, backgroundColor} = featuredMovie;

  return <section className="movie-card" style={{background: backgroundColor}}>
    <div className="movie-card__bg">
      <img src={backgroundImage} alt={title} />
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <UserBlock/>
    </header>

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={cover} alt={title} width="218" height="327"/>
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{releaseDate}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"/>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

MovieCard.propTypes = {
  featuredMovie: movieDetails,
};

const mapStateToProps = (state) => ({
  featuredMovie: getFeaturedMovie(state),
});

export {MovieCard};
export default connect(mapStateToProps)(MovieCard);
