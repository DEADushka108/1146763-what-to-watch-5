import React from 'react';
import MoviesList from '../movies-list/movies-list';
import GenresList from '../genres-list/genres-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import MovieCard from '../movie-card/movie-card';
import {getFilteredList, getMoviesCount} from '../../store/movies/selectors';
import {connect} from 'react-redux';
import { Movie } from '../../types/movie';

interface Props {
  filteredMoviesList: Movie[];
  moviesCount: number;
}

const Main = (props: Props) => {
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

const mapStateToProps = (state) => ({
  filteredMoviesList: getFilteredList(state),
  moviesCount: getMoviesCount(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
