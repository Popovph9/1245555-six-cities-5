
export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  SORT_OFFERS: `SORT_OFFERS`,
  SET_ACTIVE_PIN: `SET_ACTIVE_PIN`,
  RESET_ACTIVE_PIN: `SET_ACTIVE_PIN`,
  GET_CURRENT_OFFER: `GET_CURRENT_OFFER`,
  CHANGE_FAVORITE: `CHANGE_FAVORITE`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  GET_FAVORITES: `GET_FAVORITES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
};


export const changeCity = (evt) => ({
  type: ActionType.CHANGE_CITY,
  payload: evt.target.textContent,
});

export const getOffers = () => ({
  type: ActionType.GET_OFFERS,
});

export const changeSorting = (evt) => ({
  type: ActionType.CHANGE_SORTING,
  payload: evt.target.textContent,
});
export const sortOffers = (evt) => ({
  type: ActionType.SORT_OFFERS,
  payload: evt.target.textContent,
});

export const setActivePin = (offer) => ({
  type: ActionType.SET_ACTIVE_PIN,
  payload: [offer.location.latitude, offer.location.longitude],
});

export const resetActivePin = () => ({
  type: ActionType.RESET_ACTIVE_PIN,
});

export const getCurrentOffer = (offer) => ({
  type: ActionType.GET_CURRENT_OFFER,
  payload: offer,
});

export const changeFavorite = (offer) => ({
  type: ActionType.CHANGE_FAVORITE,
  payload: !offer.isFavorite,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadReviews = (review) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: review,
});

export const getFavorites = () => ({
  type: ActionType.GET_FAVORITES,
});

export const loadNearOffers = (offers) => ({
  type: ActionType.LOAD_NEAR_OFFERS,
  payload: offers,
});

