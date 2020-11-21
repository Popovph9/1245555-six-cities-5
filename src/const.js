export const FLAT_TYPES = [`apartment`, `room`, `house`, `hotel`];

export const FLAT_OFFERS = [`Wifi`, `Heating`, `Kitchen`, `Cable TV`];

export const FLAT_PHOTOS = [`img/apartment-01.jpg`, `img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`];

export const CITIES_NAMES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const RATING_GRADES = [`5`, `4`, `3`, `2`, `1`];

export const RATING_TITLES = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

export const PIN_URL = `/img/pin.svg`;

export const PIN_ACTIVE_URL = `/img/pin-active.svg`;

export const PIN_SIZES = [30, 30];

export const RENDERED_REVIEWS = 10;

export const RENDERED_PINS = 10;

export const MAX_RENDERED_PHOTOS = 6;

export const STAR_WIDTH = 20;

export const MIN_REVIEW_LENGTH = `50`;

export const MAX_REVIEW_LENGTH = `300`;

export const CITIES_CLASS = `cities__places-list tabs__content`;

export const PLACES_CLASS = `near-places__list`;

export const CITIES_SUBCLASS = `cities`;

export const PLACES_SUBCLASS = `near-places`;

export const EMPTY_PAGE_CLASSNAME = `page__main page__main--index page__main--index-empty`;

export const MAIN_PAGE_CLASSNAME = `page__main page__main--index`;

export const ACTIVE_CLASSNAME = `locations__item-link tabs__item tabs__item--active`;

export const CASUAL_CLASSNAME = `locations__item-link tabs__item`;

export const STAR_CLASSNAME = `property__avatar-wrapper user__avatar-wrapper property__avatar-wrapper--pro`;

export const COMMON_CLASSNAME = `property__avatar-wrapper user__avatar-wrapper`;

export const OPEN_CLASSNAME = `places__options--opened`;

export const DEFAULT_SORTING = `Popular`;

export const HIGHT_PRICE_SORTING = `Price: high to low`;

export const LOW_PRICE_SORTING = `Price: low to high`;

export const RATING_SORTING = `Top rated first`;

export const DEFAULT_CITY = CITIES_NAMES[0];

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  SIGN_IN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer`,
  MAIN: `/`,
};

export const APIRoute = {
  HOTELS: `/hotels`,
  FAVORITES: `/favorite`,
  COMMENTS: `/comments`,
  NEAR: `/nearby`,
  LOGIN: `/login`,
};
