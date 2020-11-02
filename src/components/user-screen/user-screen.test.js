import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import {moviesList} from '../../__test-mock__/movies.js';
import {userInfo} from '../../__test-mock__/user.js';
import NameSpace from '../../store/name-space.js';
import {UserScreen} from './user-screen.jsx';

const mockStore = configureStore([]);
const noop = () => {};
describe(`Render UserScreen`, () => {
  it(`Should render UserScreen component correctly`, () => {
    const store = mockStore({
      [NameSpace.MOVIES]: {
        moviesList,
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`,
        userInfo,
      },
    });
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

