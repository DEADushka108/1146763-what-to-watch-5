import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-space.js';
import {featuredMovie} from '../../__test-mock__/movies';
import {userInfo} from '../../__test-mock__/user.js';
import {ReviewScreen} from './review-screen.jsx';
import {HttpCode} from '../../utils/const.js';

configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);
const match = {
  params: {
    id: `1`,
  },
};

const onSubmit = jest.fn();
const noop = () => {};

it(`Should pass correct comment and rating on review form submit`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      userInfo,
    },
    [NameSpace.REVIEWS]: {
      postStatus: 0,
    }
  });
  const reviewScreen = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ReviewScreen
            match={match}
            movieInfo={featuredMovie}
            rating={`3`}
            text={`This is at least 50 characters long text review`}
            isValid={true}
            status={HttpCode.OK}
            onSubmit={onSubmit}
            onRatingChange={noop}
            onTextInput={noop}
            onValidityCheck={noop}
            redirect={noop}
            loadMovie={noop}
          />
        </MemoryRouter>
      </Provider>
  );
  const reviewForm = reviewScreen.find(`form.add-review__form`);

  reviewForm.simulate(`submit`);
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    id: Number(match.params.id),
    rating: `3`,
    text: `This is at least 50 characters long text review`
  });
});
