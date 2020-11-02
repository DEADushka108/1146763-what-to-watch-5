import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {authorizationStatus} from '../../__test-mock__/user.js';
import {LoginScreen} from './login-screen.jsx';

const noop = () => {};

it(`Should render LoginScreen component correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <LoginScreen
            isAuthorized={false}
            authorizationStatus={authorizationStatus}
            loginStatus={200}
            onSubmit={noop}
            onFocus={noop}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
