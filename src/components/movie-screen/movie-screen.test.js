import React from 'react';
import configurateStore from 'redux-mock-store';
import {featuredMovie, moviesList} from '../../__test-mock__/movies.js';
import {reviews} from '../../__test-mock__/reviews.js';
import {userInfo, authorizationStatus} from '../../__test-mock__/user.js';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import NameSpace from '../../store/name-space.js';
import {MovieScreen} from './movie-screen.jsx';
import {Provider} from 'react-redux';

const mockStore = configurateStore([]);
const match = {
  params: {
    id: `1`,
  }
};

const noop = () => {};

it(`Should render MovieScreen component correctly`, () => {
  const store = mockStore({
    [NameSpace.MOVIES]: {
      featuredMovie,
      moviesList,
      activeGenre: `All genres`,
      shownMoviesAmount: 8,
    },
    [NameSpace.REVIEWS]: {
      reviews
    },
    [NameSpace.USER]: {
      authorizationStatus,
      userInfo,
    }
  });
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <MovieScreen
            match={match}
            movieInfo={featuredMovie}
            moviesList={moviesList}
            reviews={reviews}
            loadMovie={noop}
            loadReviews={noop}
          />
        </MemoryRouter>
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    });

  expect(tree).toMatchSnapshot();
});
