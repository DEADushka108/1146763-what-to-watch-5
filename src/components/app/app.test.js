import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {featuredMovie, moviesList} from '../../__test-mock__/movies.js';
import {reviews} from '../../__test-mock__/reviews.js';
import {userInfo} from '../../__test-mock__/user.js';
import NameSpace from '../../store/name-space.js';
import App from './app';

const mockStore = configureStore([]);

it(`Should render App component correctly`, () => {
  const store = mockStore({
    [NameSpace.MOVIES]: {
      featuredMovie,
      moviesList,
      activeGenre: `All genres`,
      moviesCount: 8,
      status: 200,
      activeMovie: {},
    },
    [NameSpace.REVIEWS]: {
      reviews,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      userInfo,
    }
  });

  const tree = renderer
    .create((
      <Provider store={store}>
        <App
          movesList={moviesList}
        />
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
