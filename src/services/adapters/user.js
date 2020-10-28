const createUserInfo = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  avatar: user[`avatar_url`],
});

export {createUserInfo};
