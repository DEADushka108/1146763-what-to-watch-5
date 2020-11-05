import React, {useEffect} from 'react';
import MoviesList from '../movies-list/movies-list';
import PropTypes from 'prop-types';
import {movieDetails} from '../../types/types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import {getFavoriteList} from '../../store/user/selectors';
import {connect} from 'react-redux';
import UserBlock from '../user-block/user-block';
import {Operation as UserOperation} from '../../store/user/user.js';

const UserScreen = (props) => {
  const {moviesList, loadFavoriteList} = props;

  useEffect(() => {
    loadFavoriteList();
  }, [moviesList.length]);

  return <React.Fragment>
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList movies={moviesList} count={moviesList.length}/>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
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

UserScreen.propTypes = {
  moviesList: PropTypes.arrayOf(movieDetails).isRequired,
  loadFavoriteList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moviesList: getFavoriteList(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteList() {
    dispatch(UserOperation.loadFavoriteList());
  }
});

export {UserScreen};
export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);

