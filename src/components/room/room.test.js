import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Room} from "./room";
import {MOCK_NO_USER, MOCK_USER, MOCK_CURRENT_OFFER, MOCK_REVIEWS, MOCK_OFFERS, MOCK_FAVORITE_CURRENT_OFFER, MOCK_FAVORITE_OFFERS} from "../../test-data";
import {AuthorizationStatus} from "../../const";
import {noop} from "../../utils";

describe(`Should Room connected to store render correctly`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let RoomComponent = null;

  it(`Should Room render correctly when the user is unauthorized`, () => {
    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        currentUser: MOCK_NO_USER,
      },
      STATE: {
        currentOffer: MOCK_CURRENT_OFFER,
      },
    });

    RoomComponent = renderer.create(
        <Provider store={store}>
          <Room
            id={MOCK_CURRENT_OFFER.id}
            onEmailClick={noop}
            getFavorites={noop}
            onLogoClick={noop}
            onCardClick={noop}
            loadOfferData={noop}
            refreshOfferList={noop}
            refreshNearOffersList={noop}
            currentOffer={MOCK_CURRENT_OFFER}
            reviews={MOCK_REVIEWS}
            nearOffers={MOCK_OFFERS}
            changeFavoriteAction={noop}
            redirectToRouteAction={noop}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            currentUser={MOCK_NO_USER}
          >
          </Room>
        </Provider>
    ).toJSON();

    expect(RoomComponent).toMatchSnapshot();
  });

  it(`Should Room render correctly when the user is logged in`, () => {
    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        currentUser: MOCK_USER,
      },
      STATE: {
        currentOffer: MOCK_FAVORITE_CURRENT_OFFER,
      },
    });

    RoomComponent = renderer.create(
        <Provider store={store}>
          <Room
            id={MOCK_FAVORITE_CURRENT_OFFER.id}
            onEmailClick={noop}
            getFavorites={noop}
            onLogoClick={noop}
            onCardClick={noop}
            loadOfferData={noop}
            refreshOfferList={noop}
            refreshNearOffersList={noop}
            currentOffer={MOCK_FAVORITE_CURRENT_OFFER}
            reviews={MOCK_REVIEWS}
            nearOffers={MOCK_FAVORITE_OFFERS}
            changeFavoriteAction={noop}
            redirectToRouteAction={noop}
            authorizationStatus={AuthorizationStatus.AUTH}
            currentUser={MOCK_USER}
          >
          </Room>
        </Provider>
    )
  .toJSON();

    expect(RoomComponent).toMatchSnapshot();
  });
});
