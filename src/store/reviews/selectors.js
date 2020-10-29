import NameSpace from '../name-space.js';

const getReviews = (state) => {
  return state[NameSpace.REVIEWS].reviews;
};

const getPostStatus =(state) => {
  return state[NameSpace.REVIEWS].postStatus;
}

export {getReviews, getPostStatus};
