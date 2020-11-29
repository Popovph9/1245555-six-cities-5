import React from "react";
import renderer from "react-test-renderer";
import withInactivePin from "./with-inactive-pin";
import {MOCK_CURRENT_OFFER, MOCK_OFFERS} from "../../test-data";

const MockComponent = () => {
  return (
    <div id="map"></div>
  );
};

const MockComponentWrapped = withInactivePin(MockComponent);

it(`withInactivePin is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      currentOffer={MOCK_CURRENT_OFFER}
      offers={MOCK_OFFERS}
    >
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
