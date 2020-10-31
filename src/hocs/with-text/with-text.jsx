import React, {PureComponent} from 'react';

const withText = (Component) => {
  class WithText extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        text: ``,
      };

      this._handleTextInput = this._handleTextInput.bind(this);
    }

    _handleTextInput(evt) {
      this.setState({
        text: evt.target.value,
      });
    }

    render() {
      const {text} = this.state;

      return <Component
        {...this.props}
        text={text}
        onTextInput={this._handleTextInput}
      />;
    }
  }

  WithText.propTypes = {};

  return WithText;
};

export default withText;
