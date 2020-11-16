import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {featuredMovie, noop} from '../../mocks/mocks.js';
import {MovieCardSmall} from './movie-card-small.jsx';

it(`Should MovieCardSmall component render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <MovieCardSmall
            movie={featuredMovie}
            onCardClick={noop}
          >
          </MovieCardSmall>
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
