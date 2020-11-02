import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import {featuredMovie} from '../../__test-mock__/movies.js';
import {userInfo} from '../../__test-mock__/user.js';
import NameSpace from '../../store/name-space.js';
import {MovieCard} from './movie-card.jsx';

const mockStore = configureStore([]);

it(`Should render MovieCard component correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      userInfo,
    }
  });

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
