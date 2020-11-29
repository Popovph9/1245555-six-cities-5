import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {DEFAULT_SORTING} from "../../../const";


const initialState = {
  currentSorting: DEFAULT_SORTING,
  activePin: null,
  currentOffer: {},
  reviews: [],
};

const offersState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORTING:
      return extend(state, {
        currentSorting: action.payload,
      });
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
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_CURRENT_OFFER:
      return extend(state, {
        currentOffer: action.payload,
      });
  }

  return state;
};

export {offersState};
