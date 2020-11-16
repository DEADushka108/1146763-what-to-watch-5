import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {featuredMovie, store, match, noop, PostStatus} from '../../mocks/mocks.js';
import {ReviewScreen} from './review-screen.jsx';

configure({
  adapter: new Adapter(),
});

const onSubmit = jest.fn();


it(`Should pass correct comment and rating on review form submit`, () => {
  const reviewScreen = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ReviewScreen
            match={match}
            movieInfo={featuredMovie}
            status={PostStatus.VALID}
            onSuccessSubmit={noop}
            onLoadMovie={noop}
            onUpdatePostStatus={noop}
            onSubmit={onSubmit}
          />
        </MemoryRouter>
      </Provider>
  );
  const reviewForm = reviewScreen.find(`form.add-review__form`);
  const commentField = reviewScreen.find(`textarea.add-review__textarea`);
  const thirdStar = reviewScreen.find(`input.rating__input`).at(2);

  commentField.simulate(`change`, {
    target: {
      value: `This is at least 50 characters long text review in that moment`,
    },
  });
  thirdStar.simulate(`change`, {
    target: {
      value: `3`,
    }
  });
  reviewForm.simulate(`submit`);
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    id: Number(match.params.id),
    rating: `3`,
    text: `This is at least 50 characters long text review in that moment`
  });
});
