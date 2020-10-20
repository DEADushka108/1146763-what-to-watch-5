import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute, MOVIE_SCREEN_COUNT} from '../../utils/const';
import {movieDetails} from '../../types/types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/reducer.js';

const MovieCardSmall = (props) => {
  const {movieInfo, children, onPlayStatusChange, onClick, onGenreClick} = props;
  const {id, title, genre} = movieInfo;
  let timeout;

  return <article className="small-movie-card catalog__movies-card" >
    <div className="small-movie-card__image" onClick={() => {
      onClick(id);
      onGenreClick(genre, MOVIE_SCREEN_COUNT);
    }}
    onMouseEnter={() => {
      timeout = setTimeout(onPlayStatusChange, 1000);
    }} onMouseLeave={() => {
      clearTimeout(timeout);
      onPlayStatusChange();
    }}>
      {children}
    </div>
    <h3 className="small-movie-card__title">
      <Link to={`${AppRoute.MOVIE}/${id}`} className="small-movie-card__link">{title}</Link>
    </h3>
  </article>;
};

MovieCardSmall.propTypes = {
  movieInfo: movieDetails,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onPlayStatusChange: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre, count) {
    dispatch(ActionCreator.setActiveGenre(genre, count));
  },
});

export {MovieCardSmall};
export default connect(null, mapDispatchToProps)(MovieCardSmall);
