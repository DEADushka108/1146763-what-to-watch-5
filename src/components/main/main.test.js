import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import {featuredMovie, moviesList} from '../../__test-mock__/movies.js';
import {userInfo} from '../../__test-mock__/user.js';
import NameSpace from '../../store/name-space.js';
import {Main} from './main';

const mockStore = configureStore([]);

it(`Should render Main component correctly`, () => {
  const store = mockStore({
    [NameSpace.MOVIES]: {
      featuredMovie,
      moviesList,
      activeGenre: `All genres`,
      moviesCount: 8,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      userInfo,
    }
  });
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <Main
            activeGenre={`All genres`}
            filteredMoviesList={moviesList}
            moviesList={moviesList}
            moviesCount={8}
          />
        </MemoryRouter>
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
