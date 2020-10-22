import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {MAX_MOVIES_COUNT} from '../../utils/const';

const withMoviesCount = (Component) => {
  class WithMoviesCount extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        count: MAX_MOVIES_COUNT,
      };
      this.handleMoviesCountChange = this.handleMoviesCountChange.bind(this);
    }

    handleMoviesCountChange() {
      this.setState({
        count: this.state.count + MAX_MOVIES_COUNT,
      });
    }

    componentDidUpdate(prevProps) {
      if (this.props.activeGenre !== prevProps.activeGenre) {
        this.setState({
          count: MAX_MOVIES_COUNT,
        });
      }
    }

    render() {
      const {count} = this.state;

      return <Component
        {...this.props}
        moviesCount={count}
        onMoviesCountChange={this.handleMoviesCountChange}
      />;
    }
  }

  WithMoviesCount.propTypes = {
    activeGenre: PropTypes.string.isRequired,
  };

  return WithMoviesCount;
};

export default withMoviesCount;
