import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveGenres = (Component) => {
  class WithActiveGenres extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeGenre: this.props.genre || `All genres`,
      };
      this._handleGenreChange = this._handleGenreChange.bind(this);
    }

    _handleGenreChange(genre) {
      this.setState({
        activeGenre: genre,
      });
    }

    render() {
      const {activeGenre} = this.state;

      return <Component
        {...this.props}
        activeGenre={activeGenre}
        onGenreChange={this._handleGenreChange}
      />;
    }
  }

  WithActiveGenres.propTypes = {
    genre: PropTypes.string,
  };

  return WithActiveGenres;
};

export default withActiveGenres;
