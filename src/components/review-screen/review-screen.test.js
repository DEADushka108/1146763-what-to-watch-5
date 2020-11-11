import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {featuredMovie, store, noop, match, PostStatus} from '../../mocks/mocks.js';
import {ReviewScreen} from './review-screen.jsx';

it(`Should render ReviewScreen component correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <ReviewScreen
              match={match}
              movieInfo={featuredMovie}
              status={PostStatus.VALID}
              onSubmit={noop}
              onSuccessSubmit={noop}
              loadMovie={noop}
              updatePostStatus={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
