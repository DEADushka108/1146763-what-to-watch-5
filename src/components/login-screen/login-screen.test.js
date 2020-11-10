import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {AuthorizationStatus, noop} from '../../mocks/mocks.js';
import {LoginScreen} from './login-screen.jsx';

it(`Should render LoginScreen component correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <LoginScreen
            isAuthorized={false}
            authorizationStatus={AuthorizationStatus.AUTH}
            loginStatus={200}
            onSubmit={noop}
            onFocus={noop}
            onSuccessAuthoriztion={noop}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
