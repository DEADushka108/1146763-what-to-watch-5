import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../utils/const';
import {movieDetails} from '../../types/types';
import {redirectToRoute} from '../../store/redirect/redirect.js';
import {connect} from 'react-redux';

const MovieCardSmall = (props) => {
  const {movie, children, onPlayStatusChange, redirect} = props;
  const {id, title} = movie;
  let timeout;

  return <article className="small-movie-card catalog__movies-card" >
    <div className="small-movie-card__image" onClick={() => {
      redirect(`${AppRoute.MOVIE}/${id}`);
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
  movie: movieDetails,
  redirect: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onPlayStatusChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  redirect(route) {
    dispatch(redirectToRoute(route));
  },
});

export {MovieCardSmall};
export default connect(null, mapDispatchToProps)(MovieCardSmall);
