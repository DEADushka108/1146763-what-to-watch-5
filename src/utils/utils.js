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
