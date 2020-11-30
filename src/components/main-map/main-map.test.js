import React from "react";
import renderer from "react-test-renderer";
import MainMap from "./main-map";
import {MOCK_OFFERS} from "../../test-data";

it(`Should MainMap2 render correctly`, () => {

  const MainMapComponent = renderer
    .create(
        <MainMap
          offers={MOCK_OFFERS}
          activePin={null}
        />)
    .toJSON();

  expect(MainMapComponent).toMatchSnapshot();
});
