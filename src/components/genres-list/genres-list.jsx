import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {movieDetails} from '../../types/types.js';
import {ActionCreator} from '../../store/reducer.js';
import {connect} from 'react-redux';
import {getUniqueGenresList} from '../../utils/utils.js';

class GenresList extends PureComponent {
  constructor(props) {
    super(props);

    this._handleGenreTabClick = this._handleGenreTabClick.bind(this);
    this.state = {
      activeTab: 0,
    };
  }

  _handleGenreTabClick(index) {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const {moviesList, onClick} = this.props;
    const {activeTab} = this.state;
    const uniqueGenresList = getUniqueGenresList(moviesList);

    return <ul className="catalog__genres-list">
      {uniqueGenresList.map((genre, index) => {
        return <li key={`${genre}-${index}`} className={`catalog__genres-item ${(activeTab === index) ? `catalog__genres-item--active` : ``}`} onClick={() => {
          onClick(genre);
          this._handleGenreTabClick(index);
        }}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>;
      })}
    </ul>;
  }
}

GenresList.propTypes = {
  moviesList: PropTypes.arrayOf(movieDetails).isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick(genre) {
    dispatch(ActionCreator.setActiveGenre(genre));
  },
});

export {GenresList};
export default connect(null, mapDispatchToProps)(GenresList);
