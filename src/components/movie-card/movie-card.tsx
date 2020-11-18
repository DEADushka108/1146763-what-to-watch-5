import React from 'react';
import {connect} from 'react-redux';
import {getFeaturedMovie} from '../../store/movies/selectors';
import UserBlock from '../user-block/user-block';
import FavoriteButton from '../favorite-button/favorite-button';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import {Movie} from '../../types/movie';

interface Props {
  featuredMovie: Movie;
}

const MovieCard = (props: Props) => {
  const {featuredMovie} = props;
  const {title, genre, releaseDate, cover, backgroundImage, backgroundColor, id, isFavorite} = featuredMovie;

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
            <Link to={`${AppRoute.PLAYER}/${id}`} className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </Link>
            <FavoriteButton id={id} isFavorite={isFavorite}/>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

const mapStateToProps = (state) => ({
  featuredMovie: getFeaturedMovie(state),
});

export {MovieCard};
export default connect(mapStateToProps)(MovieCard);
