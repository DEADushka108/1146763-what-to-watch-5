import React from 'react';
import {moviesList, noop} from '../../mocks/mocks.js';
import renderer from 'react-test-renderer';
import {ShowMoreButton} from './show-more-button.jsx';

it(`Should render ShowMoreButton component correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          list={moviesList}
          count={4}
          onClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
