import {extend, sortByHighPrice, sortByLowPrice, sortByRating} from "../../../utils";
import {ActionType} from "../../action";
import {DEFAULT_SORTING, HIGHT_PRICE_SORTING, LOW_PRICE_SORTING, RATING_SORTING, DEFAULT_CITY} from "../../../const";


const initialState = {
  allOffers: [],
  city: DEFAULT_CITY,
  offers: [],
  favoriteOffers: [],
  nearOffers: [],
};

const offersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        allOffers: action.payload,
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: state.allOffers.filter((it) => it.city.name === state.city),
      });
    case ActionType.SORT_OFFERS:
      switch (action.payload) {
        case DEFAULT_SORTING:
          return extend(state, {
            offers: state.allOffers.filter((it) => it.city.name === state.city)
          });
        case HIGHT_PRICE_SORTING:
          return extend(state, {
            offers: state.allOffers.filter((it) => it.city.name === state.city).sort(sortByHighPrice)
          });
        case LOW_PRICE_SORTING:
          return extend(state, {
            offers: state.allOffers.filter((it) => it.city.name === state.city).sort(sortByLowPrice)
          });
        case RATING_SORTING:
          return extend(state, {
            offers: state.allOffers.filter((it) => it.city.name === state.city).sort(sortByRating)
          });
        default:
          return extend(state, {
            offers: state.allOffers.filter((it) => it.city.name === state.city)
          });
      }
    case ActionType.GET_FAVORITES:
      return extend(state, {
        favoriteOffers: state.allOffers.filter((it) => it.isFavorite),
      });
    case ActionType.LOAD_NEAR_OFFERS:
      return extend(state, {
        nearOffers: action.payload,
      });
  }

  return state;
};

export {offersData};
