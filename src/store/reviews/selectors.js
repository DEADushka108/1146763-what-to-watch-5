import NameSpace from '../name-space.js';

const getReviews = (state) => {
  return state[NameSpace.REVIEWS].reviews;
};

export {getReviews};
