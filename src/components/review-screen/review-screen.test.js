import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space.js';
import {featuredMovie} from '../../__test-mock__/movies';
import {userInfo} from '../../__test-mock__/user.js';
import {ReviewScreen} from './review-screen.jsx';
import {HttpCode} from '../../utils/const.js';

const mockStore = configureStore([]);
const match = {
  params: {
    id: `1`,
  },
};

const noop = () => {};

it(`Should render ReviewScreen component correctly`, () => {
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
            <ReviewScreen
              match={match}
              movieInfo={featuredMovie}
              status={HttpCode.OK}
              onSubmit={noop}
              redirect={noop}
              loadMovie={noop}
              updatePostStatus={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
