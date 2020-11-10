import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store, featuredMovie} from '../../mocks/mocks.js';
import {MovieCard} from './movie-card.jsx';

it(`Should render MovieCard component correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <MovieCard
              featuredMovie={featuredMovie}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
