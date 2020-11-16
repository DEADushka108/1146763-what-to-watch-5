import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store, moviesList} from '../../mocks/mocks.js';
import {Main} from './main';

configure({
  adapter: new Adapter(),
});

it(`Sould render correct number of cards`, () => {
  const main = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Main
            filteredMoviesList={moviesList}
            moviesCount={4}
          />
        </MemoryRouter>
      </Provider>
  );
  const movieCards = main.find(`article.small-movie-card`);
  const showMoreButton = main.find(`button.catalog__button`);

  expect(movieCards.length).toBe(4);
  expect(showMoreButton.length).toBe(1);
});

it(`Should not render showMoreButton if all cards open`, () => {
  const main = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Main
            filteredMoviesList={moviesList}
            moviesCount={20}
          />
        </MemoryRouter>
      </Provider>
  );
  const showMoreButton = main.find(`button.catalog__button`);

  expect(showMoreButton.length).toBe(0);
});
