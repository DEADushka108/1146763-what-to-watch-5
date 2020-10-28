import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../movies-list/movies-list.jsx';
import {movieDetails} from '../../types/types.js';
import GenresList from '../genres-list/genres-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import withActiveGenre from '../../hocs/with-active-genre/with-active-genre.jsx';

const GenresListWrapped = withActiveGenre(GenresList);

const Main = (props) => {
  const {filteredMoviesList, moviesCount, onMovieCardClick, activeGenre} = props;

  return <React.Fragment>
    <MovieCard/>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresListWrapped genre={activeGenre}/>

        <MoviesList movies={filteredMoviesList} count={moviesCount} onClick={onMovieCardClick}/>

        <div className="catalog__more">
          <ShowMoreButton list={filteredMoviesList} count={moviesCount} />
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2020 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  filteredMoviesList: PropTypes.arrayOf(movieDetails).isRequired,
  moviesCount: PropTypes.number.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default Main;
