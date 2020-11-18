import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {featuredMovie, store, noop, match, PostStatus} from '../../mocks/mocks';
import {ReviewScreen} from './review-screen';

it(`Should render ReviewScreen component correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <ReviewScreen
              match={match}
              movieInfo={featuredMovie}
              status={PostStatus.VALID}
              onSuccessSubmit={noop}
              onLoadMovie={noop}
              onUpdatePostStatus={noop}
              onSubmit={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
