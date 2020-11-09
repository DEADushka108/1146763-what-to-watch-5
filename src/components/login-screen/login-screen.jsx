import React, {useCallback, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute, HttpCode} from '../../utils/const.js';
import {getAuthorization, getLoginStatus} from '../../store/user/selectors.js';
import {ActionCreator as UserAction, Operation as UserOperation} from '../../store/user/user.js';
import {connect} from 'react-redux';
import {redirectToRoute} from '../../store/redirect/redirect.js';

const LoginScreen = (props) => {
  const {isAuthorized, onSuccessAuthoriztion, onSubmit, onFocus, loginStatus} = props;
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  }, [loginStatus]);

  const handleFocus = useCallback(() => {
    onFocus();
  });

  useEffect(() => {
    if (isAuthorized) {
      onSuccessAuthoriztion(AppRoute.ROOT);
    }
  }, [isAuthorized]);

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
      <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
        {loginStatus === HttpCode.BAD_REQUEST && <div className="sign-in__message">
          <p>Please enter a valid email address</p>
        </div>}
        {loginStatus === HttpCode.SERVER_ERROR && <div className="sign-in__message">
          <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
        </div>}
        <div className="sign-in__fields">
          <div className={`sign-in__field ${loginStatus === HttpCode.BAD_REQUEST ? `sign-in__field--error` : ``}`}>
            <input className="sign-in__input" type="email" inputMode="email" placeholder="Email address" name="user-email"
              id="user-email" onFocus={handleFocus} ref={loginRef} autoComplete="email"/>
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
              id="user-password" autoComplete="current-password" ref={passwordRef}/>
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
  </div>;
};

LoginScreen.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loginStatus: PropTypes.number.isRequired,
  onFocus: PropTypes.func.isRequired,
  onSuccessAuthoriztion: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorization(state),
  loginStatus: getLoginStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(userData) {
    dispatch(UserOperation.login(userData));
  },
  onFocus() {
    dispatch(UserAction.updateLoginStatus(HttpCode.OK));
  },
  onSuccessAuthoriztion(route) {
    dispatch(redirectToRoute(route));
  },
});

export {LoginScreen};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
