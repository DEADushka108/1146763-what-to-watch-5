import {FilterSettings, Rating, RatingLevel, MINUTES_PER_HOUR} from './const.js';

const getGenresList = (list) => {
  return list.map((it) => {
    return it.genre;
  });
};

const addLeadingZero = (value) => {
  return Number(value) < 10 ? `0${value}` : `${value}`;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export const findItemById = (id, list) => {
  return list.find((item) => {
    return item.id === Number(id);
  });
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

export const isEmpty = (obj) => {
  return Boolean(Object.keys(obj).length);
};

export const formatTime = (time) => {
  const hours = Math.trunc(time / MINUTES_PER_HOUR);
  const minutes = time % MINUTES_PER_HOUR;
  return `${hours}h ${minutes}m`;
};

export const getTimeString = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time % 60);

  return `${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
};
