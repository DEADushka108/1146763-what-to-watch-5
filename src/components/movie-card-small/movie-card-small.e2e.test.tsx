import React, {ReactElement} from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';
import {AppRoute, featuredMovie} from '../../mocks/mocks';
import {MovieCardSmall} from './movie-card-small';

configure({
  adapter: new Adapter(),
});

const children: ReactElement = <div/>;

const onCardClick = jest.fn();

it(`Should call onCardClick handler with correct data`, () => {
  const movieCardSmall = mount(
      <MemoryRouter>
        <MovieCardSmall
          movie={featuredMovie}
          onCardClick={onCardClick}
        >
          {children}
        </MovieCardSmall>
      </MemoryRouter>
  );
  const imageItem = movieCardSmall.find(`div.small-movie-card__image`);

  imageItem.simulate(`click`);
  expect(onCardClick).toHaveBeenCalledTimes(1);
  expect(onCardClick).toHaveBeenCalledWith(`${AppRoute.MOVIE}/${featuredMovie.id}`);
});
