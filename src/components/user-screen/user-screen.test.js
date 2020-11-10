import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {moviesList, store, noop} from '../../mocks/mocks.js';
import {UserScreen} from './user-screen.jsx';

describe(`Render UserScreen`, () => {
  it(`Should render UserScreen component correctly`, () => {
    const tree = renderer
      .create((
        <Provider store={store}>
          <MemoryRouter>
            <UserScreen
              moviesList={moviesList}
              loadFavoriteList={noop}
            />
          </MemoryRouter>
        </Provider>
      ), {
        createNodeMock() {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
