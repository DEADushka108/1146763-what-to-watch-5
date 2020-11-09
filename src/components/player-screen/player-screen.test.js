import React from 'react';
import renderer from 'react-test-renderer';
import history from '../../routing/history';
import {featuredMovie} from '../../__test-mock__/movies.js';
import PlayerScreen from './player-screen.jsx';

const mock = {
  children: <div/>
};

const noop = () => {};

it(`Should render PlayerScreen component correctly`, () => {
  const {children} = mock;
  const tree = renderer
    .create(
        <PlayerScreen
          history={history}
          movie={featuredMovie}
          isPlaying={false}
          isMuted={false}
          progress={0}
          duration={100}
          onPlayStatusChange={noop}
          onFullScreenChange={noop}
        >
          {children}
        </PlayerScreen>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
