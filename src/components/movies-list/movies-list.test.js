import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space.js';
import {MemoryRouter} from 'react-router-dom';
import {moviesList} from '../../__test-mock__/movies.js';
import MoviesList from './movies-list.jsx';

const mockStore = configureStore([]);

it(`Should render MoviesList component correctly`, () => {
  const store = mockStore({
    [NameSpace.MOVIES]: {
      moviesList,
    }
  });

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
