import React from 'react';
import renderer from 'react-test-renderer';
import history from '../../routing/history';
import {featuredMovie} from '../../__test-mock__/movies.js';
import PlayerScreen from './player-screen.jsx';

it(`Should render PlayerScreen component correctly`, () => {
  const tree = renderer
    .create(
        <PlayerScreen
          history={history}
          movie={featuredMovie}
        >
        </PlayerScreen>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
