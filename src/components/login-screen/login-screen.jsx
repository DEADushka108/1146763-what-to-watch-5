import React, {createRef, PureComponent} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from '../../routing/history.js';
import {AppRoute} from '../../utils/const.js';
import {getAuthorization} from '../../store/user/selectors.js';
import {Operation as UserOperation} from '../../store/user/user.js';
import {connect} from 'react-redux';

class LoginScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._loginRef = createRef();
    this._passwordRef = createRef();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidUpdate() {
    const {isAuthorized} = this.props;

    if (isAuthorized) {
      history.push(AppRoute.ROOT);
    }
  }

  _handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      login: this._loginRef.current.value,
      password: this._passwordRef.current.value,
    });
  }

  render() {
    return <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={`${AppRoute.ROOT}`} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={this._handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={this._loginRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={this._passwordRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2020 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  }
};

LoginScreen.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorization(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(userData) {
    dispatch(UserOperation.login(userData));
  },
});

export {LoginScreen}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
