import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';
import {AppRoute, noop} from '../../mocks/mocks';
import {FavoriteButton} from './favorite-button';

configure({
  adapter: new Adapter(),
});

const onClick = jest.fn();
const onUnauthorizedClick = jest.fn();
const id = 1;
const Status = {
  FAVORITE: 1,
  NOT_FAVORITE: 0,
};
const isFavorite = false;

it(`Should call onClick handler with correct data`, () => {
  const favoriteButton = mount(
      <MemoryRouter>
        <FavoriteButton
          id={id}
          onClick={onClick}
          isFavorite={isFavorite}
          isAuthorized={true}
          onUnauthorizedClick={noop}
        />
      </MemoryRouter>
  );
  const button = favoriteButton.find(`button.movie-card__button`);

  button.simulate(`click`);
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(onClick).toHaveBeenCalledWith(id, isFavorite ? Status.NOT_FAVORITE : Status.FAVORITE);
});

it(`Should redirect to login screen on unauthorized click`, () => {
  const favoriteButton = mount(
      <MemoryRouter>
        <FavoriteButton
          id={id}
          onClick={onClick}
          isFavorite={isFavorite}
          isAuthorized={false}
          onUnauthorizedClick={onUnauthorizedClick}
        />
      </MemoryRouter>
  );
  const button = favoriteButton.find(`button.movie-card__button`);

  button.simulate(`click`);
  expect(onUnauthorizedClick).toHaveBeenCalledTimes(1);
  expect(onUnauthorizedClick).toHaveBeenCalledWith(`${AppRoute.LOGIN}`);
});
