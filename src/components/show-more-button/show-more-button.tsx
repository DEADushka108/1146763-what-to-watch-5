import React from 'react';
import {ActionCreator} from '../../store/movies/movies';
import {connect} from 'react-redux';

interface Props {
  cardCount: number;
  count: number;
  onClick: () => void;
}

const ShowMoreButton = (props: Props) => {
  const {cardCount, count, onClick} = props;

  return (count < cardCount) ? <button className="catalog__button" type="button" onClick={onClick}>Show more</button> : null;
};

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(ActionCreator.setMoviesCount());
  },
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
