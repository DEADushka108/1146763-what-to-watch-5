import React from 'react';
import renderer from 'react-test-renderer';
import {FilterSettings} from '../../utils/const.js';
import {moviesList} from '../../__test-mock__/movies.js';
import {GenresList} from './genres-list.jsx';

const noop = () => {};

it(`Should render GenresList component correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          moviesList={moviesList}
          onGenreChange={noop}
          onGenreClick={noop}
          activeGenre={FilterSettings.DEFAULT_VALUE}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
