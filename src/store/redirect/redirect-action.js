export const ActionType = {
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
