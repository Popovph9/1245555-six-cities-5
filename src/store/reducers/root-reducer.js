import {combineReducers} from "redux";
import {offersData} from "./offers-data/offers-data";
import {offersState} from "./offers-states/offers-states";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: offersData,
  [NameSpace.STATE]: offersState,
  [NameSpace.USER]: user,
});
