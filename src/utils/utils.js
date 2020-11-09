import {FilterSettings, Rating, RatingLevel, MINUTES_PER_HOUR, ReviewSettingns} from './const.js';

const getGenresList = (list) => {
  return list.map((it) => {
    return it.genre;
  });
};

const addLeadingZero = (value) => {
  return Number(value) < 10 ? `0${value}` : `${value}`;
};

export const findItemById = (id, list) => {
  return list.find((item) => {
    return item.id === Number(id);
  });
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
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

export const formatTime = (time) => {
  const hours = Math.trunc(time / MINUTES_PER_HOUR);
  const minutes = time % MINUTES_PER_HOUR;
  return `${hours}h ${minutes}m`;
};

export const getTimeString = (time) => {
  const hours = Math.floor(time / (MINUTES_PER_HOUR * MINUTES_PER_HOUR));
  const minutes = Math.floor(time / MINUTES_PER_HOUR) % MINUTES_PER_HOUR;
  const seconds = Math.floor(time % MINUTES_PER_HOUR);

  return `${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
};

export const validateText = (text) => {
  return text.length >= ReviewSettingns.TEXT.MIN_LENGTH && text.length <= ReviewSettingns.TEXT.MAX_LENGTH;
};

export const validateRating = (rating) => {
  return Number(rating) >= ReviewSettingns.MIN_RATING;
};
