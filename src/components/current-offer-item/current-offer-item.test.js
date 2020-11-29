import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import CurrentOfferItem from "./current-offer-item";
import {noop} from "../../utils";
import {MOCK_REVIEWS, MOCK_CURRENT_OFFER, MOCK_FAVORITE_CURRENT_OFFER} from "../../test-data";
import {AuthorizationStatus} from "../../const";

describe(`Should CurrentOfferItem render correctly`, () => {
  const mockStore = configureStore([]);
  let CurrentOfferItemComponent = null;
  let store = null;

  it(`Should CurrentOfferItem render correctly without premium offers and casual host when the user is unauthorized`, () => {
    CurrentOfferItemComponent = renderer
    .create(
        <CurrentOfferItem
          reviews={MOCK_REVIEWS}
          currentOffer={MOCK_CURRENT_OFFER}
          changeFavorites={noop}
          redirectToRoute={noop}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          refreshOfferList={noop}
        />)
    .toJSON();

    expect(CurrentOfferItemComponent).toMatchSnapshot();
  });

  it(`Should CurrentOfferItem render correctly with premium offers and super host when the user is authorized`, () => {
    store = mockStore({
      STATE: {
        currentOffer: MOCK_FAVORITE_CURRENT_OFFER,
      },
    });

    CurrentOfferItemComponent = renderer
    .create(
        <Provider store={store}>
          <CurrentOfferItem
            reviews={MOCK_REVIEWS}
            currentOffer={MOCK_FAVORITE_CURRENT_OFFER}
            changeFavorites={noop}
            redirectToRoute={noop}
            authorizationStatus={AuthorizationStatus.AUTH}
            refreshOfferList={noop}
          />
        </Provider>)
    .toJSON();

    expect(CurrentOfferItemComponent).toMatchSnapshot();
  });

  it(`Should CurrentOfferItem render correctly without reviews`, () => {
    CurrentOfferItemComponent = renderer
    .create(
        <CurrentOfferItem
          reviews={[]}
          currentOffer={MOCK_CURRENT_OFFER}
          changeFavorites={noop}
          redirectToRoute={noop}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          refreshOfferList={noop}
        />)
    .toJSON();

    expect(CurrentOfferItemComponent).toMatchSnapshot();
  });
});
