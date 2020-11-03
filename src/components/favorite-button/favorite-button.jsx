import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Operation as MoviesOperation} from '../../store/movies/movies.js';
import {connect} from 'react-redux';
import {getAuthorization} from '../../store/user/selectors.js';
import {redirectToRoute} from '../../store/redirect/redirect.js';
import {AppRoute} from '../../utils/const.js';

class FavoriteButton extends PureComponent {
  constructor(props) {
    super(props);
    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  _handleButtonClick() {
    const {id, onClick, isFavorite, onFavoriteStatusChange, isAuthorized, redirect} = this.props;

    if (!isAuthorized) {
      redirect(AppRoute.LOGIN);
      return;
    }

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
  isAuthorized: PropTypes.bool.isRequired,
  redirect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorization(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick(id, status) {
    dispatch(MoviesOperation.updateMovieStatus(id, status));
  },
  redirect(route) {
    dispatch(redirectToRoute(route));
  },
});

export {FavoriteButton};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
