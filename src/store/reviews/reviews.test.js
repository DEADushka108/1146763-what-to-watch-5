import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api.js';
import {reviews, noop, PostStatus, HttpCode} from '../../mocks/mocks.js';
import {createReviewsList} from '../../services/adapters/reviews.js';
import {reducer, ActionType, Operation} from './reviews.js';

const api = createAPI(noop, noop, noop, noop, noop);

it(`Should reducer return initial state without additional parameters`, () => {
  expect(reducer(undefined, {})).toEqual({
    reviews: [],
    postStatus: PostStatus.VALID,
  });
});

it(`Reducer should update reviews`, () => {
  expect(reducer({
    reviews: [],
  }, {
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  })).toEqual({
    reviews,
  });
});

it(`Should reducer update post status`, () => {
  expect(reducer({
    postStatus: PostStatus.VALID,
  }, {
    type: ActionType.UPDATE_POST_STATUS,
    payload: 200,
  })).toEqual({
    postStatus: 200,
  });
});

describe(`Reviews operation works correctly`, () => {
  it(`Should make a correct request to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const responseMock = [{fake: true}];
    const dispatch = jest.fn();
    const reviewsLoader = Operation.loadReviews(id);

    apiMock
      .onGet(`/comments/${id}`)
      .reply(200, responseMock);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: createReviewsList(responseMock),
        });
      });
  });

  it(`Should make a correct request post to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const postMock = {id: 1, rating: `1`, text: `12345`};
    const dispatch = jest.fn();
    const reviewsLoader = Operation.postReview(postMock);

    apiMock
      .onPost(`/comments/${postMock.id}`)
      .reply(200);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_POST_STATUS,
          payload: HttpCode.OK,
        });
      });
  });
});
