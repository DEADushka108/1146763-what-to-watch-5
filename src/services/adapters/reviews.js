const createReview = (review) => ({
  id: review.id,
  author: {
    id: review.user && review.user.id,
    name: review.user && review.user.name,
  },
  text: review.comment,
  date: review.date,
  rating: review.rating,
});

const createReviewsList = (reviews) => {
  return reviews.map(createReview);
};

export {createReview, createReviewsList};
