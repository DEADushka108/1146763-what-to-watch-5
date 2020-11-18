import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store, moviesList} from '../../mocks/mocks';
import MoviesList from './movies-list';

it(`Should render MoviesList component correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <MoviesList
              movies={moviesList}
              count={moviesList.length}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
