import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withStatus = (Component) => {
  class WithStatus extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFavorite: this.props.isFavorite,
      };

      this._handleFavoriteStatusChange = this._handleFavoriteStatusChange.bind(this);
    }

    _handleFavoriteStatusChange() {
      const {isFavorite} = this.state;

      this.setState({
        isFavorite: !isFavorite,
      });
    }

    componentDidUpdate(prevProps) {
      const {isFavorite: prevStatus} = prevProps;
      const {isFavorite: currentStatus} = this.props;

      if (currentStatus !== prevStatus) {
        this.setState({
          isFavorite: currentStatus,
        });
      }
    }

    render() {
      const {isFavorite} = this.state;

      return <Component
        {...this.props}
        isFavorite={isFavorite}
        onFavoriteStatusChange={this._handleFavoriteStatusChange}
      />;
    }
  }

  WithStatus.propTypes = {
    isFavorite: PropTypes.bool.isRequired,
  };

  return WithStatus;
};

export default withStatus;
