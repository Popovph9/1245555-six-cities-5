import {user} from "./user";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {AuthorizationStatus, APIRoute, AppRoute} from "../../../const";
import {ActionType} from "../../action";
import {login} from "../../api-actions";
import {
  MOCK_NO_USER,
  MOCK_USER,
  MOCK_SERVER_USER,
  MOCK_SERVER_HOTEL,
  MOCK_ADAPTED_HOTEL,
  MOCK_AUTH_DATA} from "../../../test-data";

describe(`Reducer should update correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      currentUser: {},
    });
  });

  it(`Reducer should update state when the user is unauthorized`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });
  });

  it(`Reducer should update state when the user is authorized`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
  });

  it(`Reducer should update current user`, () => {
    expect(user({
      currentUser: MOCK_NO_USER,
    }, {
      type: ActionType.CHANGE_USER,
      payload: MOCK_USER
    })).toEqual({
      currentUser: MOCK_USER,
    });
  });
});

describe(`Async operation work correctly`, () => {
  const api = createAPI(() => {});

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: MOCK_AUTH_DATA.login, password: MOCK_AUTH_DATA.password};
    const offersLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, MOCK_SERVER_USER)
      .onGet(APIRoute.HOTELS)
      .reply(200, [MOCK_SERVER_HOTEL]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_USER,
          payload: MOCK_USER,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.LOAD_OFFERS,
          payload: [MOCK_ADAPTED_HOTEL],
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });
});

