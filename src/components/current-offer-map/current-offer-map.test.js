import React from "react";
import renderer from "react-test-renderer";
import CurrentOfferMap from "./current-offer-map";
import {MOCK_OFFERS, MOCK_CURRENT_OFFER} from "../../test-data";

it(`Should CurrentOfferMap render correctly`, () => {

  const CurrentOfferMapComponent = renderer
    .create(
        <CurrentOfferMap
          offers={MOCK_OFFERS}
          currentOffer={MOCK_CURRENT_OFFER}
        />)
    .toJSON();

  expect(CurrentOfferMapComponent).toMatchSnapshot();
});
