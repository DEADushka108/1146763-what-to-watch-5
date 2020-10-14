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

const getAllGenres = (list) => {
  return list.map((item) => {
    return item.genre;
  });
};

export const getUniqueGenresList = (list) => {
  const genresList = getAllGenres(list).flat().sort();
  const uniqueGenresList = [...new Set(genresList)].slice(0, 9);

  return [`All genres`, ...uniqueGenresList];
};

export const findSimilarMovies = (list, genre, title) => {
  return list.filter((item) => {
    return item.genre.some((it) => it === genre[0]) && item.title !== title;
  });
};
