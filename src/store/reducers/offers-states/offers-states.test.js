import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {DEFAULT_SORTING, HIGHT_PRICE_SORTING, APIRoute} from "../../../const";
import {fetchCurrentOffer, fetchReviewsList, changeCurrentFavorite, sendReview} from "../../api-actions";
import {offersState} from "./offers-states";
import {ActionType} from "../../action";
import {
  MOCK_CURRENT_OFFER,
  MOCK_REVIEWS,
  MOCK_SERVER_HOTEL,
  MOCK_ADAPTED_HOTEL,
  MOCK_ADAPTED_REVIEW,
  MOCK_SERVER_REVIEW,
  MOCK_STATUS_CODE,
  MOCK_RATING,
  MOCK_COMMENT} from "../../../test-data";

describe(`Reducer should update correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(offersState(void 0, {})).toEqual({
      currentSorting: DEFAULT_SORTING,
      activePin: null,
      currentOffer: {},
      reviews: [],
    });
  });

  it(`Reducer should update sorting by change sorting`, () => {
    expect(offersState({
      currentSorting: DEFAULT_SORTING,
    }, {
      type: ActionType.CHANGE_SORTING,
      payload: HIGHT_PRICE_SORTING,
    })).toEqual({
      currentSorting: HIGHT_PRICE_SORTING,
    });
  });

  it(`Reducer should update state by set active pin`, () => {
    expect(offersState({
      activePin: null,
    }, {
      type: ActionType.SET_ACTIVE_PIN,
      payload: [MOCK_CURRENT_OFFER.location.latitude, MOCK_CURRENT_OFFER.location.longitude],
    })).toEqual({
      activePin: [MOCK_CURRENT_OFFER.location.latitude, MOCK_CURRENT_OFFER.location.longitude],
    });
  });

  it(`Reducer should update state by reset active pin`, () => {
    expect(offersState({
      activePin: [MOCK_CURRENT_OFFER.location.latitude, MOCK_CURRENT_OFFER.location.longitude],
    }, {
      type: ActionType.RESET_ACTIVE_PIN,
    })).toEqual({
      activePin: undefined,
    });
  });

  it(`Reducer should update current offer by get current offer`, () => {
    expect(offersState({
      currentOffer: {},
    }, {
      type: ActionType.GET_CURRENT_OFFER,
      payload: MOCK_CURRENT_OFFER,
    })).toEqual({
      currentOffer: MOCK_CURRENT_OFFER,
    });
  });

  it(`Reducer should update reviews by load reviews`, () => {
    expect(offersState({
      reviews: {},
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: MOCK_REVIEWS,
    })).toEqual({
      reviews: MOCK_REVIEWS,
    });
  });

  it(`Reducer should update current offer by load current offer`, () => {
    expect(offersState({
      currentOffer: {},
    }, {
      type: ActionType.LOAD_CURRENT_OFFER,
      payload: MOCK_CURRENT_OFFER,
    })).toEqual({
      currentOffer: MOCK_CURRENT_OFFER,
    });
  });
});

describe(`Async operation work correctly`, () => {
  const api = createAPI(() => {});

  it(`Should make a correct API call to  /hotels/: id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchCurrentOffer(MOCK_CURRENT_OFFER.id);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${MOCK_CURRENT_OFFER.id}`)
      .reply(200, MOCK_SERVER_HOTEL);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_CURRENT_OFFER,
          payload: MOCK_ADAPTED_HOTEL,
        });
      });
  });

  it(`Should make a correct API call to  /comments/: hotel_id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = fetchReviewsList(MOCK_CURRENT_OFFER.id);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${MOCK_CURRENT_OFFER.id}`)
      .reply(200, [MOCK_SERVER_REVIEW]);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [MOCK_ADAPTED_REVIEW],
        });
      });
  });

  it(`Should make a correct API call to  /favorites/: hotel_id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = changeCurrentFavorite({
      id: MOCK_CURRENT_OFFER.id,
      status: MOCK_STATUS_CODE,
    });

    apiMock
      .onPost(`${APIRoute.FAVORITES}/${MOCK_CURRENT_OFFER.id}/${MOCK_STATUS_CODE}`)
      .reply(200, MOCK_SERVER_HOTEL);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_CURRENT_OFFER,
          payload: MOCK_ADAPTED_HOTEL,
        });
      });
  });

  it(`Should make a correct API call to  /comments/: review_id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = sendReview({
      id: MOCK_CURRENT_OFFER.id,
      comment: MOCK_COMMENT,
      rating: MOCK_RATING,
    });

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${MOCK_CURRENT_OFFER.id}`)
      .reply(200, [MOCK_SERVER_REVIEW]);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [MOCK_ADAPTED_REVIEW],
        });
      });
  });
});
