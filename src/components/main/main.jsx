import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../movies-list/movies-list.jsx';
import {movieDetails} from '../../types/types.js';
import GenresList from '../genres-list/genres-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import {getFilteredList, getMoviesCount} from '../../store/movies/selectors.js';
import {connect} from 'react-redux';


const Main = (props) => {
  const {filteredMoviesList, moviesCount} = props;

  return <React.Fragment>
    <MovieCard/>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList/>

        <MoviesList movies={filteredMoviesList} count={moviesCount}/>

        <div className="catalog__more">
          <ShowMoreButton cardCount={filteredMoviesList.length} count={moviesCount} />
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
  filteredMoviesList: PropTypes.arrayOf(movieDetails).isRequired,
  moviesCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  filteredMoviesList: getFilteredList(state),
  moviesCount: getMoviesCount(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
