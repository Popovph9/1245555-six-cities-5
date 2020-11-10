import {combineReducers} from "redux";
import {offersData} from "./offers-data/offers-data";
import {offersState} from "./offers-states/offers-states";

export const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
};

export default combineReducers({
  [NameSpace.DATA]: offersData,
  [NameSpace.STATE]: offersState,
});
