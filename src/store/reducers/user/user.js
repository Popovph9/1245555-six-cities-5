import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  currentUser: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.CHANGE_USER:
      return extend(state, {
        currentUser: action.payload,
      });
  }

  return state;
};

export {user};
