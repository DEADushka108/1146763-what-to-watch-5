import React from 'react';
import PropTypes from 'prop-types';

const ShowMoreButton = (props) => {
  const {list, count, onClick} = props;

  return (count < list.length) ? <button className="catalog__button" type="button" onClick={onClick}>Show more</button> : null;
};

ShowMoreButton.propTypes = {
  list: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ShowMoreButton;
