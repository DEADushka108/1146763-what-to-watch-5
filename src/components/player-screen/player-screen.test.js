import React from 'react';
import renderer from 'react-test-renderer';
import {store, match, noop} from '../../mocks/mocks.js';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import PlayerScreen from './player-screen.jsx';

it(`Should render PlayerScreen component correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <PlayerScreen
              match={match}
              loadMovie={noop}
              onExitButtonClick={noop}
              onLoadMovie={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
