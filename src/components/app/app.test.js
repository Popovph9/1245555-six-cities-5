import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app";
import {
  MOCK_CITY,
  MOCK_NO_USER,
  MOCK_USER, MOCK_OFFERS,
  MOCK_OFFERS_FILTERED,
  MOCK_FAVORITE_CURRENT_OFFER} from "../../test-data";
import {AuthorizationStatus, DEFAULT_SORTING} from "../../const";
import {noop} from "../../utils";

describe(`Should App connected to store render correctly`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let AppComponent = null;

  it(`Should App render correctly without offers when the user is unauthorized`, () => {
    store = mockStore({
      DATA: {
        allOffers: [],
        offers: [],
        city: MOCK_CITY,
      },
      STATE: {
        currentOffer: {},
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        currentUser: MOCK_NO_USER,
      },
    });

    AppComponent = renderer.create(
        <Provider store={store}>
          <App
            currentOffer={{}}
            getOffersAction={noop}
            loadOfferData={noop}
            getFavorites={noop}
            refreshOfferList={noop}
            refreshNearOffersList={noop}
          >
          </App>
        </Provider>).toJSON();

    expect(AppComponent).toMatchSnapshot();
  });

  it(`Should App render correctly without offers when the user is logged-in`, () => {
    store = mockStore({
      DATA: {
        allOffers: [],
        offers: [],
        city: MOCK_CITY,
      },
      STATE: {
        currentOffer: {},
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        currentUser: MOCK_USER,
      },
    });

    AppComponent = renderer.create(
        <Provider store={store}>
          <App
            currentOffer={{}}
            getOffersAction={noop}
            loadOfferData={noop}
            getFavorites={noop}
            refreshOfferList={noop}
            refreshNearOffersList={noop}
          >
          </App>
        </Provider>).toJSON();

    expect(AppComponent).toMatchSnapshot();
  });

  it(`Should App render correctly with offers when the user is logged in`, () => {
    store = mockStore({
      DATA: {
        allOffers: MOCK_OFFERS,
        offers: MOCK_OFFERS_FILTERED,
        city: MOCK_CITY,
      },
      STATE: {
        currentOffer: MOCK_FAVORITE_CURRENT_OFFER,
        currentSorting: DEFAULT_SORTING,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        currentUser: MOCK_USER,
      },
    });

    AppComponent = renderer.create(
        <Provider store={store}>
          <App
            currentOffer={MOCK_FAVORITE_CURRENT_OFFER}
            getOffersAction={noop}
            loadOfferData={noop}
            getFavorites={noop}
            refreshOfferList={noop}
            refreshNearOffersList={noop}
          >
          </App>
        </Provider>).toJSON();

    expect(AppComponent).toMatchSnapshot();
  });
});
