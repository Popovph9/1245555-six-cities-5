import React from "react";
import renderer from "react-test-renderer";
import {MainMap} from "./main-map";
import {MOCK_OFFERS} from "../../test-data";

it(`Should MainMap render correctly`, () => {

  const MainMapComponent = renderer
    .create(
        <MainMap
          offers={MOCK_OFFERS}
          activePin={{}}
        />)
    .toJSON();

  expect(MainMapComponent).toMatchSnapshot();
});
