import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list";
import {MOCK_CITY} from "../../test-data";
import {noop} from "../../utils";

it(`Should CitiesList render correctly`, () => {
  const tree = renderer
    .create(
        <CitiesList
          currentCity={MOCK_CITY}
          getCity={noop}
          getOffers={noop}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
