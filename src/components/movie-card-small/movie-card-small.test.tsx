import React, {ReactElement} from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {featuredMovie, noop} from '../../mocks/mocks';
import {MovieCardSmall} from './movie-card-small';

const children: ReactElement = <div/>;

it(`Should MovieCardSmall component render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <MovieCardSmall
            movie={featuredMovie}
            onCardClick={noop}
          >
            {children}
          </MovieCardSmall>
          
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
