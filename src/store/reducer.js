import {extend} from "../utils";
import {ActionType} from "./action";
import {offersMocks} from "../mocks/offers";

const initialState = {
  city: offersMocks[0].city.name,
  offers: offersMocks.filter((it) => it.city.name === offersMocks[0].city.name),
  offersMocks
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
  }

  return state;
};

export {reducer};
