import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {noop} from '../../mocks/mocks';
import {LoginScreen} from './login-screen';

it(`Should render LoginScreen component correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <LoginScreen
            isAuthorized={false}
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
