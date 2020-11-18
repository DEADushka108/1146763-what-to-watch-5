import React from 'react';
import {noop} from '../../mocks/mocks';
import renderer from 'react-test-renderer';
import {ShowMoreButton} from './show-more-button';

it(`Should render ShowMoreButton component correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          cardCount={8}
          count={4}
          onClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
