import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {moviesList} from '../../__test-mock__/movies.js';
import {MovieCardSmall} from './movie-card-small.jsx';

const mock = {
  children: <div/>,
};

const noop = () => {};

it(`Should MovieCardSmall component render correctly`, () => {
  const {children} = mock;
  const tree = renderer
    .create(
        <MemoryRouter>
          <MovieCardSmall
            movie={moviesList[0]}
            onPlayStatusChange={noop}
            redirect={noop}
          >
            {children}
          </MovieCardSmall>
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
