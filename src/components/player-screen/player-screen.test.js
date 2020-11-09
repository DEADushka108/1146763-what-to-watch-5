import React from 'react';
import renderer from 'react-test-renderer';
import {featuredMovie} from '../../__test-mock__/movies.js';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import PlayerScreen from './player-screen.jsx';
import NameSpace from '../../store/name-space.js';

const noop = () => {};
const match = {
  params: {
    id: `1`,
  }
};
const mockStore = configureStore([]);

it(`Should render PlayerScreen component correctly`, () => {
  const store = mockStore({
    [NameSpace.MOVIES]: {
      activeMovie: featuredMovie
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <PlayerScreen
              match={match}
              loadMovie={noop}
              onExitButtonClick={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
