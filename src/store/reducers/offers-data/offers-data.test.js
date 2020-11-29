import {
  DEFAULT_CITY,
  DEFAULT_SORTING,
  HIGHT_PRICE_SORTING,
  RATING_SORTING,
  LOW_PRICE_SORTING,
  APIRoute} from "../../../const";
import {offersData} from "./offers-data";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {fetchOffersList, fetchFavoriteOffersList, fetchNearOffersList} from "../../api-actions";
import {ActionType} from "../../action";
import {
  MOCK_OFFERS,
  MOCK_FAVORITE_OFFERS,
  MOCK_OFFERS_FILTERED,
  MOCK_OFFERS_FILTERED_BY_PRICE_H,
  MOCK_CITY,
  MOCK_OFFERS_FILTERED_BY_PRICE_L,
  MOCK_SERVER_HOTEL,
  MOCK_ADAPTED_HOTEL,
  MOCK_CURRENT_OFFER,
} from "../../../test-data";


describe(`Reducer should update correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(offersData(void 0, {})).toEqual({
      allOffers: [],
      city: DEFAULT_CITY,
      offers: [],
      favoriteOffers: [],
      nearOffers: [],
    });
  });

  it(`Reducer should update city by change city`, () => {
    expect(offersData({
      city: DEFAULT_CITY,
    }, {
      type: ActionType.CHANGE_CITY,
      payload: MOCK_CITY,
    })).toEqual({
      city: MOCK_CITY,
    });
  });

  it(`Reducer should update offers by load offers`, () => {
    expect(offersData({
      allOffers: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: MOCK_OFFERS,
    })).toEqual({
      allOffers: MOCK_OFFERS,
    });
  });

  it(`Reducer should update favorite offers by get favorites`, () => {
    expect(offersData({
      favoriteOffers: [],
    }, {
      type: ActionType.GET_FAVORITES,
      payload: MOCK_FAVORITE_OFFERS,
    })).toEqual({
      favoriteOffers: MOCK_FAVORITE_OFFERS,
    });
  });

  it(`Reducer should update near offers by load near offers`, () => {
    expect(offersData({
      nearOffers: [],
    }, {
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: MOCK_OFFERS,
    })).toEqual({
      nearOffers: MOCK_OFFERS,
    });
  });

  it(`Reducer should update offers by get offers`, () => {
    expect(offersData({
      allOffers: MOCK_OFFERS,
      city: MOCK_CITY,
      offers: [],
    }, {
      type: ActionType.GET_OFFERS,
    })).toEqual({
      allOffers: MOCK_OFFERS,
      city: MOCK_CITY,
      offers: MOCK_OFFERS_FILTERED,
    });
  });

  it(`Reducer should update offers by sort offers by default`, () => {
    expect(offersData({
      allOffers: MOCK_OFFERS,
      city: MOCK_CITY,
      offers: [],
    }, {
      type: ActionType.SORT_OFFERS,
      payload: DEFAULT_SORTING,
    })).toEqual({
      allOffers: MOCK_OFFERS,
      city: MOCK_CITY,
      offers: MOCK_OFFERS_FILTERED,
    });
  });

  it(`Reducer should update offers by sort offers by high price`, () => {
    expect(offersData({
      allOffers: MOCK_OFFERS,
      city: MOCK_CITY,
      offers: [],
    }, {
      type: ActionType.SORT_OFFERS,
      payload: HIGHT_PRICE_SORTING,
    })).toEqual({
      allOffers: MOCK_OFFERS,
      city: MOCK_CITY,
      offers: MOCK_OFFERS_FILTERED_BY_PRICE_H,
    });
  });

  it(`Reducer should update offers by sort offers by rating`, () => {
    expect(offersData({
      allOffers: MOCK_OFFERS,
      city: MOCK_CITY,
      offers: [],
    }, {
      type: ActionType.SORT_OFFERS,
      payload: RATING_SORTING,
    })).toEqual({
      allOffers: MOCK_OFFERS,
      city: MOCK_CITY,
      offers: MOCK_OFFERS_FILTERED,
    });
  });

  it(`Reducer should update offers by sort offers by low price`, () => {
    expect(offersData({
      allOffers: MOCK_OFFERS,
      city: MOCK_CITY,
      offers: [],
    }, {
      type: ActionType.SORT_OFFERS,
      payload: LOW_PRICE_SORTING,
    })).toEqual({
      allOffers: MOCK_OFFERS,
      city: MOCK_CITY,
      offers: MOCK_OFFERS_FILTERED_BY_PRICE_L,
    });
  });
});

describe(`Async operation work correctly`, () => {
  const api = createAPI(() => {});

  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, [MOCK_SERVER_HOTEL]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [MOCK_ADAPTED_HOTEL],
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchFavoriteOffersList();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, [MOCK_SERVER_HOTEL]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_FAVORITES,
          payload: [MOCK_ADAPTED_HOTEL],
        });
      });
  });

  it(`Should make a correct API call to /nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchNearOffersList(MOCK_CURRENT_OFFER.id);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${MOCK_CURRENT_OFFER.id}${APIRoute.NEAR}`)
      .reply(200, [MOCK_SERVER_HOTEL]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEAR_OFFERS,
          payload: [MOCK_ADAPTED_HOTEL],
        });
      });
  });
});
