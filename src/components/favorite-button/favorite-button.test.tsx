import React from 'react';
import renderer from 'react-test-renderer';
import {noop} from '../../mocks/mocks';
import {FavoriteButton} from './favorite-button';

it(`Should render FavoriteButton component correctly`, () => {
  const tree = renderer
    .create(
        <FavoriteButton
          id={1}
          onClick={noop}
          isFavorite={false}
          isAuthorized={true}
          onUnauthorizedClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
