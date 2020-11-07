import React from 'react';
import renderer from 'react-test-renderer';
import {featuredMovie} from '../../__test-mock__/movies.js';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import PlayerScreen from './player-screen.jsx';

const noop = () => {};
const mockStore = configureStore([]);

it(`Should render PlayerScreen component correctly`, () => {
  const store = mockStore({});
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <PlayerScreen
              movie={featuredMovie}
              redirect={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
