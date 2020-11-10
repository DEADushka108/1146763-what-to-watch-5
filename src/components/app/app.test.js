import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import App from './app';
import {store, serverErrorStore} from '../../mocks/mocks.js';

it(`Should render App component correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <App/>
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should render App component correctly on server error`, () => {
  const tree = renderer
    .create((
      <Provider store={serverErrorStore}>
        <App/>
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
