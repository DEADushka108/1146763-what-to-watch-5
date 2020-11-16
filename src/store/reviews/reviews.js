import {extend} from '../../utils/utils.js';
import {createReviewsList} from '../../services/adapters/reviews';
import {HttpCode, PostStatus, URL} from '../../utils/const.js';

const initialState = {
  reviews: [],
  postStatus: PostStatus.VALID,
};

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  UPDATE_POST_STATUS: `UPDATE_POST_STATUS`,
};

const ActionCreator = {
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  updatePostStatus: (status) => ({
    type: ActionType.UPDATE_POST_STATUS,
    payload: status,
  }),
};

const Operation = {
  loadReviews: (id) => (dispatch, _getState, api) => {
    return api.get(`${URL.REVIEWS}/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(createReviewsList(response.data)));
      });
  },
  postReview: (review) => (dispatch, _getState, api) => {
    return api.post(`${URL.REVIEWS}/${review.id}`, {
      rating: review.rating,
      comment: review.text,
    })
      .then((response) => {
        dispatch(ActionCreator.updatePostStatus(response.status));
      })
      .catch(() => {
        dispatch(ActionCreator.updatePostStatus(HttpCode.BAD_REQUEST));
      });
  }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.UPDATE_POST_STATUS:
      return extend(state, {
        postStatus: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
