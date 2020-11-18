import React from 'react';
import renderer from 'react-test-renderer';
import {FilterSettings, moviesList, noop} from '../../mocks/mocks';
import {GenresList} from './genres-list';

it(`Should render GenresList component correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          moviesList={moviesList}
          onGenreClick={noop}
          currentGenre={FilterSettings.DEFAULT_VALUE}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
