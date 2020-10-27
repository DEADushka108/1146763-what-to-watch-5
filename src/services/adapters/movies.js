const createMovie = (movie) => ({
  id: movie.id,
  isFavorite: movie[`is_favorite`],
  title: movie.name,
  genre: movie.genre,
  releaseDate: movie.released,
  runTime: movie[`run_time`],
  cover: movie[`poster_image`],
  poster: movie[`preview_image`],
  videoSrc: movie[`video_link`],
  previewSrc: movie[`preview_video_link`],
  rating: {
    score: movie.rating,
    count: movie[`scores_count`],
  },
  description: movie.description,
  director: movie.director,
  cast: movie.starring,
  backgroundImage: movie[`background_image`],
  backgroundColor: movie[`background_color`],
});

const createMoviesList = (movies) => {
  return movies.map(createMovie);
};

export {createMovie, createMoviesList};
