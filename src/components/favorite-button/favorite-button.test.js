import React from 'react';
import renderer from 'react-test-renderer';
import {FavoriteButton} from './favorite-button';

const noop = () => {};

it(`Should render FavoriteButton component correctly`, () => {
  const tree = renderer
    .create(
        <FavoriteButton
          onClick={noop}
          onFavoriteStatusChange={noop}
          redirect={noop}
          isAuthorized={true}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
