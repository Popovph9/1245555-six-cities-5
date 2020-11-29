import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import CitiesOfferList from "./cities-offer-list";
import {CITIES_CLASS, AuthorizationStatus} from "../../const";
import {noop} from "../../utils";
import {MOCK_OFFERS, MOCK_CURRENT_OFFER} from "../../test-data";

it(`Should CitiesOfferList render correctly`, () => {
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
        <CitiesOfferList
          className={CITIES_CLASS}
          offers={MOCK_OFFERS}
          onCardClick={noop}
          refreshOfferList={noop}
          currentOfferId={MOCK_CURRENT_OFFER.id}
        />
      </Provider>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
