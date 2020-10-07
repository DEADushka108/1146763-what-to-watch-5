export const findItemById = (id, list) => {
  return list.find((item) => {
    return item.id === Number(id);
  });
};
