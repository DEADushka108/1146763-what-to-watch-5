import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Operation as MoviesOperation} from '../../store/movies/movies.js';
import {connect} from 'react-redux';

class FavoriteButton extends PureComponent {
  constructor(props) {
    super(props);
    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  _handleButtonClick() {
    const {id, onClick, isFavorite, onFavoriteStatusChange} = this.props;

    onClick(id, isFavorite ? 0 : 1);
    onFavoriteStatusChange();
  }

  render() {
    const {isFavorite} = this.props;

    return <button className="btn btn--list movie-card__button" type="button" onClick={this._handleButtonClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? `#in-list` : `#add`}/>
      </svg>
      <span>My list</span>
    </button>;
  }
}

FavoriteButton.propTypes = {
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onFavoriteStatusChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick(id, status) {
    dispatch(MoviesOperation.updateMovieStatus(id, status));
  },
});

export {FavoriteButton};
export default connect(null, mapDispatchToProps)(FavoriteButton);
