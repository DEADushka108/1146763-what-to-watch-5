import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {moviesList} from '../../mocks/mocks.js';
import {ShowMoreButton} from './show-more-button.jsx';

configure({
  adapter: new Adapter(),
});

const onClick = jest.fn();

it(`Should call onClick handler once`, () => {
  const showMoreButton = shallow(
      <ShowMoreButton
        list={moviesList}
        count={4}
        onClick={onClick}
      />
  );
  const button = showMoreButton.find(`button.catalog__button`);

  button.simulate(`click`);
  expect(onClick).toHaveBeenCalledTimes(1);
});
