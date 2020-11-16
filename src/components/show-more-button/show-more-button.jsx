import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/movies/movies';
import {connect} from 'react-redux';

const ShowMoreButton = (props) => {
  const {cardCount, count, onClick} = props;

  return (count < cardCount) ? <button className="catalog__button" type="button" onClick={onClick}>Show more</button> : null;
};

ShowMoreButton.propTypes = {
  cardCount: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(ActionCreator.setMoviesCount());
  },
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
