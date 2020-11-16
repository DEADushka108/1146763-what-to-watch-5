import PropTypes from "prop-types";

export const movieDetails = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  runTime: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  previewSrc: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    score: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  cast: PropTypes.arrayOf(PropTypes.string).isRequired,
  backgroundImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
}).isRequired;

export const reviewsDetails = PropTypes.shape({
  author: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}).isRequired;

export const userDetails = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string,
});
