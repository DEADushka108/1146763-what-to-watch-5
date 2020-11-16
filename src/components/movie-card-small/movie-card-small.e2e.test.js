import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';
import {AppRoute, featuredMovie} from '../../mocks/mocks.js';
import {MovieCardSmall} from './movie-card-small.jsx';

configure({
  adapter: new Adapter(),
});

const onCardClick = jest.fn();

it(`Should call onCardClick handler with correct data`, () => {
  const movieCardSmall = mount(
      <MemoryRouter>
        <MovieCardSmall
          movie={featuredMovie}
          onCardClick={onCardClick}
        />
      </MemoryRouter>
  );
  const imageItem = movieCardSmall.find(`div.small-movie-card__image`);

  imageItem.simulate(`click`);
  expect(onCardClick).toHaveBeenCalledTimes(1);
  expect(onCardClick).toHaveBeenCalledWith(`${AppRoute.MOVIE}/${featuredMovie.id}`);
});
