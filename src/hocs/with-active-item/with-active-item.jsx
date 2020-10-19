import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class withActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: 0,
      }
      this.handleActiveItemChange = this.handleActiveItemChange.bind(this);
    }

    handleActiveItemChange(index) {
      this.setState({
        activeItem: index,
      });
    }

    render() {
      const {activeItem} = this.state;

      return <Component
        {...this.props}
        activeItem={activeItem}
        onActiveItemChange={this.handleActiveItemChange}
      />;
    }
  }

  withActiveItem.propTypes = {};

  return withActiveItem;
};

export default withActiveItem;
