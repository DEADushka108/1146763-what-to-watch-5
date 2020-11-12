import React from 'react';
import PropTypes from 'prop-types';

const ErrorScreen = (props) => {
  const {status} = props;

  return <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <h1 className="page-title user-page__title visually-hidden">Error</h1>
    </header>

    <section className="catalog">
      <h2 className="catalog__title">Error {status} occurred. Please try again later.</h2>
    </section>

    <footer className="page-footer">
      <div className="logo">
        <a href="/" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2020 What to watch Ltd.</p>
      </div>
    </footer>
  </div>;
};

ErrorScreen.propTypes = {
  status: PropTypes.number.isRequired,
};

export default ErrorScreen;
