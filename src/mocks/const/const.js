const FilterSettings = {
  DEFAULT_VALUE: `All genres`,
  MAX_COUNT: 9,
};

const CardCount = {
  MAX: 8,
  SIMILAR: 4,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const HttpCode = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
};

const match = {
  params: {
    id: `1`,
  }
};

const PostStatus = {
  VALID: 1,
  INVALID: 0
};

const AppRoute = {
  LOGIN: `/login`,
  MOVIE: `/films`,
  PLAYER: `/player`,
  FAVORITE: `/mylist`,
  ROOT: `/`,
};

export {FilterSettings, CardCount, AuthorizationStatus, HttpCode, match, PostStatus, AppRoute};
