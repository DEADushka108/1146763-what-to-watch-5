import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import {featuredMovie, moviesList} from '../../__test-mock__/movies';
import {userInfo} from '../../__test-mock__/user.js';
import NameSpace from '../../store/name-space.js';
import {Main} from './main';

const mockStore = configureStore([]);

configure({
  adapter: new Adapter(),
});

it(`Sould render correct number of cards`, () => {
  const store = mockStore({
    [NameSpace.MOVIES]: {
      featuredMovie,
      moviesList,
      moviesCount: 4,
      activeGenre: `All genres`
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      userInfo,
    },
  });

  const main = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Main
            activeGenre={`All genres`}
            filteredMoviesList={moviesList}
            moviesList={moviesList}
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
  const store = mockStore({
    [NameSpace.MOVIES]: {
      featuredMovie,
      moviesList,
      moviesCount: 20,
      activeGenre: `All genres`
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      userInfo,
    },
  });

  const main = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Main
            activeGenre={`All genres`}
            filteredMoviesList={moviesList}
            moviesList={moviesList}
            moviesCount={20}
          />
        </MemoryRouter>
      </Provider>
  );
  const showMoreButton = main.find(`button.catalog__button`);

  expect(showMoreButton.length).toBe(0);
});
