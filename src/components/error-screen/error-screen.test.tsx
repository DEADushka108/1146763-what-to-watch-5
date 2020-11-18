import React from 'react';
import renderer from 'react-test-renderer';
import {HttpCode} from '../../mocks/mocks';
import ErrorScreen from './error-screen';

it(`Should render ErrorScreen component correctly`, () => {
  const tree = renderer
    .create(
        <ErrorScreen
          status={HttpCode.BAD_REQUEST}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
