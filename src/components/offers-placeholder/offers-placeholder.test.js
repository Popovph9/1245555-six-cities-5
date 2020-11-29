import React from "react";
import renderer from "react-test-renderer";
import OffersPlaceholder from "./offers-placeholder";
import {MOCK_CITY} from "../../test-data";

it(`Should OffersPlaceholder render correctly`, () => {
  const tree = renderer
    .create(
        <OffersPlaceholder
          city={MOCK_CITY}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
