import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import PlacesOfferCard from "./places-offer-card";
import {PLACES_SUBCLASS, AuthorizationStatus} from "../../const";
import {noop} from "../../utils";
import {MOCK_OFFERS, MOCK_CURRENT_OFFER} from "../../test-data";

it(`Should PlacesOfferCard render correctly`, () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    STATE: {
      currentOffer: MOCK_CURRENT_OFFER,
    },
    USER: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <PlacesOfferCard
          className={PLACES_SUBCLASS}
          offers={MOCK_OFFERS}
          onCardClick={noop}
          refreshOfferList={noop}
          currentOfferId={MOCK_CURRENT_OFFER.id}
        />
      </Provider>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
