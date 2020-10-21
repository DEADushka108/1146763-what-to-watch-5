import {FilterSettings, Rating, RatingLevel} from './const.js';

export const findItemById = (id, list) => {
  return list.find((item) => {
    return item.id === Number(id);
  });
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export const getRandomArrayElements = (array, max) => {
  const newArray = array.slice();

  shuffleArray(newArray);

  return newArray.slice(0, max);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const filterMoviesByGenre = (list, genre) => {
  return genre === FilterSettings.DEFAULT_VALUE ? list : list.filter((it) => {
    return it.genre === genre;
  });
};

const getGenresList = (list) => {
  return list.map((it) => {
    return it.genre;
  });
};

export const getUniqueGenresList = (list) => {
  const genresList = getGenresList(list);
  const uniqueGenresList = Array.from(new Set(genresList)).sort().slice(0, FilterSettings.MAX_COUNT);
  return [FilterSettings.DEFAULT_VALUE, ...uniqueGenresList];
};

export const getRatingLevel = (score) => {
  if (score < Rating.BAD) {
    return RatingLevel.BAD;
  }

  if (score >= Rating.BAD && score < Rating.NORMAL) {
    return RatingLevel.NORMAL;
  }

  if (score >= Rating.NORMAL && score < Rating.GOOD) {
    return RatingLevel.GOOD;
  }

  if (score >= Rating.GOOD && score < Rating.VERY_GOOD) {
    return RatingLevel.VERY_GOOD;
  }

  if (score === Rating.VERY_GOOD) {
    return RatingLevel.AWESOME;
  }

  return ``;
};
