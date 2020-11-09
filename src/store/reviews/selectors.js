import NameSpace from '../name-space.js';

const REVIEWS = NameSpace.REVIEWS;

const getReviews = (state) => {
  return state[REVIEWS].reviews;
};

const getPostStatus = (state) => {
  return state[REVIEWS].postStatus;
};

export {getReviews, getPostStatus};
