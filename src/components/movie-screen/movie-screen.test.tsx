import React from 'react';
import {store, featuredMovie, moviesList, reviews, match, noop} from '../../mocks/mocks';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {MovieScreen} from './movie-screen';
import {Provider} from 'react-redux';

it(`Should render MovieScreen component correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <MovieScreen
            match={match}
            movieInfo={featuredMovie}
            moviesList={moviesList}
            reviews={reviews}
            onLoadMovie={noop}
            onLoadReviews={noop}
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
