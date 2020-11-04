import {extend, sortByHighPrice, sortByLowPrice, sortByRating} from "../utils";
import {ActionType} from "./action";
import {offersMocks} from "../mocks/offers";
import {DEFAULT_SORTING, HIGHT_PRICE_SORTING, LOW_PRICE_SORTING, RATING_SORTING, DEFAULT_CITY} from "../const";

const initialState = {
  city: DEFAULT_CITY,
  offers: offersMocks.filter((it) => it.city.name === DEFAULT_CITY),
  currentSorting: DEFAULT_SORTING,
  activePin: null,
  allOffers: offersMocks,
  favoriteOffers: offersMocks.filter((it) => it.isFavorite),
  currentOffer: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: offersMocks.filter((it) => it.city.name === state.city),
      });
    case ActionType.CHANGE_SORTING:
      return extend(state, {
        currentSorting: action.payload,
      });
    case ActionType.SORT_OFFERS:
      switch (action.payload) {
        case DEFAULT_SORTING:
          return extend(state, {
            offers: offersMocks.filter((it) => it.city.name === state.city)
          });
        case HIGHT_PRICE_SORTING:
          return extend(state, {
            offers: offersMocks.filter((it) => it.city.name === state.city).sort(sortByHighPrice)
          });
        case LOW_PRICE_SORTING:
          return extend(state, {
            offers: offersMocks.filter((it) => it.city.name === state.city).sort(sortByLowPrice)
          });
        case RATING_SORTING:
          return extend(state, {
            offers: offersMocks.filter((it) => it.city.name === state.city).sort(sortByRating)
          });
        default:
          return extend(state, {
            offers: offersMocks.filter((it) => it.city.name === state.city)
          });
      }
    case ActionType.SET_ACTIVE_PIN:
      return extend(state, {
        activePin: action.payload,
      });
    case ActionType.RESET_ACTIVE_PIN:
      return extend(state, {
        activePin: null,
      });
    case ActionType.GET_CURRENT_OFFER:
      return extend(state, {
        currentOffer: action.payload,
      });
    case ActionType.CHANGE_FAVORITE:
      return extend(state, {
        currentOffer: extend(state.currentOffer, {
          isFavorite: action.payload,
        })
      });
  }

  return state;
};

export {reducer};
