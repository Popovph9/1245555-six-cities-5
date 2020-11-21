import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {DEFAULT_CITY} from "../../../const";
import {switchSorting} from "../../../utils";


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
      return switchSorting(state, action);
    case ActionType.GET_FAVORITES:
      return extend(state, {
        favoriteOffers: action.payload,
      });
    case ActionType.LOAD_NEAR_OFFERS:
      return extend(state, {
        nearOffers: action.payload,
      });
  }

  return state;
};

export {offersData};
