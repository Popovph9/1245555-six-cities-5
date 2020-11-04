
export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  SORT_OFFERS: `SORT_OFFERS`,
  SET_ACTIVE_PIN: `SET_ACTIVE_PIN`,
  RESET_ACTIVE_PIN: `SET_ACTIVE_PIN`,
  GET_CURRENT_OFFER: `GET_CURRENT_OFFER`,
  CHANGE_FAVORITE: `CHANGE_FAVORITE`,
};

export const ActionCreator = {
  changeCity: (evt) => ({
    type: ActionType.CHANGE_CITY,
    payload: evt.target.textContent,
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
  }),
  changeSorting: (evt) => ({
    type: ActionType.CHANGE_SORTING,
    payload: evt.target.textContent,
  }),
  sortOffers: (evt) => ({
    type: ActionType.SORT_OFFERS,
    payload: evt.target.textContent,
  }),
  setActivePin: (offer) => ({
    type: ActionType.SET_ACTIVE_PIN,
    payload: offer.coords,
  }),
  resetActivePin: () => ({
    type: ActionType.RESET_ACTIVE_PIN,
  }),
  getCurrentOffer: (offer) => ({
    type: ActionType.GET_CURRENT_OFFER,
    payload: offer,
  }),
  changeFavorite: (offer) => ({
    type: ActionType.CHANGE_FAVORITE,
    payload: !offer.isFavorite,
  }),
};
