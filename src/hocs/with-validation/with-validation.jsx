import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const Review = {
  MIN_RATING: 1,
  TEXT: {
    MIN_LENGTH: 50,
    MAX_LENGTH: 400,
  },
};

const validateReview = (rating, text) => {
  return (Number(rating) >= Review.MIN_RATING) && (text.length >= Review.TEXT.MIN_LENGTH && text.length <= Review.TEXT.MAX_LENGTH);
};

const withValidation = (Component) => {
  class WithValidation extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isValid: false,
      };

      this._handleValidation = this._handleValidation.bind(this);
    }

    _handleValidation() {
      const {rating, text} = this.props;

      if (validateReview(rating, text)) {
        this.setState({
          isValid: true,
        });
        return;
      }

      this.setState({
        isValid: false,
      });
    }

    render() {
      const {isValid} = this.state;

      return <Component
        {...this.props}
        isValid={isValid}
        onValidityCheck={this._handleValidation}
      />;
    }
  }

  WithValidation.propTypes = {
    rating: PropTypes.string,
    text: PropTypes.string,
  };

  return WithValidation;
};

export default withValidation;
