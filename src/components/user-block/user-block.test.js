import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {authorizationStatus, userInfo} from '../../mocks/mocks.js';
import {UserBlock} from './user-block.jsx';

it(`Should render UserBlock component correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <UserBlock
            authorizationStatus={authorizationStatus}
            isAuthorized={true}
            userInfo={userInfo}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
