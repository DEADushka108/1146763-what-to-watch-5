import {extend} from '../../utils/utils.js';
import {createReviewsList} from '../../services/adapters/reviews';
import {URL} from '../../utils/const.js';

const initialState = {
  reviews: [],
};

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

const ActionCreator = {
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
};

const Operation = {
  loadReviews: (id) => (dispatch, _getState, api) => {
    return api.get(`${URL.REVIEWS}/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(createReviewsList(response.data)));
      });
  }
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
