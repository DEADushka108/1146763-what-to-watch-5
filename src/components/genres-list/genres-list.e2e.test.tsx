import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';
import {FilterSettings, moviesList} from '../../mocks/mocks';
import {GenresList} from './genres-list';

configure({
  adapter: new Adapter(),
});

const getGenresList = (list) => {
  return list.map((it) => {
    return it.genre;
  });
};

const getUniqueGenresList = (list) => {
  const genresList = getGenresList(list);
  const uniqueGenresList = Array.from(new Set(genresList)).sort().slice(0, FilterSettings.MAX_COUNT);
  return [FilterSettings.DEFAULT_VALUE, ...uniqueGenresList];
};

const onGenreClick = jest.fn();

it(`Should call onGenreClick handler with correct data`, () => {
  const genresList = mount(
      <MemoryRouter>
        <GenresList
          moviesList={moviesList}
          currentGenre={FilterSettings.DEFAULT_VALUE}
          onGenreClick={onGenreClick}
        />
      </MemoryRouter>
  );
  const secondGenreItem = genresList.find(`li.catalog__genres-item`).at(1);

  const secondGenre = getUniqueGenresList(moviesList)[1];

  secondGenreItem.simulate(`click`);
  expect(onGenreClick).toHaveBeenCalledTimes(1);
  expect(onGenreClick).toHaveBeenCalledWith(secondGenre);
});
