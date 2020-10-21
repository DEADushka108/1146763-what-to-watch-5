import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/reducer';
import {connect} from 'react-redux';

const ShowMoreButton = (props) => {
  const {list, count, onClick} = props;

  return (count < list.length) ? <button className="catalog__button" type="button" onClick={onClick}>Show more</button> : null;
};

ShowMoreButton.propTypes = {
  list: PropTypes.array.isRequired,
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
