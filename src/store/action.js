export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

export const ActionCreator = {
  changeCity: (evt) => ({
    type: ActionType.CHANGE_CITY,
    payload: evt.target.textContent,
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
  }),
};
