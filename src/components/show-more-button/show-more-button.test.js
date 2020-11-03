import React from 'react';
import {moviesList} from '../../__test-mock__/movies';
import renderer from 'react-test-renderer';
import {ShowMoreButton} from './show-more-button.jsx';

const noop = () => {};

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
