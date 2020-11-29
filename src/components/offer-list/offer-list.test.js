import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import OfferList from "./offer-list";
import {CITIES_CLASS, PLACES_CLASS, AuthorizationStatus} from "../../const";
import {noop} from "../../utils";
import {MOCK_OFFERS, MOCK_CURRENT_OFFER} from "../../test-data";


describe(`Should OfferList render correctly`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let OfferListComponent = null;

  beforeEach(() => {
    store = mockStore({
      STATE: {
        currentOffer: MOCK_CURRENT_OFFER,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });
  });

  it(`Should OfferList render correctly with main page class`, () => {
    OfferListComponent = renderer.create(
        <Provider store={store}>
          <OfferList
            className={CITIES_CLASS}
            offers={MOCK_OFFERS}
            onCardClick={noop}
            refreshOfferList={noop}
            currentOfferId={MOCK_CURRENT_OFFER.id}
          />
        </Provider>)
  .toJSON();

    expect(OfferListComponent).toMatchSnapshot();
  });

  it(`Should OfferList render correctly with secondary page class`, () => {
    OfferListComponent = renderer.create(
        <Provider store={store}>
          <OfferList
            className={PLACES_CLASS}
            offers={MOCK_OFFERS}
            onCardClick={noop}
            refreshOfferList={noop}
            currentOfferId={MOCK_CURRENT_OFFER.id}
          />
        </Provider>)
  .toJSON();

    expect(OfferListComponent).toMatchSnapshot();
  });
});
