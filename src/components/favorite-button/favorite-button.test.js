import React from 'react';
import renderer from 'react-test-renderer';
import {noop} from '../../mocks/mocks';
import {FavoriteButton} from './favorite-button';

it(`Should render FavoriteButton component correctly`, () => {
  const tree = renderer
    .create(
        <FavoriteButton
          onClick={noop}
          onFavoriteStatusChange={noop}
          onUnauthorizedClick={noop}
          isAuthorized={true}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
