import React, {PureComponent} from 'react';

const withRating = (Component) => {
  class WithRating extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: `0`,
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });
    }

    render() {
      const {rating} = this.state;

      return <Component
        {...this.props}
        rating={rating}
        onRatingChange={this._handleRatingChange}
      />;
    }
  }

  WithRating.proptypes = {};

  return WithRating
};

export default withRating;
